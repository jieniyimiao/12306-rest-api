package com.sinosun.train.vo;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;
import org.assertj.core.util.Lists;

import java.util.ArrayList;

/**
 * Created on 2019/7/31 9:41.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.CamelCase)
public class Extension {
    private String name = "protocal";
    private String value = "https";

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("name", name)
                .add("value", value)
                .toString();
    }
}
