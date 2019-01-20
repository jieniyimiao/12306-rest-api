package com.sinosun.train.model.response;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;

/**
 * Created on 2019/1/10 20:38.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class Stop {
    /**
     * 出发时间（格式 HH:mm）
     */
    private String startTime;

    /**
     * 到达时间（格式 HH:mm 或者----）
     */
    private String arriveTime;

    /**
     * 到达站名
     */
    private String stationName;

    /**
     * 停留时间（分钟） 可能为----
     */
    private String stopoverTime;

    /**
     * 站序（01开始）
     */
    private String stationNo;

    /**
     * 是否是我们搜索的出行站和到达站 false不是 true是
     */
    private Boolean isSearchStation;

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getArriveTime() {
        return arriveTime;
    }

    public void setArriveTime(String arriveTime) {
        this.arriveTime = arriveTime;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public String getStopoverTime() {
        return stopoverTime;
    }

    public void setStopoverTime(String stopoverTime) {
        this.stopoverTime = stopoverTime;
    }

    public String getStationNo() {
        return stationNo;
    }

    public void setStationNo(String stationNo) {
        this.stationNo = stationNo;
    }

    public Boolean getIsSearchStation() {
        return isSearchStation;
    }

    public void setIsSearchStation(Boolean searchStation) {
        isSearchStation = searchStation;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("startTime", startTime)
                .add("arriveTime", arriveTime)
                .add("stationName", stationName)
                .add("stopoverTime", stopoverTime)
                .add("stationNo", stationNo)
                .add("isSearchStation", isSearchStation)
                .toString();
    }
}
