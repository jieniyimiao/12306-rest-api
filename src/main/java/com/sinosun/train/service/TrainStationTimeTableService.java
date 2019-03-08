package com.sinosun.train.service;

import cn.hutool.core.date.DateUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.Lists;
import com.sinosun.train.model.request.GetTrainStationTimeTableRequest;
import com.sinosun.train.model.response.TrainStationTimeTable;
import com.sinosun.train.model.response.TrainStationTimeTableResult;
import com.sinosun.train.utils.TrainHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

/**
 * Created on 2019/03/08
 *
 * @author 猎隼丶止戈
 */
@Service
public class TrainStationTimeTableService {
    private static final Logger logger = LoggerFactory.getLogger(TrainStationTimeTableService.class);

    private static final String DATE_FORMAT = "yyyy-MM-dd";

    private static String baseUrl = "https://kyfw.12306.cn";
    private static String publicName = "/otn";
    private static String getTrainStationTimeTableUrlFmt = baseUrl + publicName +
            "/czxx/query?" +
            "train_start_date=%s&" +
            "train_station_name=%s&" +
            "train_station_code=%s&" +
            "randCode=";


    /**
     * 获取查询站点时刻表
     *
     * @param requestBody
     * @return
     */
    public TrainStationTimeTableResult getTrainStationTimeTable(GetTrainStationTimeTableRequest requestBody) {
        requestBody.validate();

        String trainStationName = requestBody.getTrainStationName();
        String trainStationCode = requestBody.getTrainStationCode();
        String trainStartDate = DateUtil.formatDate(requestBody.getTrainStartDate());

        return new TrainStationTimeTableResult(getAnalysisTrainStaionTimeTable(trainStationName, trainStationCode, trainStartDate));
    }

    /**
     * 查询列车站点时刻表
     *
     * @param trainStationName
     * @param trainStationCode
     * @param trainStartDate
     * @return
     */
    private List<TrainStationTimeTable> getAnalysisTrainStaionTimeTable(String trainStationName, String trainStationCode, String trainStartDate) {
        // 生成请求链接
        String trainStaionTimeTableUrl = String.format(getTrainStationTimeTableUrlFmt, trainStartDate, trainStationName, trainStationCode);
        JSONObject ret12306 = TrainHelper.requestTo12306(trainStaionTimeTableUrl);
        JSONArray dataArray = ret12306.getJSONObject("data").getJSONArray("data");

        // 返回结果不为空时
        List<TrainStationTimeTable> trainStationTimeTableList = Lists.newArrayList();
        if (!CollectionUtils.isEmpty(dataArray)) {
            for (int i = 0; i < dataArray.size(); i++) {
                TrainStationTimeTable trainStationTimeTable = new TrainStationTimeTable();
                JSONObject trainStationTimeInfo = dataArray.getJSONObject(i);

                String startTrainDate = trainStationTimeInfo.getString("start_train_date");
                String trainNo = trainStationTimeInfo.getString("train_no");
                String startStationTelecode = trainStationTimeInfo.getString("start_station_telecode");
                String startStationName = trainStationTimeInfo.getString("start_station_name");
                String startStartTime = trainStationTimeInfo.getString("start_start_time");
                String endStationTelecode = trainStationTimeInfo.getString("end_station_telecode");
                String endStationName = trainStationTimeInfo.getString("end_station_name");
                String endArriveTime = trainStationTimeInfo.getString("end_arrive_time");
                String trainTypeCode = trainStationTimeInfo.getString("train_type_code");
                String trainTypeName = trainStationTimeInfo.getString("train_type_name");
                String trainClassCode = trainStationTimeInfo.getString("train_class_code");
                String trainClassName = trainStationTimeInfo.getString("train_class_name");
                String stationNo = trainStationTimeInfo.getString("station_no");
                String stationName = trainStationTimeInfo.getString("station_name");
                String stationTelecode = trainStationTimeInfo.getString("station_telecode");
                String stationTrainCode = trainStationTimeInfo.getString("station_train_code");
                String arriveDayDiff = trainStationTimeInfo.getString("arrive_day_diff");
                String arriveTime = trainStationTimeInfo.getString("arrive_time");
                String startTime = trainStationTimeInfo.getString("start_time");
                String startDayDiff = trainStationTimeInfo.getString("start_day_diff");
                String stopoverTime = trainStationTimeInfo.getString("stopover_time");
                String runningTime = trainStationTimeInfo.getString("running_time");
                String seatTypes = trainStationTimeInfo.getString("seat_types");
                String serviceType = trainStationTimeInfo.getString("service_type");
                String serviceTypeStr = "0".equals(serviceType) ? "无空调" : "有空调";

                trainStationTimeTable.setStartTrainDate(startTrainDate);
                trainStationTimeTable.setTrainNo(trainNo);
                trainStationTimeTable.setStartStationTelecode(startStationTelecode);
                trainStationTimeTable.setStartStationName(startStationName);
                trainStationTimeTable.setStartStartTime(startStartTime);
                trainStationTimeTable.setEndStationTelecode(endStationTelecode);
                trainStationTimeTable.setEndStationName(endStationName);
                trainStationTimeTable.setEndArriveTime(endArriveTime);
                trainStationTimeTable.setTrainTypeCode(trainTypeCode);
                trainStationTimeTable.setTrainTypeName(trainTypeName);
                trainStationTimeTable.setTrainClassCode(trainClassCode);
                trainStationTimeTable.setTrainClassName(trainClassName);
                trainStationTimeTable.setStationNo(stationNo);
                trainStationTimeTable.setStationName(stationName);
                trainStationTimeTable.setStationTelecode(stationTelecode);
                trainStationTimeTable.setStationTrainCode(stationTrainCode);
                trainStationTimeTable.setArriveDayDiff(arriveDayDiff);
                trainStationTimeTable.setArriveTime(arriveTime);
                trainStationTimeTable.setStartTime(startTime);
                trainStationTimeTable.setStartDayDiff(startDayDiff);
                trainStationTimeTable.setStopoverTime(stopoverTime);
                trainStationTimeTable.setRunningTime(runningTime);
                trainStationTimeTable.setSeatTypes(seatTypes);
                trainStationTimeTable.setServiceType(serviceType);
                trainStationTimeTable.setServiceTypeStr(serviceTypeStr);

                trainStationTimeTableList.add(trainStationTimeTable);
            }
        }

        return trainStationTimeTableList;
    }

}
