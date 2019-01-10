package com.sinosun.starter.model.response;

import com.alibaba.fastjson.annotation.JSONField;
import com.google.common.base.MoreObjects;

/**
 * Created on 2019/1/10 20:38.
 *
 * @author caogu
 */
public class Station {
    @JSONField(name = "Name")
    private String name;

    @JSONField(name = "StationCode")
    private String stationCode;

    @JSONField(name = "PingYin")
    private String pingYin;

    @JSONField(name = "PingYinShort")
    private String pingYinShort;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStationCode() {
        return stationCode;
    }

    public void setStationCode(String stationCode) {
        this.stationCode = stationCode;
    }

    public String getPingYin() {
        return pingYin;
    }

    public void setPingYin(String pingYin) {
        this.pingYin = pingYin;
    }

    public String getPingYinShort() {
        return pingYinShort;
    }

    public void setPingYinShort(String pingYinShort) {
        this.pingYinShort = pingYinShort;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("name", name)
                .add("stationCode", stationCode)
                .add("pingYin", pingYin)
                .add("pingYinShort", pingYinShort)
                .toString();
    }
}
