package com.sinosun.train.model.request;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;
import com.sinosun.train.enums.BusinessErrorCode;
import com.sinosun.train.exception.ServiceException;
import org.apache.commons.lang3.StringUtils;
import org.joda.time.DateTime;

import java.util.Date;

/**
 * Created on 2019/1/10 20:57.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class GetTrainLineRequest {

    /**
     * 列车号
     */
    private String trainNo;

    /**
     * 车次代码
     */
    private String trainCode;

    /**
     * 出发站点代码
     */
    private String fromStationCode;

    /**
     * 到达站点代码
     */
    private String toStationCode;

    /**
     * 出发日期（格式：yyyy-mm-dd）
     */
    @JSONField(format = "yyyy-MM-dd")
    private Date fromDate;

    public void validate() {
        if (StringUtils.isBlank(fromStationCode)
                || StringUtils.isBlank(toStationCode)
                || fromDate == null
                || StringUtils.isBlank(trainCode)) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_MISS);
        }

        if (new DateTime(fromDate).plusDays(1).minusSeconds(1).isBeforeNow()) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_ERROR, "出发时间必须大于当前时间");
        }
    }

    public String getTrainNo() {
        return trainNo;
    }

    public void setTrainNo(String trainNo) {
        this.trainNo = trainNo;
    }

    public String getTrainCode() {
        return trainCode;
    }

    public void setTrainCode(String trainCode) {
        this.trainCode = trainCode;
    }

    public String getFromStationCode() {
        return fromStationCode;
    }

    public void setFromStationCode(String fromStationCode) {
        this.fromStationCode = fromStationCode;
    }

    public String getToStationCode() {
        return toStationCode;
    }

    public void setToStationCode(String toStationCode) {
        this.toStationCode = toStationCode;
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    @Override
    public String toString() {
        return "GetTrainLineRequest{" +
                "trainNo='" + trainNo + '\'' +
                "trainCode='" + trainCode + '\'' +
                ", fromStationCode='" + fromStationCode + '\'' +
                ", toStationCode='" + toStationCode + '\'' +
                ", fromDate=" + fromDate +
                '}';
    }
}
