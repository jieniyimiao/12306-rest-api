package com.sinosun.starter.service;

import com.sinosun.starter.model.request.NoneRequest;
import com.sinosun.starter.model.response.StationList;
import com.sinosun.starter.model.response.StationResult;
import com.sinosun.starter.utils.PreloadData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Created on 2019/1/10 21:00.
 *
 * @author caogu
 */
@Service
public class TrainService {
    private static final Logger logger = LoggerFactory.getLogger(TrainService.class);

    public StationResult getAllCity(NoneRequest requestBody) {
        return new StationResult(new StationList(PreloadData.getTrainAllCity()));
    }

}
