package com.sinosun.train;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.common.base.Splitter;
import com.google.common.collect.Maps;
import com.sinosun.train.utils.HttpUtil;
import com.sinosun.train.utils.JsonUtil;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Connection;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

/**
 * Created on 2019/1/15 19:46.
 *
 * @author caogu
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
    private static String endStationNo = "25"; //到达站序
    private static String seat_types = "1413"; //车票列表倒数第三个参数

    private static String baseUrl = "https://kyfw.12306.cn";
    private static String publicName = "/otn";
    private static String leftTicketUrl ="leftTicket/queryA";

    //注:12306的查询接口经常改变（可能一天一改），其变动的主要规律为：https://kyfw.12306.cn/otn/leftTicket/query[A-Z]，就是最后一个字母做变动。
    // 因此，如果程序查询出异常，很大可能就是接口改变了，重新抓下查询接口即可。
    private static String getTicketListUrlFmt = baseUrl + publicName  + "/%s?" +
            "leftTicketDTO.train_date=%s&" +
            "leftTicketDTO.from_station=%s&" +
            "leftTicketDTO.to_station=%s&" +
            "purpose_codes=%s";


    private static String getTicketPriceUrlFmt = baseUrl + publicName  + "/leftTicket/queryTicketPrice?" +
            "train_no=%s&" +
            "from_station_no=%s&" +
            "to_station_no=%s&" +
            "seat_types=%s&" +
            "train_date=%s";

    private static String getTicketLineUrlFmt = baseUrl + publicName  + "/czxx/queryByTrainNo?" +
            "train_no=%s&" +
            "from_station_telecode=%s&" +
            "to_station_telecode=%s&" +
            "depart_date=%s";

    @Test
    public void getTrainList()
    {
        String getTicketListUrl = String.format(getTicketListUrlFmt, leftTicketUrl, fromDate, fromStation, toStation, purposeCodes);
        JSONObject ret = JsonUtil.parseObject(HttpUtil.request(getTicketListUrl, Connection.Method.GET, null));
        System.out.println(JSON.toJSONString(ret, true));

        // 接口地址变化，获取新地址重新请求 可通过302错误码判断 302 redirect: 302 代表暂时性转移(Temporarily Moved )
        if (ret.containsKey("c_url")) {
            leftTicketUrl = ret.getString("c_url");
            getTicketListUrl = String.format(getTicketListUrlFmt, leftTicketUrl, fromDate, fromStation, toStation, purposeCodes);
            ret = JsonUtil.parseObject(HttpUtil.request(getTicketListUrl, Connection.Method.GET, null));
            System.out.println(JSON.toJSONString(ret, true));
        }

        JSONObject data = ret.getJSONObject("data");
        JSONObject map = data.getJSONObject("datamap"); //站点代码和名字映射
        JSONArray result = data.getJSONArray("result");

        for (int i = 0; i< result.size(); i++) {
            String train = result.getString(i);
            List<String> trainItem = Splitter.on("|").splitToList(train);

            String secretStr = trainItem.get(0); //?
            String buttonTextInfo = trainItem.get(1); //按钮名字：预订

            String trainNo = trainItem.get(2); //列车号
            String trainCode = trainItem.get(3); //车次

            String startStationCode = trainItem.get(4); // 起始站代码
            String endStationCode = trainItem.get(5); // 结束站代码

            String fromStationCode = trainItem.get(6); //出发站代码
            String toStationCode = trainItem.get(7); //到达站代码
            String fromStationName = map.getString(fromStationCode); //出发站
            String toStationName = map.getString(toStationCode); //到达站

            String startTime = trainItem.get(8); //出发时刻
            String arriveTime = trainItem.get(9); //到达时刻
            String runTime = trainItem.get(10); //历时

            String canWebBuy = trainItem.get(11); //是否能购买：Y 可以 N 不可 IS_TIME_NOT_BUY 列车运行图调整,暂停发售/列车停运
            String ypInfo = trainItem.get(12); //?

            String startTrainDate = trainItem.get(13); //列车起始站发成日期

            String trainSeatFeature = trainItem.get(14); //?
            String locationCode = trainItem.get(15); //?
            String fromStationNo = trainItem.get(16); //出发站站序（对应火车经停信息中的站序）01表示始发站，大于1则表示过站
            String toStationNo = trainItem.get(17); //到达站站序（对应火车经停信息中的站序）
            String isSupportCard = trainItem.get(18); //可凭二代身份证直接进出站 1 可以 0 不可以
            String controlledTrainFlag = trainItem.get(19); //?

            String ggNum = StringUtils.isNotEmpty(trainItem.get(20)) ? trainItem.get(20) : "--"; //?
            String grNum = StringUtils.isNotEmpty(trainItem.get(21)) ? trainItem.get(21) : "--"; // 高级软卧
            String qtNum = StringUtils.isNotEmpty(trainItem.get(22)) ? trainItem.get(22) : "--"; // 其他
            String rwNum = StringUtils.isNotEmpty(trainItem.get(23)) ? trainItem.get(23) : "--"; // 软卧，一等卧
            String rzNum = StringUtils.isNotEmpty(trainItem.get(24)) ? trainItem.get(24) : "--"; // 软座
            String tzNum = StringUtils.isNotEmpty(trainItem.get(25)) ? trainItem.get(25) : "--"; //? 特等座?
            String wzNum = StringUtils.isNotEmpty(trainItem.get(26)) ? trainItem.get(26) : "--"; // 无座
            String ybNum = StringUtils.isNotEmpty(trainItem.get(27)) ? trainItem.get(27) : "--"; //?
            String ywNum = StringUtils.isNotEmpty(trainItem.get(28)) ? trainItem.get(28) : "--"; // 硬卧，二等卧
            String yzNum = StringUtils.isNotEmpty(trainItem.get(29)) ? trainItem.get(29) : "--"; // 硬座
            String edzNum = StringUtils.isNotEmpty(trainItem.get(30)) ? trainItem.get(30) : "--"; // 二等座
            String ydzNum = StringUtils.isNotEmpty(trainItem.get(31)) ? trainItem.get(31) : "--"; // 一等座
            String swzNum = StringUtils.isNotEmpty(trainItem.get(32)) ? trainItem.get(32) : "--"; // 商务座特等座
            String srrbNum = StringUtils.isNotEmpty(trainItem.get(33)) ? trainItem.get(33) : "--"; // 动卧

            String yp_ex = trainItem.get(34); //? 查询车票价格时的seat_types字段
            String seatTypes = trainItem.get(35); //?
            String exchangeTrainFlag = trainItem.get(36); //?

            System.out.println("列车号:" + trainCode);
            System.out.println("出发站:" + fromStationName);
            System.out.println("到达站:" + toStationName);
            System.out.println("出发时间:" + startTime);
            System.out.println("到达时间:" + arriveTime);
            System.out.println("历时:" + runTime);
            System.out.println("列车起始站发车日期:" + startTrainDate);

            System.out.println("商务座特等座:" + swzNum);
            System.out.println("一等座:" + ydzNum);
            System.out.println("二等座:" + edzNum);
            System.out.println("高级软卧:" + grNum);
            System.out.println("软卧:" + rwNum);
            System.out.println("动卧:" + srrbNum);
            System.out.println("硬卧:" + ywNum);
            System.out.println("软座:" + rzNum);
            System.out.println("硬座:" + yzNum);
            System.out.println("无座:" + wzNum);
            System.out.println("其他:" + qtNum);
            System.out.println("备注:" + buttonTextInfo);
            System.out.println("\n");
        }

    }


    @Test
    public void getTrainLine() {
        String getTicketLineUrl = String.format(getTicketLineUrlFmt, trainNo, fromStation, toStation, startTrainDate);
        JSONObject ret = JsonUtil.parseObject(HttpUtil.request(getTicketLineUrl, Connection.Method.GET, null));
        System.out.println(JSON.toJSONString(ret, true));

        JSONObject result = new JSONObject();

        JSONArray stops = ret.getJSONObject("data").getJSONArray("data");

        JSONObject stopInfoFirst = stops.getJSONObject(0);
        String startStationName = stopInfoFirst.getString("start_station_name"); //出发城市
        String endStationName = stopInfoFirst.getString("end_station_name"); //到达城市
        String stationTrainCode = stopInfoFirst.getString("station_train_code"); //车次号
        String trainClassName = stopInfoFirst.getString("train_class_name"); //车次类型， 快速等
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
            String arriveTime = stopInfo.getString("arrive_time"); //到达时间（格式 HH:mm 或者----）
            String stationName = stopInfo.getString("station_name"); //站名
            String stopoverTime = stopInfo.getString("stopover_time"); //停留时间（分钟） 可能为----
            String stationNo = stopInfo.getString("station_no"); //站序（01开始）
            Boolean isEnabled = stopInfo.getBoolean("isEnabled"); //是否是我们搜索的出行站和到达站 false不是 true是

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
        String getTicketPriceUrl = String.format(getTicketPriceUrlFmt, trainNo, startStationNo, endStationNo, seat_types, fromDate);
        JSONObject ret = JsonUtil.parseObject(HttpUtil.request(getTicketPriceUrl, Connection.Method.GET, null));
        System.out.println(JSON.toJSONString(ret, true));

        JSONObject data = ret.getJSONObject("data");

        // A9  商务座/特等座
        // M   一等座
        // O   二等座
        // A6  高级软卧
        // A4  软卧/一等卧
        // F   动卧
        // A3  硬卧/二等卧
        // A2  软座 (广州到汉口)
        // A1  硬座
        // WZ  无座
        Map<String, String> setType = Maps.newHashMap();
        setType.put("swz", "A9");
        setType.put("ydz", "M");
        setType.put("edz", "O");
        setType.put("gr", "A6");
        setType.put("rw", "A4");
        setType.put("dw", "F");
        setType.put("yw", "A3");
        setType.put("rz", "A2");
        setType.put("yz", "A1");
        setType.put("wz", "WZ");

        BigDecimal swzPrice = processPrice(data.getString(setType.get("swz")));
        BigDecimal ydzPrice = processPrice(data.getString(setType.get("ydz")));
        BigDecimal edzPrice = processPrice(data.getString(setType.get("edz")));
        BigDecimal grPrice = processPrice(data.getString(setType.get("gr")));
        BigDecimal rwPrice = processPrice(data.getString(setType.get("rw")));
        BigDecimal dwPrice = processPrice(data.getString(setType.get("dw")));
        BigDecimal ywPrice = processPrice(data.getString(setType.get("yw")));
        BigDecimal rzPrice = processPrice(data.getString(setType.get("rz")));
        BigDecimal yzPrice = processPrice(data.getString(setType.get("yz")));
        BigDecimal wzPrice = processPrice(data.getString(setType.get("wz")));

        System.out.println(swzPrice);
        System.out.println(ydzPrice);
        System.out.println(edzPrice);
        System.out.println(grPrice);
        System.out.println(grPrice);
        System.out.println(rwPrice);
        System.out.println(dwPrice);
        System.out.println(ywPrice);
        System.out.println(rzPrice);
        System.out.println(yzPrice);
        System.out.println(wzPrice);

    }

    private BigDecimal processPrice(String price) {
        BigDecimal ret = null;
        if (StringUtils.isNotEmpty(price) && price.startsWith("¥")) {
            ret = new BigDecimal(price.substring(1, price.length()));
        }
        return ret;
    }

}
