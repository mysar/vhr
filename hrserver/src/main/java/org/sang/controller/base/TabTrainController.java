package org.sang.controller.base;

import org.sang.bean.Entity.TabTrain;
import org.sang.bean.RespBean;
import org.sang.service.TabTrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Tip: 培训记录表
 * Created by Im.Yan on 2019/3/9.
 */

@RestController
@RequestMapping("/train")
public class TabTrainController {

    @Autowired
    TabTrainService service;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public RespBean add(TabTrain entity) {
        if (service.addEmp(entity) == 1) {
            return RespBean.ok("添加成功!");
        }
        return RespBean.error("添加失败!");
    }

    @RequestMapping(value = "/getPage", method = RequestMethod.GET)
    public Map<String, Object> getAll(Integer page, Integer rows, String keywords) {
        return service.getAllByPage(page, rows, keywords);
    }


    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public RespBean updateSalary(TabTrain entity) {
        if (service.update(entity) == 1) {
            return RespBean.ok("更新成功!");
        }
        return RespBean.error("更新失败!");
    }

    @RequestMapping(value = "/delete/{ids}", method = RequestMethod.DELETE)
    public RespBean deleteSalary(@PathVariable String ids) {
        if (service.deleteById(ids)) {
            return RespBean.ok("删除成功!");
        }
        return RespBean.error("删除失败!");
    }


}
