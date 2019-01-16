package com.sinosun.starter.utils;

import com.sinosun.starter.constants.FileNameConstant;
import com.sinosun.starter.enums.PlatformErrorCode;
import com.sinosun.starter.exception.ServiceException;
import com.sinosun.starter.model.response.Station;
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
    private static List<Station> TRAIN_ALL_STATION = getTrainAllCity();

    @NotNull
    public static List<Station> getTrainAllCity() {
        if (TRAIN_ALL_STATION == null) {
            String path = getFilePath("train" + File.separator + FileNameConstant.TRAIN_ALL_STATION_LOCAL_FILE_NAME);
            TRAIN_ALL_STATION = JsonUtil.readFileToJsonArray(path).toJavaList(Station.class);
        }
        return TRAIN_ALL_STATION;
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
