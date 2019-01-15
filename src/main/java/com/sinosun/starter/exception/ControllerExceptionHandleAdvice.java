package com.sinosun.starter.exception;

import com.sinosun.starter.enums.PlatformErrorCode;
import com.sinosun.starter.model.response.BaseResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created on 2019/1/15 19:09.
 *
 * @author caogu
 */
@RestControllerAdvice
public class ControllerExceptionHandleAdvice {
    private final static Logger logger = LoggerFactory.getLogger(ControllerExceptionHandleAdvice.class);

    @ExceptionHandler
    public BaseResult handler(HttpServletRequest request, HttpServletResponse response, Exception e) {
        logger.error("Restful Http请求发生异常, Path=" + request.getServletPath(), e);

        if (response.getStatus() == HttpStatus.BAD_REQUEST.value()) {
            logger.info("修改返回状态值，oldStatus={} newStatus={}", response.getStatus(), HttpStatus.BAD_REQUEST.value());
            response.setStatus(HttpStatus.OK.value());
        }

        BaseResult baseResult = new BaseResult();
        if (e instanceof ServiceException) {
            ServiceException exception = (ServiceException) e;
            baseResult.setCode(exception.getCode());
            baseResult.setMessage(exception.getMessage());
        } else {
            baseResult.setCode(PlatformErrorCode.SERVICE_INTERNAL_ERROR.getCode());
            baseResult.setMessage(PlatformErrorCode.SERVICE_INTERNAL_ERROR.getMessage());
        }

        return baseResult;
    }
}
