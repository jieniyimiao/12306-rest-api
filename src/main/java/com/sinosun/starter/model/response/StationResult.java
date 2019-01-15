package com.sinosun.starter.model.response;

import com.alibaba.fastjson.annotation.JSONField;
import com.google.common.base.MoreObjects;

/**
 * Created on 2019/1/10 20:37.
 *
 * @author caogu
 */
public class StationResult extends BaseResult {
    @JSONField(name = "Result")
    private StationList result;

    public StationResult() {
    }

    public StationResult(StationList result) {
        this.result = result;
    }

    public StationList getResult() {
        return result;
    }

    public void setResult(StationList result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("result", result)
                .toString();
    }
}
