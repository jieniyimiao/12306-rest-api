package com.sinosun.train.model.vo;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;

import java.math.BigDecimal;

/**
 * Created on 2019/1/10 20:38.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.PascalCase)
public class TicketPrice {
    /**
     * 商务座/特等座价格
     */
    private BigDecimal swzPrice;

    /**
     * 一等座价格
     */
    private BigDecimal ydzPrice;

    /**
     * 二等座价格
     */
    private BigDecimal edzPrice;

    /**
     * 高级软卧价格
     */
    private BigDecimal gjrwPrice;

    /**
     * 软卧/一等卧剩余票数
     */
    private BigDecimal rwPrice;

    /**
     *  动卧价格
     */
    private BigDecimal dwPrice;

    /**
     * 硬卧价格
     */
    private BigDecimal ywPrice;

    /**
     * 软座价格
     */
    private BigDecimal rzPrice;

    /**
     * 硬座价格
     */
    private BigDecimal yzPrice;

    /**
     * 无座价格
     */
    private BigDecimal wzPrice;

    /**
     * 其他价格
     */
    private BigDecimal qtPrice;

    public BigDecimal getSwzPrice() {
        return swzPrice;
    }

    public void setSwzPrice(BigDecimal swzPrice) {
        this.swzPrice = swzPrice;
    }

    public BigDecimal getYdzPrice() {
        return ydzPrice;
    }

    public void setYdzPrice(BigDecimal ydzPrice) {
        this.ydzPrice = ydzPrice;
    }

    public BigDecimal getEdzPrice() {
        return edzPrice;
    }

    public void setEdzPrice(BigDecimal edzPrice) {
        this.edzPrice = edzPrice;
    }

    public BigDecimal getGjrwPrice() {
        return gjrwPrice;
    }

    public void setGjrwPrice(BigDecimal gjrwPrice) {
        this.gjrwPrice = gjrwPrice;
    }

    public BigDecimal getRwPrice() {
        return rwPrice;
    }

    public void setRwPrice(BigDecimal rwPrice) {
        this.rwPrice = rwPrice;
    }

    public BigDecimal getDwPrice() {
        return dwPrice;
    }

    public void setDwPrice(BigDecimal dwPrice) {
        this.dwPrice = dwPrice;
    }

    public BigDecimal getYwPrice() {
        return ywPrice;
    }

    public void setYwPrice(BigDecimal ywPrice) {
        this.ywPrice = ywPrice;
    }

    public BigDecimal getRzPrice() {
        return rzPrice;
    }

    public void setRzPrice(BigDecimal rzPrice) {
        this.rzPrice = rzPrice;
    }

    public BigDecimal getYzPrice() {
        return yzPrice;
    }

    public void setYzPrice(BigDecimal yzPrice) {
        this.yzPrice = yzPrice;
    }

    public BigDecimal getWzPrice() {
        return wzPrice;
    }

    public void setWzPrice(BigDecimal wzPrice) {
        this.wzPrice = wzPrice;
    }

    public BigDecimal getQtPrice() {
        return qtPrice;
    }

    public void setQtPrice(BigDecimal qtPrice) {
        this.qtPrice = qtPrice;
    }

    @Override
    public String toString() {
        return "TicketPrice{" +
                ", swzPrice=" + swzPrice +
                ", ydzPrice=" + ydzPrice +
                ", edzPrice=" + edzPrice +
                ", gjrwPrice=" + gjrwPrice +
                ", rwPrice=" + rwPrice +
                ", dwPrice=" + dwPrice +
                ", ywPrice=" + ywPrice +
                ", rzPrice=" + rzPrice +
                ", yzPrice=" + yzPrice +
                ", wzPrice=" + wzPrice +
                ", qtPrice=" + qtPrice +
                '}';
    }
}
