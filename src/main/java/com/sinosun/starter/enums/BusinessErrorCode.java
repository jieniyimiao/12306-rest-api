package com.sinosun.starter.enums;

/**
 * Created on 2019/1/14 12:10.
 *
 * @author caogu
 */
public enum BusinessErrorCode {
    REQUEST_PARAM_ERROR(1, "请求参数错误")
    ;
    private static final int BASE_CODE_VALUE = 10000;
    private static final String BASE_CODE_PREFIX = "T";
    private String code;
    private String message;

    BusinessErrorCode(int code, String message) {
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
