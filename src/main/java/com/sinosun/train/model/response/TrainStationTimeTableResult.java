package com.sinosun.train.model.response;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;

import java.util.List;

/**
 * Created on 2019/03/07 09:52:18
 *
 * @author 猎隼丶止戈
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class TrainStationTimeTableResult extends BaseResult {
    private List<TrainStationTimeTable> result;

    public TrainStationTimeTableResult() {
    }

    public TrainStationTimeTableResult(List<TrainStationTimeTable> result) {
        this.result = result;
    }

    public List<TrainStationTimeTable> getResult() {
        return result;
    }

    public void setResult(List<TrainStationTimeTable> result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("result", result)
                .toString();
    }
}
