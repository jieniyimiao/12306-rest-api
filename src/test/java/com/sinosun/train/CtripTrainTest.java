package com.sinosun.train;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.sinosun.train.utils.HttpUtil;
import com.sinosun.train.utils.JsonUtil;
import com.sinosun.train.vo.GetTicketPriceReq;
import org.joda.time.LocalDateTime;
import org.jsoup.Connection;
import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

/**
 * 从携程获取火车票价格数据
 * Created on 2019/7/31 8:48.
 * @author caogu
 */
public class CtripTrainTest {
    private static Logger logger = LoggerFactory.getLogger(CtripTrainTest.class);
    private static RestTemplate restTemplate;

    @BeforeClass
    public static void startUp() {
        restTemplate = new RestTemplate();
    }

    @Test
    public void getTrainList() {

        String getTicketPriceUrl = "https://m.ctrip.com/restapi/soa2/14666/json/GetBookingByStationV3?_fxpcqlniredt=09031010110784000474";

        GetTicketPriceReq getTicketPriceReq = new GetTicketPriceReq();
        getTicketPriceReq.setDepartDate(LocalDateTime.parse("2019-07-31").toDate());
        getTicketPriceReq.setArriveStation("咸阳");
        getTicketPriceReq.setDepartStation("西安");
        getTicketPriceReq.validate();

        JSONObject req = JSONObject.parseObject(JSONObject.toJSONString(getTicketPriceReq));

        JSONObject ret = JsonUtil.parseObject(HttpUtil.request(getTicketPriceUrl, Connection.Method.POST, req));
        System.out.println(JSON.toJSONString(ret, true));


        JSONObject responseStatus = ret.getJSONObject("ResponseStatus");
        if (!"Success".equals(responseStatus.getString("Ack"))) {
            logger.error("请求携程获取火车票价格失败：{}", responseStatus.toJSONString());
        }

        JSONObject responseBody = ret.getJSONObject("ResponseBody");
        System.out.println(JSON.toJSONString(responseBody, true));
    }

}
