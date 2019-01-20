package com.sinosun.train.enums.train;

/**
 * Created on 2019/1/20 12:21.
 * 乘客类型
 *
 * @author caogu
 */
public enum PassengerType {
    /**
     * 成人:ADULT
     */
    ADULT("ADULT"),

    /**
     * 学生:0X00
     */
    STUDENT("0X00");

    private final String value;

    PassengerType(String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }

    public static PassengerType fromValue(String v) {
        for (PassengerType c : PassengerType.values())
            if (c.value.equals(v)) {
                return c;
            }
        throw new IllegalArgumentException(v);
    }

}
