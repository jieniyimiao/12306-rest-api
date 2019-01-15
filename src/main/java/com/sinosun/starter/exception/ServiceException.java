package com.sinosun.starter.exception;

import com.sinosun.starter.enums.BusinessErrorCode;
import com.sinosun.starter.enums.PlatformErrorCode;

/**
 * Created on 2019/1/14 11:37.
 *
 * @author caogu
 */
public class ServiceException extends RuntimeException {
    /**
     * 错误码
     */
    private String code;

    /*public ServiceException(String message, String code) {
        super(message);
        this.code = code;
    }*/

    public ServiceException(BusinessErrorCode businessErrorCode) {
        super(businessErrorCode.getMessage());
        this.code = businessErrorCode.getCode();
    }

    public ServiceException(BusinessErrorCode businessErrorCode, Throwable cause) {
        super(businessErrorCode.getMessage(), cause);
        this.code = businessErrorCode.getCode();
    }

    public ServiceException(PlatformErrorCode platformErrorCode) {
        super(platformErrorCode.getMessage());
        this.code = platformErrorCode.getCode();
    }

    public ServiceException(PlatformErrorCode businessErrorCode, Throwable cause) {
        super(businessErrorCode.getMessage(), cause);
        this.code = businessErrorCode.getCode();
    }

    /*public ServiceException(String message, String code, Throwable cause) {
        super(message, cause);
        this.code = code;
    }*/

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
