package org.sang.controller.base;

import org.sang.bean.Entity.RewardEntity;
import org.sang.bean.RespBean;
import org.sang.common.PageUtil;
import org.sang.service.EmpService;
import org.sang.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Tip: 奖惩记录
 *
 * @author Im.Yan
 * @date 2019/2/1
 */

@RestController
@RequestMapping("/reward")
public class RewardController {
    @Autowired
    RewardService service;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public RespBean add(RewardEntity entity) {
        if (service.addEmp(entity) == 1) {
            return RespBean.ok("添加成功!");
        }
        return RespBean.error("添加失败!");
    }

    @RequestMapping(value = "/getPage", method = RequestMethod.GET)
    public Map<String, Object> getAll(Integer page, Integer rows, String keywords) {
        Map<String, Object> map = new HashMap<>();
        List<RewardEntity> list  = service.getAllByPage(page, rows, keywords);
        List<RewardEntity> results = PageUtil.getPage(list,page,rows);

        map.put("respList", results);
        map.put("count", list.size());
        return map;
    }


    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public RespBean updateSalary(RewardEntity entity) {
        System.out.println(entity.toString());
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
