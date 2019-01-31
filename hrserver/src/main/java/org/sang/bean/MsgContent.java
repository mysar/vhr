package org.sang.bean;

import java.util.Date;

/**
 * Tip:
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
public class MsgContent {
    private Long id;
    private String message;
    private String title;
    private Date createDate;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
