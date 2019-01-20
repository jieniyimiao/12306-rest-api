package com.sinosun.train.datamap;

import com.google.common.collect.Maps;
import com.sinosun.train.utils.PreloadData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * Created on 2019/1/20 17:47.
 *
 * @author caogu
 */
public class TrainCodeTrainNoMap {
    private static Logger logger = LoggerFactory.getLogger(PreloadData.class);

    /**
     * 车次号-列车号 映射 对外车次号，内部实用列车号
     */
    private static Map<String, String> TRAIN_CODE_TRAIN_NO_MAP = Maps.newHashMap();

    /**
     * 通过车次号获取列车号
     * @param trainCode 车次号
     * @return 列车号
     */
    public static String getTrainNo(String trainCode) {
        return TRAIN_CODE_TRAIN_NO_MAP.get(trainCode);
    }

    /**
     * 设置车次号-列车号 映射
     * @param trainCode 车次号
     * @param trainNo 列车号
     */
    public static void put(String trainCode, String trainNo) {
        TRAIN_CODE_TRAIN_NO_MAP.put(trainCode, trainNo);
    }
}
