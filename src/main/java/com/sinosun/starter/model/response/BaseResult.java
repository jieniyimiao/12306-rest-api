package com.sinosun.starter.model.response;

import com.alibaba.fastjson.annotation.JSONField;
import com.google.common.base.MoreObjects;

/**
 * Created on 2019/1/10 20:21.
 *
 * @author caogu
 */
public class BaseResult {
    @JSONField(name = "Code")
    private int code;

    @JSONField(name = "Message")
    private String message;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("code", code)
                .add("message", message)
                .toString();
    }
}
