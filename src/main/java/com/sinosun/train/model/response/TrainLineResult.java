package com.sinosun.train.model.response;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;

/**
 * Created on 2019/1/10 20:37.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class TrainLineResult extends BaseResult {
    private TrainLine result;

    public TrainLineResult() {
    }

    public TrainLineResult(TrainLine result) {
        this.result = result;
    }

    public TrainLine getResult() {
        return result;
    }

    public void setResult(TrainLine result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("result", result)
                .toString();
    }
}
