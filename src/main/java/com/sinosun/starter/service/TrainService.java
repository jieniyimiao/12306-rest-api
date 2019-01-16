package com.sinosun.starter.service;

import com.google.common.collect.Lists;
import com.sinosun.starter.model.request.NoneRequest;
import com.sinosun.starter.model.request.SearchCityRequest;
import com.sinosun.starter.model.response.Station;
import com.sinosun.starter.model.response.StationList;
import com.sinosun.starter.model.response.StationResult;
import com.sinosun.starter.utils.PreloadData;
import com.sinosun.starter.utils.TrainHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Locale;

/**
 * Created on 2019/1/10 21:00.
 *
 * @author caogu
 */
@Service
public class TrainService {
    private static final Logger logger = LoggerFactory.getLogger(TrainService.class);

    public StationResult getAllCity(NoneRequest requestBody) {
        return new StationResult(new StationList(getAllStation()));
    }

    public StationResult searchCity(SearchCityRequest requestBody) {
        requestBody.validate();

        List<Station> ret = Lists.newArrayList();
        String keyword = requestBody.getKeyword();
        List<Station> stations = getAllStation();
        for (Station station : stations) {
            boolean isMatching = station.getName().startsWith(keyword)
                    || station.getPingYin().toLowerCase(Locale.ENGLISH).startsWith(keyword.toLowerCase(Locale.ENGLISH))
                    || station.getPingYinShort().toLowerCase(Locale.ENGLISH).startsWith(keyword.toLowerCase(Locale.ENGLISH));
            if (isMatching) {
                ret.add(station);
            }
        }
        return new StationResult(new StationList(ret));
    }

    /**
     * 获取火车站点数据，先从本地获取，获取是失败在从12306获取
     * @return 火车站点数据
     */
    private List<Station> getAllStation() {
        List<Station> stations = PreloadData.getTrainAllCity();
        if (CollectionUtils.isEmpty(stations)) {
            stations = TrainHelper.getTrainAllCityFromNet();
        }
        return stations;
    }



}
