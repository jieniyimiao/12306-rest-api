package com.sinosun.train.controller;

import com.alibaba.fastjson.JSONObject;
import com.sinosun.train.model.request.NoneRequest;
import com.sinosun.train.model.request.SearchCityRequest;
import com.sinosun.train.model.response.StationResult;
import com.sinosun.train.service.TrainService;
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
    private TrainService trainService;

    @RequestMapping(value = "getAllCity")
    @ResponseBody
    public StationResult getAllCityHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainService.getAllCity(requestBody.toJavaObject(NoneRequest.class));
    }

    @RequestMapping(value = "searchCity")
    @ResponseBody
    public StationResult searchCityHandler(HttpServletRequest request, @RequestBody JSONObject requestBody) {
        return trainService.searchCity(requestBody.toJavaObject(SearchCityRequest.class));
    }




}
