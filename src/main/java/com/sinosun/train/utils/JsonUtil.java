package com.sinosun.train.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.parser.Feature;
import com.sinosun.train.enums.PlatformErrorCode;
import com.sinosun.train.exception.ServiceException;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;

/**
 * Created on 2019/1/14 21:53.
 *
 * @author caogu
 */
public class JsonUtil {
    private static final Logger logger = LoggerFactory.getLogger(JsonUtil.class);

    /**
     * 读取json文件并且返回json对象
     *
     * @param filePath json文件路径
     * @return json对象
     */
    public static JSONObject readJsonFile(String filePath) {
        JSONObject jo;
        try {
            String input = FileUtils.readFileToString(new File(filePath), "UTF-8");
            jo = JSONObject.parseObject(input, Feature.OrderedField);
        } catch (IOException e) {
            logger.error("读取json文件出错,filePath=" + filePath, e);
            throw new ServiceException(PlatformErrorCode.SERVICE_INTERNAL_ERROR, e);
        }
        return jo;
    }

    /**
     * 读取json文件并且返回class对象
     *
     * @param filePath json文件路径
     * @param clz      VO的class对象
     * @param <T>      json对应的VO
     * @return json对应的VO
     */
    public static <T> T readJsonFile(String filePath, Class<T> clz) {
        T jo;
        try {
            String input = FileUtils.readFileToString(new File(filePath), "UTF-8");
            jo = JSONObject.parseObject(input, clz);
        } catch (IOException e) {
            logger.error("读取json文件出错,filePath=" + filePath, e);
            throw new ServiceException(PlatformErrorCode.SERVICE_INTERNAL_ERROR, e);
        }
        return jo;
    }


    /**
     * 读取json文件并且返回json数组
     *
     * @param filePath json文件路径
     * @return json数组
     */
    public static JSONArray readFileToJsonArray(String filePath) {
        JSONArray jo;
        try {
            String input = FileUtils.readFileToString(new File(filePath), "UTF-8");
            jo = JSONObject.parseArray(input);
        } catch (IOException e) {
            logger.error("读取json文件出错,filePath=" + filePath, e);
            throw new ServiceException(PlatformErrorCode.SERVICE_INTERNAL_ERROR, e);
        }
        return jo;
    }


}
