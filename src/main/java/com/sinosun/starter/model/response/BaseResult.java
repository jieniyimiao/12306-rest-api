package com.sinosun.starter.model.response;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;

/**
 * Created on 2019/1/10 20:21.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class BaseResult {
    private String code = "0";

    private String message;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
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
