package com.sinosun.train.model.response;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;

import java.util.List;

/**
 * Created on 2019/1/10 20:45.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class TrainLine {
    /**
     * 经停信息列表
     */
    private List<Stop> stops;

    /**
     * 始发站名
     */
    private String startStationName;

    /**
     * 终点站名
     */
    private String endStationName;

    /**
     * 车次代码
     */
    private String trainCode;

    /**
     * 车次类型 例如：快速
     */
    private String trainClassName;

    /**
     * 服务类型 例如："无空调" ， "有空调"
     */
    private String serviceName;

    public List<Stop> getStops() {
        return stops;
    }

    public void setStops(List<Stop> stops) {
        this.stops = stops;
    }

    public String getStartStationName() {
        return startStationName;
    }

    public void setStartStationName(String startStationName) {
        this.startStationName = startStationName;
    }

    public String getEndStationName() {
        return endStationName;
    }

    public void setEndStationName(String endStationName) {
        this.endStationName = endStationName;
    }

    public String getTrainCode() {
        return trainCode;
    }

    public void setTrainCode(String trainCode) {
        this.trainCode = trainCode;
    }

    public String getTrainClassName() {
        return trainClassName;
    }

    public void setTrainClassName(String trainClassName) {
        this.trainClassName = trainClassName;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("stops", stops)
                .add("startStationName", startStationName)
                .add("endStationName", endStationName)
                .add("trainCode", trainCode)
                .add("trainClassName", trainClassName)
                .add("serviceName", serviceName)
                .toString();
    }
}
