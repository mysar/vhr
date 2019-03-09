package org.sang.bean.Entity;


/**
 * Tip: 员工培训记录表
 * Created by Im.Yan on 2019/3/9.
 */

public class TabTrain {

    private Long id;
    private String name;
    private String userId;
    private String info;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
