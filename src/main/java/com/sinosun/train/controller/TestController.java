package com.sinosun.train.controller;

import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by caogu on 2018/12/20 13:34.
 * Copyright © 2018.Sinosun All rights reserved
 */
@RestController
@RequestMapping(value = "/test")
public class TestController {
    private final static Logger logger = LoggerFactory.getLogger(TestController.class);

    @RequestMapping(method = RequestMethod.GET, value = "/test")
    public String test() {
        JSONObject ret = new JSONObject();
        ret.put("data", "hello world");
        return JSONObject.toJSONString(ret);
    }

}