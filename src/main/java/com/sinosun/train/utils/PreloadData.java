package com.sinosun.train.utils;

import com.sinosun.train.constants.FileNameConstant;
import com.sinosun.train.enums.PlatformErrorCode;
import com.sinosun.train.exception.ServiceException;
import com.sinosun.train.model.response.Station;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;

/**
 * Created on 2019/1/14 10:26.
 *
 * @author caogu
 */
public class PreloadData {
    private static Logger logger = LoggerFactory.getLogger(PreloadData.class);

    /**
     * 火车全量站点数据
     */
    private static List<Station> TRAIN_ALL_STATION = getTrainCityData(FileNameConstant.TRAIN_ALL_STATION_LOCAL_FILE_NAME);
    /**
     * 火车热点站点数据
     */
    private static List<Station> TRAIN_HOT_STATION = getTrainCityData(FileNameConstant.TRAIN_HOT_STATION_LOCAL_FILE_NAME);

    @NotNull
    public static List<Station> getTrainAllCity() {
        return TRAIN_ALL_STATION;
    }

    @NotNull
    public static List<Station> getTrainHotCity() {
        return TRAIN_HOT_STATION;
    }

    @NotNull
    private static List<Station> getTrainCityData(String fileName) {
        String path = getFilePath("train" + File.separator + fileName);
        return JsonUtil.readFileToJsonArray(path).toJavaList(Station.class);
    }

    @NotNull
    private static String getFilePath(String relativeFileName) {
        String path;
        try {
            path = ResourceUtils.getFile("classpath:" + relativeFileName).getAbsolutePath();
        } catch (FileNotFoundException e) {
            logger.error("classpath:{}文件找不到", relativeFileName);
            throw new ServiceException(PlatformErrorCode.SERVICE_INTERNAL_ERROR, e);
        }
        return path;
    }
}
