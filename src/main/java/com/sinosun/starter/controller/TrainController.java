package com.sinosun.starter.controller;

import com.sinosun.starter.model.request.NoneRequest;
import com.sinosun.starter.model.response.StationResult;
import com.sinosun.starter.service.TrainService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping(value = "/train/")
public class TrainController {
    private static final Logger logger = LoggerFactory.getLogger(TrainController.class);

    @Autowired
    private TrainService trainService;

    @RequestMapping(value = "getAllCity", method = RequestMethod.POST)
    @ResponseBody
    public StationResult getAllCityHandler(HttpServletRequest request, @RequestBody NoneRequest requestBody) {
        logger.info("getAllCity请求参数为：{}", requestBody);
        return trainService.getAllCity(requestBody);
    }


}
