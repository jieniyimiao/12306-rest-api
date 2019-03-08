package com.sinosun.train;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.sinosun.train.model.response.StationResult;
import com.sinosun.train.model.response.TicketListResult;
import com.sinosun.train.model.response.TrainLineResult;
import com.sinosun.train.model.response.TrainStationTimeTableResult;
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
    public void getHotCity() {
        JSONObject request = new JSONObject();
        StationResult ret = restTemplate.postForObject(DOMAIN + "train/getHotCity", request, StationResult.class);

        Assert.assertEquals("0", ret.getCode());
        Assert.assertTrue(!ret.getResult().getStations().isEmpty());

        System.out.println(JSON.toJSONString(ret, true));
    }

    @Test
    public void searchCity() {
        JSONObject request = new JSONObject().fluentPut("Keyword", "西安");
        StationResult ret = restTemplate.postForObject(DOMAIN + "train/searchCity", request, StationResult.class);

        Assert.assertEquals("0", ret.getCode());
        Assert.assertTrue(ret.getResult().getStations().size() == 3);

        System.out.println(JSON.toJSONString(ret, true));
    }

    @Test
    public void getTicketList() {
        JSONObject request = new JSONObject();
        request.put("FromStationCode", "XAY");
        request.put("ToStationCode", "XYY");
        request.put("FromDate", "2019-01-28");
//        request.put("IsStudent", true);
        TicketListResult ret = restTemplate.postForObject(DOMAIN + "train/getTicketList", request, TicketListResult.class);
        System.out.println(JSON.toJSONString(ret, true));
    }

    @Test
    public void getTrainLine() {
        JSONObject request = new JSONObject();
        request.put("TrainNo", "5n000G167004");
        request.put("TrainCode", "K227");
        request.put("FromStationCode", "XAY");
        request.put("ToStationCode", "XYY");
        request.put("FromDate", "2019-02-22");
        TrainLineResult ret = restTemplate.postForObject(DOMAIN + "train/getTrainLine", request, TrainLineResult.class);
        System.out.println(JSON.toJSONString(ret, true));
    }

    @Test
    public void getTrainStationTimeTable() {
        JSONObject request = new JSONObject();
        request.put("TrainStationName", "南靖");
        request.put("TrainStationCode", "NJS");
        request.put("TrainStartDate", "2019-03-08");
        TrainStationTimeTableResult ret = restTemplate.postForObject(DOMAIN + "train/getTrainStationTimeTable", request, TrainStationTimeTableResult.class);
        System.out.println(JSON.toJSONString(ret, true));
    }
}
