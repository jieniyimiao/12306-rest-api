package com.sinosun.train.enums;

/**
 * Created on 2019/1/14 12:10.
 *
 * @author caogu
 */
public enum PlatformErrorCode {
    SERVICE_INTERNAL_ERROR(1, "服务器内部错误")
    ;
    private static final int BASE_CODE_VALUE = 10000;
    private static final String BASE_CODE_PREFIX = "P";
    private String code;
    private String message;

    PlatformErrorCode(int code, String message) {
        this.code = buildCode(code);
        this.message = message;
    }

    private String buildCode(int code) {
        int codeValue = BASE_CODE_VALUE + code;
        return BASE_CODE_PREFIX + codeValue;
    }

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
