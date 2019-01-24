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
 * Created on 2019/1/10 20:57.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class GetTicketListRequest {
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

    /**
     * 是否是学生票(默认成人票)
     */
    private Boolean isStudent = Boolean.FALSE;

    public void validate() {
        if (StringUtils.isBlank(fromStationCode)
                || StringUtils.isBlank(toStationCode)
                || fromDate == null
                || isStudent == null) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_MISS);
        }

        if (new DateTime(fromDate).plusDays(1).minusSeconds(1).isBeforeNow()) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_ERROR, "出发时间必须大于当前时间");
        }
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

    public Boolean getIsStudent() {
        return isStudent;
    }

    public void setIsStudent(Boolean student) {
        isStudent = student;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("fromStationCode", fromStationCode)
                .add("toStationCode", toStationCode)
                .add("fromDate", fromDate)
                .add("isStudent", isStudent)
                .toString();
    }
}
