package org.sang.bean.Entity;

/**
 * Tip:员工奖惩记录表
 * Created by Im.Yan on 2019/2/17.
 */

public class RewardEntity {

    private Long id;
    private String empId;   // 员工id
    private String empName; // 员工姓名
    private String time;    // 发生时间
    private String msg;     // 详细信息

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "RewardEntity{" +
                "id='" + id + '\'' +
                ", empId='" + empId + '\'' +
                ", empName='" + empName + '\'' +
                ", time='" + time + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}
