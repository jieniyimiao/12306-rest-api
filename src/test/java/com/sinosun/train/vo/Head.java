package com.sinosun.train.vo;

import com.alibaba.fastjson.PropertyNamingStrategy;
import com.alibaba.fastjson.annotation.JSONType;
import com.google.common.base.MoreObjects;
import org.assertj.core.util.Lists;

import java.util.ArrayList;

/**
 * Created on 2019/7/31 9:34.
 *
 * @author caogu
 */
@JSONType(naming = PropertyNamingStrategy.CamelCase)
public class Head {
    private String auth = null;
    private String cid = "09031010110784000474";
    private String ctok = "";
    private String cver = "1.0";
    private String lang = "01";
    private String sid = "8888";
    private String syscode = "09";
    private ArrayList<Extension> extension = Lists.newArrayList(new Extension());

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        this.auth = auth;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getCtok() {
        return ctok;
    }

    public void setCtok(String ctok) {
        this.ctok = ctok;
    }

    public String getCver() {
        return cver;
    }

    public void setCver(String cver) {
        this.cver = cver;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getSyscode() {
        return syscode;
    }

    public void setSyscode(String syscode) {
        this.syscode = syscode;
    }

    public ArrayList<Extension> getExtension() {
        return extension;
    }

    public void setExtension(ArrayList<Extension> extension) {
        this.extension = extension;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("auth", auth)
                .add("cid", cid)
                .add("ctok", ctok)
                .add("cver", cver)
                .add("lang", lang)
                .add("sid", sid)
                .add("syscode", syscode)
                .add("extension", extension)
                .toString();
    }
}
