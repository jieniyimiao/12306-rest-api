package com.sinosun.train.service;

import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.Lists;
import com.sinosun.train.constants.RedisKeyConstant;
import com.sinosun.train.model.request.NoneRequest;
import com.sinosun.train.model.request.SearchCityRequest;
import com.sinosun.train.model.response.Station;
import com.sinosun.train.model.response.StationList;
import com.sinosun.train.model.response.StationResult;
import com.sinosun.train.model.response.TrainCodeResult;
import com.sinosun.train.utils.PreloadData;
import com.sinosun.train.utils.RedisUtils;
import com.sinosun.train.utils.TrainHelper;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Created on 2019/1/10 21:00.
 *
 * @author caogu
 */
@Service
public class TrainStationService {
    private static final Logger logger = LoggerFactory.getLogger(TrainStationService.class);

    @Autowired
    private RedisUtils redisUtils;

    public StationResult getAllCity(NoneRequest requestBody) {
        // 从本地获取
        // return new StationResult(new StationList(getAllStation()));
        // 优先从redis获取
        return new StationResult(new StationList(getAllStatioonFromRedis()));
    }

    public StationResult getHotCity(NoneRequest requestBody) {
        // 从本地获取
        // return new StationResult(new StationList(PreloadData.getTrainHotCity()));
        // 优先从redis获取
        return new StationResult(new StationList(getHotStatioonFromRedis()));
    }

    /**
     * 获取 车次 - 列车号 数据
     *
     * @param requestBody
     * @return
     */
    public TrainCodeResult getAllTrainCode(NoneRequest requestBody) {
        // 优先从redis获取
        return new TrainCodeResult(getTrainCodeFromRedis());
    }

    public StationResult searchCity(SearchCityRequest requestBody) {
        requestBody.validate();

        List<Station> ret = Lists.newArrayList();
        String keyword = requestBody.getKeyword();
        // 从本地获取
        // List<Station> stations = getAllStation();
        // 从redis获取
        List<Station> stations = getAllStatioonFromRedis();
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
     *
     * @return 火车站点数据
     */
    private List<Station> getAllStation() {
        List<Station> stations = PreloadData.getTrainAllCity();
        if (CollectionUtils.isEmpty(stations)) {
            stations = TrainHelper.getTrainAllCityFromNet();
        }
        return stations;
    }

    /**
     * 获取火车站点数据，先从redis获取，获取是失败在从12306获取
     *
     * @return
     */
    private List<Station> getAllStatioonFromRedis() {
        // 优先从redis中获取站点信息
        String allStationStr = (String) redisUtils.get(RedisKeyConstant.REDIS_KEY_LOCAL_DATA_STATION);
        List<Station> stations = null;
        if (StringUtils.isNotBlank(allStationStr)) {
            stations = JSONObject.parseArray(allStationStr, Station.class);
        }

        if (CollectionUtils.isEmpty(stations)) {
            stations = TrainHelper.getTrainAllCityFromNet();
            // 设置到缓存
            redisUtils.set(RedisKeyConstant.REDIS_KEY_LOCAL_DATA_STATION, JSONObject.toJSONString(stations), 1L, TimeUnit.DAYS);
        }
        return stations;
    }

    /**
     * 获取热门火车站点数据，先从redis获取，获取是失败在从12306获取
     *
     * @return
     */
    private List<Station> getHotStatioonFromRedis() {
        // 优先从redis中获取站点信息
        String HotStationStr = (String) redisUtils.get(RedisKeyConstant.REDIS_KEY_LOCAL_DATA_HOT_STATION);
        List<Station> hotStationsList = null;
        if (StringUtils.isNotBlank(HotStationStr)) {
            hotStationsList = JSONObject.parseArray(HotStationStr, Station.class);
        }

        if (CollectionUtils.isEmpty(hotStationsList)) {
            hotStationsList = TrainHelper.getTrainHotStationFromNet();
            // 设置到缓存
            redisUtils.set(RedisKeyConstant.REDIS_KEY_LOCAL_DATA_HOT_STATION, JSONObject.toJSONString(hotStationsList), 1L, TimeUnit.DAYS);
        }
        return hotStationsList;
    }

    /**
     * 获取 车次 - 列车号 数据，先从redis获取，获取是失败在从12306获取
     *
     * @return
     */
    private Map<String, Object> getTrainCodeFromRedis() {
        // 优先从redis中获取站点信息
        String trainNoLinkStr = (String) redisUtils.get(RedisKeyConstant.REDIS_KEY_LOCAL_DATA_TRAIN_NO_LINK);
        Map<String, Object> trainNoLinkMap = null;
        if (StringUtils.isNotBlank(trainNoLinkStr)) {
            trainNoLinkMap = JSONObject.parseObject(trainNoLinkStr, Map.class);
        }

        if (CollectionUtils.isEmpty(trainNoLinkMap)) {
            trainNoLinkMap = TrainHelper.getAllTrainNoListFromNet();
            // 设置到缓存
            redisUtils.set(RedisKeyConstant.REDIS_KEY_LOCAL_DATA_TRAIN_NO_LINK, JSONObject.toJSONString(trainNoLinkMap), 1L, TimeUnit.DAYS);
        }
        return trainNoLinkMap;
    }
}
