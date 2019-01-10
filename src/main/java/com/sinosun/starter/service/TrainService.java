package com.sinosun.starter.service;

import com.alibaba.fastjson.JSONArray;
import com.google.common.collect.Lists;
import com.sinosun.starter.model.request.NoneRequest;
import com.sinosun.starter.model.response.Station;
import com.sinosun.starter.model.response.StationList;
import com.sinosun.starter.model.response.StationResult;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.List;

/**
 * Created on 2019/1/10 21:00.
 *
 * @author caogu
 */
@Service
public class TrainService {
    private static final Logger logger = LoggerFactory.getLogger(TrainService.class);

    public StationResult getAllCity(NoneRequest requestBody) {
        StationResult stationResult = new StationResult();
        StationList stationList = new StationList();
        stationList.setStations(getTrainAllCity());
        stationResult.setResult(stationList);
        return stationResult;
    }

    private List<Station> getTrainAllCity() {
        List<Station> stations = Lists.newArrayList();
        String path = null;
        try {
            path = ResourceUtils.getFile("classpath:TrainAllStation.json").getAbsolutePath();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        try (InputStream in = new FileInputStream(new File(path))) {
            String result = IOUtils.toString(in, "UTF-8");
            return JSONArray.parseArray(result, Station.class);
        } catch (Exception e) {
            logger.error("getTrainAllCity", e);
        }
        return stations;
    }
}
