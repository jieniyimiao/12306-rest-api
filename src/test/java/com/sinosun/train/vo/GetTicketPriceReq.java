package com.sinosun.train.vo;

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
 * Created on 2019/7/31 9:23.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class GetTicketPriceReq {
    //到达站："咸阳"
    private String arriveStation;

    //出发站："西安"
    private String departStation;

    //出发日期（格式：yyyy-MM-dd）：2019-07-31
    @JSONField(format = "yyyy-MM-dd")
    private Date departDate;

    //是否是学生票
    private Boolean student = Boolean.FALSE;

    //预定渠道
    private String channelName = "ctrip.h5";

    //返回数据格式
    @JSONField(name = "contentType")
    private String contentType = "json";

    //请求头部
    @JSONField(name = "head")
    private Head head = new Head();

    public void validate() {
        if (StringUtils.isBlank(arriveStation)
                || StringUtils.isBlank(departStation)
                || departDate == null) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_MISS);
        }

        if (new DateTime(departDate).plusDays(1).minusSeconds(1).isBeforeNow()) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_ERROR, "出发时间必须大于当前时间");
        }
    }

    public String getArriveStation() {
        return arriveStation;
    }

    public void setArriveStation(String arriveStation) {
        this.arriveStation = arriveStation;
    }

    public String getDepartStation() {
        return departStation;
    }

    public void setDepartStation(String departStation) {
        this.departStation = departStation;
    }

    public Date getDepartDate() {
        return departDate;
    }

    public void setDepartDate(Date departDate) {
        this.departDate = departDate;
    }

    public Boolean getStudent() {
        return student;
    }

    public void setStudent(Boolean student) {
        this.student = student;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public Head getHead() {
        return head;
    }

    public void setHead(Head head) {
        this.head = head;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("arriveStation", arriveStation)
                .add("departStation", departStation)
                .add("departDate", departDate)
                .add("student", student)
                .add("channelName", channelName)
                .add("contentType", contentType)
                .add("head", head)
                .toString();
    }
}
