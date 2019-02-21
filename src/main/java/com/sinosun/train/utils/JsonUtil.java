package com.sinosun.train.utils;

import cn.hutool.core.io.IoUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.parser.Feature;
import com.alibaba.fastjson.serializer.NameFilter;
import com.alibaba.fastjson.serializer.PascalNameFilter;
import com.sinosun.train.enums.PlatformErrorCode;
import com.sinosun.train.exception.ServiceException;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

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
     * @param inputStream json文件流
     * @return json数组
     */
    public static JSONArray readFileToJsonArray(InputStream inputStream) {
        JSONArray jo;
        try {
            String input = IoUtil.read(inputStream, StandardCharsets.UTF_8);
            jo = JSONObject.parseArray(input);
        } catch (Exception e) {
            logger.error("读取json文件出错", e);
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

    /**
     * json字符串转JSON对象
     *
     * @param text json字符串
     * @return json对象
     */
    public static JSONObject parseObject(String text) {
        return JSONObject.parseObject(text);
    }

    /**
     * json字符串转JSON数组
     *
     * @param text json字符串
     * @return json数组
     */
    public static JSONArray parseArray(String text) {
        return JSONObject.parseArray(text);
    }

    /**
     * 对象转json字符串
     *
     * @param t   java对象
     * @param <T> 对象对应的类型
     * @return json字符串
     */
    public static <T> String entity2Json(T t) {
        try {
            return JSON.toJSONString(t/*, SerializerFeature.DisableCircularReferenceDetect*/);
        } catch (Exception e) {
            logger.error("JsonUtil.entity2Json", e);
            throw e;
        }
    }

    /**
     * json对象的key的首字母转为大写
     * <p>采用先序列化在反序列化，在序列化时改变key的思路</p>
     * @param object json对象
     * @return key首字母转为大写的json对象
     */
    public static JSONObject keyFirstCharToUpCase(Object object) {
        return JSONObject.parseObject(JSON.toJSONString(object, new PascalNameFilter()));
    }

    /**
     * json对象的key的首字母转为小写
     *
     * @param object json对象
     * @return key首字母转为小写的json对象
     */
    public static JSONObject keyFirstCharToLowerCase(Object object) {
        return JSONObject.parseObject(JSON.toJSONString(object, new PascalNameLowerFilter()));
    }

    static class PascalNameLowerFilter implements NameFilter {
        @Override
        public String process(Object source, String name, Object value) {
            if (name == null || name.length() == 0) {
                return name;
            }

            char[] chars = name.toCharArray();
            chars[0] = Character.toLowerCase(chars[0]);

            return new String(chars);
        }
    }

}
