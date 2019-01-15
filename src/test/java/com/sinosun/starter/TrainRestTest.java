package com.sinosun.starter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
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
    private static final String DOMIAN = "http://localhost:8080/";

    @BeforeClass
    public static void startUp() {
        restTemplate = new RestTemplate();
    }

    @Test
    public void getAllCity() {
        JSONObject request = new JSONObject();
        JSONObject ret = restTemplate.postForObject(DOMIAN + "train/getAllCity", request, JSONObject.class);
        System.out.println(JSON.toJSONString(ret, true));
    }
}
