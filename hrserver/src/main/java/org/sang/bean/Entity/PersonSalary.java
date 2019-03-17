package org.sang.bean.Entity;


/**
 * Tip: 工资实体
 * Created by Im.Yan on 2019/3/17.
 */

public class PersonSalary {

    private String id;   // id
    private String name; // 姓名
    private String jbgz; // 基本工资
    private String jj;   // 奖金
    private String wcbz; // 午餐补助
    private String jtbz; // 交通补助

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJbgz() {
        return jbgz;
    }

    public void setJbgz(String jbgz) {
        this.jbgz = jbgz;
    }

    public String getJj() {
        return jj;
    }

    public void setJj(String jj) {
        this.jj = jj;
    }

    public String getWcbz() {
        return wcbz;
    }

    public void setWcbz(String wcbz) {
        this.wcbz = wcbz;
    }

    public String getJtbz() {
        return jtbz;
    }

    public void setJtbz(String jtbz) {
        this.jtbz = jtbz;
    }

    @Override
    public String toString() {
        return "PersonSalary{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", jbgz='" + jbgz + '\'' +
                ", jj='" + jj + '\'' +
                ", wcbz='" + wcbz + '\'' +
                ", jtbz='" + jtbz + '\'' +
                '}';
    }
}
