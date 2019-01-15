package com.sinosun.starter.model.response;

import com.alibaba.fastjson.annotation.JSONField;
import com.google.common.base.MoreObjects;

import java.util.List;

/**
 * Created on 2019/1/10 20:45.
 *
 * @author caogu
 */
public class StationList {
    @JSONField(name = "Stations")
    protected List<Station> stations;

    public StationList() {
    }

    public StationList(List<Station> stations) {
        this.stations = stations;
    }

    public List<Station> getStations() {
        return stations;
    }

    public void setStations(List<Station> stations) {
        this.stations = stations;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("stations", stations)
                .toString();
    }
}
