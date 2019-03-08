package com.sinosun.train.model.response;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;

/**
 * 列车时刻Entity
 *
 * Created on 2019/03/07 09:52:18
 *
 * @author 猎隼丶止戈
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class TrainStationTimeTable {

    /**
     * 发车时间（猜测意思）
     */
    private String startTrainDate;

    /**
     * 列车号
     */
    private String trainNo;

    /**
     * 始发站 站点代码
     */
    private String startStationTelecode;

    /**
     * 始发站
     */
    private String startStationName;

    /**
     * 始发站发车时间
     */
    private String startStartTime;

    /**
     * 终到站 站点代码
     */
    private String endStationTelecode;

    /**
     * 终到站
     */
    private String endStationName;

    /**
     * 终到站到达时间
     */
    private String endArriveTime;

    /**
     *
     */
    private String trainTypeCode;

    /**
     *
     */
    private String trainTypeName;

    /**
     * 车次类型代码
     */
    private String trainClassCode;

    /**
     * 车次类型
     */
    private String trainClassName;

    /**
     * 座位类型
     */
    private String seatTypes;

    /**
     * 服务类型
     */
    private String serviceType;

    /**
     * 服务类型中文猜测
     */
    private String serviceTypeStr;

    /**
     * 查询站点在次列车中的位置
     */
    private String stationNo;

    /**
     * 查询站点名称
     */
    private String stationName;

    /**
     * 查询站点代码
     */
    private String stationTelecode;

    /**
     * 途经车次号
     */
    private String stationTrainCode;

    /**
     * 到达日差异天数（猜测）
     */
    private String arriveDayDiff;

    /**
     * 到达查询站点时间
     */
    private String arriveTime;

    /**
     * 查询站点发车时间
     */
    private String startTime;

    /**
     * 发车日差异天数（猜测）
     */
    private String startDayDiff;

    /**
     * 查询站点停靠时间
     */
    private String stopoverTime;

    /**
     * 到达查询站点时，列车运行时间
     */
    private String runningTime;

    public String getStartTrainDate() {
        return startTrainDate;
    }

    public void setStartTrainDate(String startTrainDate) {
        this.startTrainDate = startTrainDate;
    }

    public String getTrainNo() {
        return trainNo;
    }

    public void setTrainNo(String trainNo) {
        this.trainNo = trainNo;
    }

    public String getStartStationTelecode() {
        return startStationTelecode;
    }

    public void setStartStationTelecode(String startStationTelecode) {
        this.startStationTelecode = startStationTelecode;
    }

    public String getStartStationName() {
        return startStationName;
    }

    public void setStartStationName(String startStationName) {
        this.startStationName = startStationName;
    }

    public String getStartStartTime() {
        return startStartTime;
    }

    public void setStartStartTime(String startStartTime) {
        this.startStartTime = startStartTime;
    }

    public String getEndStationTelecode() {
        return endStationTelecode;
    }

    public void setEndStationTelecode(String endStationTelecode) {
        this.endStationTelecode = endStationTelecode;
    }

    public String getEndStationName() {
        return endStationName;
    }

    public void setEndStationName(String endStationName) {
        this.endStationName = endStationName;
    }

    public String getEndArriveTime() {
        return endArriveTime;
    }

    public void setEndArriveTime(String endArriveTime) {
        this.endArriveTime = endArriveTime;
    }

    public String getTrainTypeCode() {
        return trainTypeCode;
    }

    public void setTrainTypeCode(String trainTypeCode) {
        this.trainTypeCode = trainTypeCode;
    }

    public String getTrainTypeName() {
        return trainTypeName;
    }

    public void setTrainTypeName(String trainTypeName) {
        this.trainTypeName = trainTypeName;
    }

    public String getTrainClassCode() {
        return trainClassCode;
    }

    public void setTrainClassCode(String trainClassCode) {
        this.trainClassCode = trainClassCode;
    }

    public String getTrainClassName() {
        return trainClassName;
    }

    public void setTrainClassName(String trainClassName) {
        this.trainClassName = trainClassName;
    }

    public String getStationNo() {
        return stationNo;
    }

    public void setStationNo(String stationNo) {
        this.stationNo = stationNo;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public String getStationTelecode() {
        return stationTelecode;
    }

    public void setStationTelecode(String stationTelecode) {
        this.stationTelecode = stationTelecode;
    }

    public String getStationTrainCode() {
        return stationTrainCode;
    }

    public void setStationTrainCode(String stationTrainCode) {
        this.stationTrainCode = stationTrainCode;
    }

    public String getArriveDayDiff() {
        return arriveDayDiff;
    }

    public void setArriveDayDiff(String arriveDayDiff) {
        this.arriveDayDiff = arriveDayDiff;
    }

    public String getArriveTime() {
        return arriveTime;
    }

    public void setArriveTime(String arriveTime) {
        this.arriveTime = arriveTime;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getStartDayDiff() {
        return startDayDiff;
    }

    public void setStartDayDiff(String startDayDiff) {
        this.startDayDiff = startDayDiff;
    }

    public String getStopoverTime() {
        return stopoverTime;
    }

    public void setStopoverTime(String stopoverTime) {
        this.stopoverTime = stopoverTime;
    }

    public String getRunningTime() {
        return runningTime;
    }

    public void setRunningTime(String runningTime) {
        this.runningTime = runningTime;
    }

    public String getSeatTypes() {
        return seatTypes;
    }

    public void setSeatTypes(String seatTypes) {
        this.seatTypes = seatTypes;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public String getServiceTypeStr() {
        return serviceTypeStr;
    }

    public void setServiceTypeStr(String serviceTypeStr) {
        this.serviceTypeStr = serviceTypeStr;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("startTrainDate", startTrainDate)
                .add("trainNo", trainNo)
                .add("startStationTelecode", startStationTelecode)
                .add("startStationName", startStationName)
                .add("startStartTime", startStartTime)
                .add("endStationTelecode", endStationTelecode)
                .add("endStationName", endStationName)
                .add("endArriveTime", endArriveTime)
                .add("trainTypeCode", trainTypeCode)
                .add("trainTypeName", trainTypeName)
                .add("trainClassCode", trainClassCode)
                .add("trainClassName", trainClassName)
                .add("stationNo", stationNo)
                .add("stationName", stationName)
                .add("stationTelecode", stationTelecode)
                .add("stationTrainCode", stationTrainCode)
                .add("arriveDayDiff", arriveDayDiff)
                .add("arriveTime", arriveTime)
                .add("startTime", startTime)
                .add("startDayDiff", startDayDiff)
                .add("stopoverTime", stopoverTime)
                .add("runningTime", runningTime)
                .toString();
    }
}
