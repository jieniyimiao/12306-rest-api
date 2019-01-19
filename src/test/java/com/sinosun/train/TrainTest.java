package com.sinosun.train;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.common.base.Splitter;
import org.apache.commons.lang3.StringUtils;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * Created by caogu on 2018/12/24 14:23.
 * Copyright © 2018.Sinosun All rights reserved
 */
public class TrainTest {

    private static RestTemplate restTemplate;

    @BeforeClass
    public static void startUp()
    {
        restTemplate = new RestTemplate();
    }


    private static String fromDate = "2019-01-28"; //出发时间（格式：yyyy-mm-dd）
    private static String fromStation = "XAY"; //出发站代号
    private static String toStation = "XYY"; //到达站代号
    private static String purposeCodes ="ADULT"; //乘客类型（成人:ADULT，学生:0X00）

    private static String trainNo = "630000K2260L"; //列车号
    private static String startTrainDate = "2019-01-08"; //列车起始站发成日期?

    private static String startStationNo = "24"; //出发站序
    private static String endStationNo = "25"; //出发站序
    private static String seat_types = "1413"; //车票列表倒数第三个参数



    private static String cLeftTicketUrl ="leftTicket/queryA";

    //注:12306的查询接口经常改变（可能一天一改），其变动的主要规律为：https://kyfw.12306.cn/otn/leftTicket/query[A-Z]，就是最后一个字母做变动。
    // 因此，如果程序查询出异常，很大可能就是接口改变了，重新抓下查询接口即可。
    private static String GET_TICKET_LIST_URL = "https://kyfw.12306.cn/otn/%s?" +
            "leftTicketDTO.train_date=%s&" +
            "leftTicketDTO.from_station=%s&" +
            "leftTicketDTO.to_station=%s&" +
            "purpose_codes=%s";


    private static String GET_TICKET_PRICE_URL = "https://kyfw.12306.cn/otn/leftTicket/queryTicketPrice?" +
            "train_no=%s&" +
            "from_station_no=%s&" +
            "to_station_no=%s&" +
            "seat_types=%s&" +
            "train_date=%s";

    private static String GET_TICKET_LINE_URL = "https://kyfw.12306.cn/otn/czxx/queryByTrainNo?" +
            "train_no=%s&" +
            "from_station_telecode=%s&" +
            "to_station_telecode=%s&" +
            "depart_date=%s";

    @Test
    public void getTrainList()
    {
        // 改用jsoup请求
        String getTicketListUrl = String.format(GET_TICKET_LIST_URL, cLeftTicketUrl, fromDate, fromStation, toStation, purposeCodes);
        JSONObject ret = restTemplate.getForObject(getTicketListUrl, JSONObject.class);
        System.out.println(JSON.toJSONString(ret, true));

        // 接口地址变化，获取新地址重新请求 可通过302错误码判断 302 redirect: 302 代表暂时性转移(Temporarily Moved )
        if (ret.containsKey("c_url")) {
            cLeftTicketUrl = ret.getString("c_url");
            getTicketListUrl = String.format(GET_TICKET_LIST_URL, cLeftTicketUrl, fromDate, fromStation, toStation, purposeCodes);
            ret = restTemplate.getForObject(getTicketListUrl, JSONObject.class);
            System.out.println(JSON.toJSONString(ret, true));
        }

        JSONObject data = ret.getJSONObject("data");
        JSONObject map = data.getJSONObject("map"); //站点代码和名字映射
        JSONArray result = data.getJSONArray("result");

        for (int i = 0; i< result.size(); i++) {
            String train = result.getString(i);
            List<String> trainItem = Splitter.on("|").splitToList(train);

            String secretStr = trainItem.get(0); //?
            String buttonTextInfo = trainItem.get(1); //按钮名字：预订

            String trainNo = trainItem.get(2); //列车号
            String trainCode = trainItem.get(3); //车次

            String startStationCode = trainItem.get(4); // 开始站代码
            String endStationCode = trainItem.get(5); // 结束站代码

            String fromStationCode = trainItem.get(6); //出发站代码
            String toStationCode = trainItem.get(7); //到达站代码
            String fromStationName = map.getString(fromStationCode); //出发站
            String toStationName = map.getString(toStationCode); //到达站

            String startTime = trainItem.get(8); //出发时刻
            String arriveTime = trainItem.get(9); //到达时刻
            String runTime = trainItem.get(10); //历时

            String canWebBuy = trainItem.get(11); //是否能购买：Y 可以
            String yp_info = trainItem.get(12); //?

            String start_train_date = trainItem.get(13); //列车起始站发成日期?

            String train_seat_feature = trainItem.get(14); //?
            String location_code = trainItem.get(15); //?
            String from_station_no = trainItem.get(16); //?
            String to_station_no = trainItem.get(17); //?
            String is_support_card = trainItem.get(18); //?
            String controlled_train_flag = trainItem.get(19); //?

            String gg_num = StringUtils.isNotEmpty(trainItem.get(20)) ? trainItem.get(20) : "--"; //?
            String gr_num = StringUtils.isNotEmpty(trainItem.get(21)) ? trainItem.get(21) : "--"; // 高级软卧
            String qt_num = StringUtils.isNotEmpty(trainItem.get(22)) ? trainItem.get(22) : "--"; // 其他
            String rw_num = StringUtils.isNotEmpty(trainItem.get(23)) ? trainItem.get(23) : "--"; // 软卧
            String rz_num = StringUtils.isNotEmpty(trainItem.get(24)) ? trainItem.get(24) : "--"; // 软座
            String tz_num = StringUtils.isNotEmpty(trainItem.get(25)) ? trainItem.get(25) : "--"; //?
            String wz_num = StringUtils.isNotEmpty(trainItem.get(26)) ? trainItem.get(26) : "--"; // 无座
            String yb_num = StringUtils.isNotEmpty(trainItem.get(27)) ? trainItem.get(27) : "--"; //?
            String yw_num = StringUtils.isNotEmpty(trainItem.get(28)) ? trainItem.get(28) : "--"; // 硬卧
            String yz_num = StringUtils.isNotEmpty(trainItem.get(29)) ? trainItem.get(29) : "--"; // 硬座
            String ze_num = StringUtils.isNotEmpty(trainItem.get(30)) ? trainItem.get(30) : "--"; // 二等座
            String zy_num = StringUtils.isNotEmpty(trainItem.get(31)) ? trainItem.get(31) : "--"; // 一等座
            String swz_num = StringUtils.isNotEmpty(trainItem.get(32)) ? trainItem.get(32) : "--"; // 商务特等座
            String srrb_num = StringUtils.isNotEmpty(trainItem.get(33)) ? trainItem.get(33) : "--"; //?

            String yp_ex = trainItem.get(34); //? 查询车票价格时的seat_types字段
            String seat_types = trainItem.get(35); //?
            String exchange_train_flag = trainItem.get(36); //?


            System.out.println("列车号:" + trainCode);
            System.out.println("出发站:" + fromStationName);
            System.out.println("到达站:" + toStationName);
            System.out.println("出发时间:" + startTime);
            System.out.println("到达时间:" + arriveTime);
            System.out.println("历时:" + runTime);
            System.out.println("列车起始站发车日期:" + start_train_date);

            System.out.println("商务座特等座:" + swz_num);
            System.out.println("一等座:" + zy_num);
            System.out.println("二等座:" + ze_num);
            System.out.println("高级软卧:" + gr_num);
            System.out.println("软卧:" + rw_num);
            System.out.println("动卧:" + "+++");
            System.out.println("硬卧:" + yw_num);
            System.out.println("软座:" + rz_num);
            System.out.println("硬座:" + yz_num);
            System.out.println("无座:" + wz_num);
            System.out.println("其他:" + qt_num);
            System.out.println("备注:" + buttonTextInfo);
            System.out.println("\n");


        }

    }


    @Test
    public void queryByTrainNo() {
        // 改用jsoup请求
        String getTicketListUrl = String.format(GET_TICKET_LINE_URL, trainNo, fromStation, toStation, startTrainDate);
        JSONObject ret = restTemplate.getForObject(getTicketListUrl, JSONObject.class);
        System.out.println(JSON.toJSONString(ret, true));

        JSONObject result = new JSONObject();

        JSONArray stops = ret.getJSONObject("data").getJSONArray("data");
        JSONObject stopInfoFirst = stops.getJSONObject(0);
        String startStationName = stopInfoFirst.getString("start_station_name"); //出发城市
        String endStationName = stopInfoFirst.getString("end_station_name"); //到达城市
        String stationTrainCode = stopInfoFirst.getString("station_train_code"); //车次号
        String trainClassName = stopInfoFirst.getString("train_class_name"); //车次类型
        String serviceType = stopInfoFirst.getString("service_type"); //服务类型 0表示无空调 其他表示有空调
        String serviceName = "0".equals(serviceType) ? "无空调" : "有空调";

        result.put("StartStationName", startStationName);
        result.put("EndStationName", endStationName);
        result.put("StationTrainCode", stationTrainCode);
        result.put("TrainClassName", trainClassName);
        result.put("ServiceType", serviceType);
        result.put("ServiceName", serviceName);

        JSONArray resultStops = new JSONArray();
        for (int i = 0; i < stops.size(); i++) {
            JSONObject stopInfo = stops.getJSONObject(i);
            String startTime = stopInfo.getString("start_time"); //出发时间（格式 HH:mm）
            String arriveTime = stopInfo.getString("arrive_time"); //到达时间（格式 HH:mm）
            String stationName = stopInfo.getString("station_name"); //站名
            String stopoverTime = stopInfo.getString("stopover_time"); //停留时间（分钟）
            String stationNo = stopInfo.getString("station_no"); //站序
            Boolean isEnabled = stopInfo.getBoolean("isEnabled"); //是否有效

            JSONObject resultStopInfo = new JSONObject();
            resultStopInfo.put("StartTime", startTime);
            resultStopInfo.put("ArriveTime", arriveTime);
            resultStopInfo.put("StationName", stationName);
            resultStopInfo.put("StopoverTime", stopoverTime);
            resultStopInfo.put("StationNo", stationNo);
            resultStopInfo.put("IsEnabled", isEnabled);
            resultStops.add(resultStopInfo);
        }
        result.put("Stops", resultStops);

        System.out.println(JSON.toJSONString(result, true));

    }

    @Test
    public void queryTicketPrice() {
        // 改用jsoup请求
        String getTicketListUrl = String.format(GET_TICKET_PRICE_URL, trainNo, startStationNo, endStationNo, seat_types, fromDate);
        JSONObject ret = restTemplate.getForObject(getTicketListUrl, JSONObject.class);
        System.out.println(JSON.toJSONString(ret, true));

        JSONObject data = ret.getJSONObject("data");


    }




}
