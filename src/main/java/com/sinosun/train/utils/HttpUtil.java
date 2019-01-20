package com.sinosun.train.utils;

import com.alibaba.fastjson.JSONObject;
import com.sinosun.train.enums.PlatformErrorCode;
import com.sinosun.train.exception.ServiceException;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

/**
 * Created on 2019/1/15 19:46.
 *
 * @author caogu
 */
public class HttpUtil {
    private static final Logger logger = LoggerFactory.getLogger(HttpUtil.class);
    private static final int TIMEOUT = (int) TimeUnit.SECONDS.toMillis(15);

    /**
     * 执行HTTP请求  <p>get请求时data传null</p>
     *
     * @param url    url完整地址
     * @param method Connection.Method.GET  Connection.Method.POST
     * @param data   请求参数的JSON对象
     * @return HTTP接口返回值
     */
    public static String request(String url, Connection.Method method, JSONObject data) {
        logger.info("======request url={} data={}", url, data);
        String result;
        try {
            Connection conn = Jsoup.connect(url)
                    .timeout(TIMEOUT)
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .header("Connection", "close")
                    .followRedirects(true)
                    .ignoreContentType(true);

            if (data != null) {
                conn.requestBody(data.toJSONString());
            }
            Connection.Response response = conn.method(method).execute();

            int code = response.statusCode();
            if (code == HttpStatus.OK.value() || code == HttpStatus.FOUND.value()) {
                result = response.body();
            } else {
                logger.error("执行url={}返回非200/302值, statusCode={}", url, response.statusCode());
                throw new ServiceException(PlatformErrorCode.SERVICE_INTERNAL_ERROR);
            }
            logger.info("======request code={} result={}", code, result);
        } catch (IOException e) {
            logger.error("执行" + url + "出错, data=" + data, e);
            throw new ServiceException(PlatformErrorCode.SERVICE_INTERNAL_ERROR, e);
        }
        return result;
    }

}
