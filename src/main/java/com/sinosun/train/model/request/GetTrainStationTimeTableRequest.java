package com.sinosun.train.model.request;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;
import com.sinosun.train.enums.BusinessErrorCode;
import com.sinosun.train.exception.ServiceException;
import org.apache.commons.lang3.StringUtils;
import org.joda.time.DateTime;

import java.util.Date;

/**
 * Created on 2019-03-07 11:08:00
 *
 * @author 猎隼丶止戈
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class GetTrainStationTimeTableRequest {

    /**
     * 列车站站点名称
     */
    private String trainStationName;

    /**
     * 列车站站点代码
     */
    private String trainStationCode;

    /**
     * 出发日期（格式：yyyy-mm-dd）
     */
    @JSONField(format = "yyyy-MM-dd")
    private Date trainStartDate;

    public void validate() {
        if (StringUtils.isBlank(trainStationName)
                || StringUtils.isBlank(trainStationCode)
                || trainStartDate == null) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_MISS);
        }

        if (new DateTime(trainStartDate).plusDays(1).minusSeconds(1).isBeforeNow()) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_ERROR, "出发时间必须大于当前时间");
        }
    }

    public String getTrainStationName() {
        return trainStationName;
    }

    public void setTrainStationName(String trainStationName) {
        this.trainStationName = trainStationName;
    }

    public String getTrainStationCode() {
        return trainStationCode;
    }

    public void setTrainStationCode(String trainStationCode) {
        this.trainStationCode = trainStationCode;
    }

    public Date getTrainStartDate() {
        return trainStartDate;
    }

    public void setTrainStartDate(Date trainStartDate) {
        this.trainStartDate = trainStartDate;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("trainStationCode", trainStationCode)
                .add("trainStartDate", trainStartDate)
                .toString();
    }
}
