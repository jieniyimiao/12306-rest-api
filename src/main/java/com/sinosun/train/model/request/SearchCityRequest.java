package com.sinosun.train.model.request;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;
import com.sinosun.train.enums.BusinessErrorCode;
import com.sinosun.train.exception.ServiceException;
import org.apache.commons.lang3.StringUtils;

/**
 * Created on 2019/1/10 20:57.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class SearchCityRequest {
    private String keyword;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public void validate() {
        if (StringUtils.isEmpty(keyword)) {
            throw new ServiceException(BusinessErrorCode.REQUEST_PARAM_MISS);
        }
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("keyword", keyword)
                .toString();
    }
}
