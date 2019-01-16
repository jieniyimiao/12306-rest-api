package com.sinosun.starter.config;

import com.google.common.base.Stopwatch;
import com.sinosun.starter.model.response.BaseResult;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

/**
 * Created on 2019/1/16 8:44.
 *
 * @author caogu
 */
@Component
@Aspect
public class ControllerAspect {
    private static final Logger logger = LoggerFactory.getLogger(ControllerAspect.class);

    @Pointcut("execution(public * com.sinosun.starter.controller..*.*(..))")
    public void allControllerFunction() {
    }

    @Around("allControllerFunction()")
    public Object handleControllerMethod(ProceedingJoinPoint pjp) throws Throwable {
        Stopwatch stopwatch = Stopwatch.createStarted();

        logger.info("执行Controller方法{}开始，参数：{}", pjp.getSignature().getName(), Arrays.toString(pjp.getArgs()));
        BaseResult baseResult = (BaseResult) pjp.proceed(pjp.getArgs());
        logger.info("执行Controller方法{}结束，返回值：{}", pjp.getSignature().getName(), baseResult);
        logger.info("执行Controller方法{}耗时：{}(ms).", pjp.getSignature().getName(), stopwatch.stop().elapsed(TimeUnit.MILLISECONDS));
        return baseResult;
    }

}
