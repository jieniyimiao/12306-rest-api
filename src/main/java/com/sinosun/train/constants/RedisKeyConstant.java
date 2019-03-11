package com.sinosun.train.constants;

/**
 * Created on 2019-03-11
 *
 * @author 猎隼丶止戈
 */
public class RedisKeyConstant {

    /**
     * @{value} 火车站 key
     */
    public static final String REDIS_KEY_LOCAL_DATA_STATION = "LOCAL_DATA:STATION";

    /**
     * @{value} 热门火车站 key
     */
    public static final String REDIS_KEY_LOCAL_DATA_HOT_STATION = "LOCAL_DATA:HOT_STATION";

    /**
     * @{value} 车次 - 列车号关联 key
     */
    public static final String REDIS_KEY_LOCAL_DATA_TRAIN_NO_LINK = "LOCAL_DATA:TRAIN_NO_LINK";
}
