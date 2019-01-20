package com.sinosun.train.datamap;

import com.google.common.collect.Maps;
import com.sinosun.train.utils.PreloadData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * Created on 2019/1/20 17:12.
 *
 * @author caogu
 */
public class SeatTypeMap {

    private static Logger logger = LoggerFactory.getLogger(PreloadData.class);

    /**
     * 查询票价时的座位类型和票价代码的映射
     */
    private static Map<String, String> SEAT_TYPE_MAP = getSeatTypeMap();


    /**
     * 获取我们可读的座位类型与票价对应的座位类型的映射
     *  A9  商务座/特等座
     *  M   一等座
     *  O   二等座
     *  A6  高级软卧
     *  A4  软卧/一等卧
     *  F   动卧
     *  A3  硬卧/二等卧
     *  A2  软座 (广州到汉口)
     *  A1  硬座
     *  WZ  无座
     * @return 可读的座位类型-票价对应的座位类型
     */
    public static Map<String, String> getSeatTypeMap() {
        if (SEAT_TYPE_MAP == null) {
            Map<String, String> seatTypeMap = Maps.newHashMap();
            seatTypeMap.put("swz", "A9");
            seatTypeMap.put("ydz", "M");
            seatTypeMap.put("edz", "O");
            seatTypeMap.put("gr", "A6");
            seatTypeMap.put("rw", "A4");
            seatTypeMap.put("dw", "F");
            seatTypeMap.put("yw", "A3");
            seatTypeMap.put("rz", "A2");
            seatTypeMap.put("yz", "A1");
            seatTypeMap.put("wz", "WZ");
            SEAT_TYPE_MAP = seatTypeMap;
        }
        return SEAT_TYPE_MAP;
    }
}
