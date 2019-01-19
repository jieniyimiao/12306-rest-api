package com.sinosun.train;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.sinosun.train.model.response.StationResult;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.web.client.RestTemplate;

/**
 * Created on 2019/1/15 19:46.
 *
 * @author caogu
 */
public class TrainRestTest {
    private static RestTemplate restTemplate;
    private static final String DOMAIN = "http://localhost:8080/";

    @BeforeClass
    public static void startUp() {
        restTemplate = new RestTemplate();
    }

    @Test
    public void getAllCity() {
        JSONObject request = new JSONObject();
        StationResult ret = restTemplate.postForObject(DOMAIN + "train/getAllCity", request, StationResult.class);

        Assert.assertEquals("0", ret.getCode());
        Assert.assertTrue(!ret.getResult().getStations().isEmpty());

        System.out.println(JSON.toJSONString(ret, true));
//        String httpRes = HttpUtil.request(DOMAIN + "train/getAllCity",  Connection.Method.POST, request);
    }

    @Test
    public void searchCity() {
        JSONObject request = new JSONObject().fluentPut("Keyword", "西安");
        StationResult ret = restTemplate.postForObject(DOMAIN + "train/searchCity", request, StationResult.class);

        Assert.assertEquals("0", ret.getCode());
        Assert.assertTrue(ret.getResult().getStations().size() == 3);

        System.out.println(JSON.toJSONString(ret, true));
    }
}
