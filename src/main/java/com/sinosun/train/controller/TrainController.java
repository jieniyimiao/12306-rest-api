package com.sinosun.train.controller;

import com.alibaba.fastjson.JSONObject;
import com.sinosun.train.model.request.*;
import com.sinosun.train.model.response.*;
import com.sinosun.train.service.TrainStationService;
import com.sinosun.train.service.TrainStationTimeTableService;
import com.sinosun.train.service.TrainTicketService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created on 2019/1/10 20:05.
 *
 * @author caogu
 */
@Controller
@RequestMapping(value = "/train/",
        method = RequestMethod.POST,
        produces = {MediaType.APPLICATION_JSON_VALUE},
        consumes = {MediaType.APPLICATION_JSON_VALUE}
)
public class TrainController {
    private static final Logger logger = LoggerFactory.getLogger(TrainController.class);

    @Autowired
    private TrainStationService trainStationService;
    @Autowired
    private TrainTicketService trainTicketService;
    @Autowired
    private TrainStationTimeTableService trainStationTimeTableService;

    @RequestMapping(value = "getAllCity")
    @ResponseBody
    public StationResult getAllCityHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainStationService.getAllCity(requestBody.toJavaObject(NoneRequest.class));
    }

    @RequestMapping(value = "getHotCity")
    @ResponseBody
    public StationResult getHotCityHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainStationService.getHotCity(requestBody.toJavaObject(NoneRequest.class));
    }

    @RequestMapping(value = "getTrainCode")
    @ResponseBody
    public TrainCodeResult getTrainCodeHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainStationService.getAllTrainCode(requestBody.toJavaObject(NoneRequest.class));
    }

    @RequestMapping(value = "searchCity")
    @ResponseBody
    public StationResult searchCityHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainStationService.searchCity(requestBody.toJavaObject(SearchCityRequest.class));
    }

    @RequestMapping(value = "getTicketList")
    @ResponseBody
    public TicketListResult getTicketListHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainTicketService.getTicketList(requestBody.toJavaObject(GetTicketListRequest.class));
    }

    @RequestMapping(value = "getTrainLine")
    @ResponseBody
    public TrainLineResult getTrainLineHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainTicketService.getTrainLine(requestBody.toJavaObject(GetTrainLineRequest.class));
    }

    @RequestMapping(value = "getTrainStationTimeTable")
    @ResponseBody
    public TrainStationTimeTableResult getTrainStationTimeTable(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainStationTimeTableService.getTrainStationTimeTable(requestBody.toJavaObject(GetTrainStationTimeTableRequest.class));
    }
}
