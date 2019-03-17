package org.sang.service;

import org.sang.bean.Entity.TabTrain;
import org.sang.common.Constant;
import org.sang.common.PageUtil;
import org.sang.mapper.TabTrainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Tip:
 * Created by Im.Yan on 2019/3/9.
 */
@Service
public class TabTrainService {


    @Autowired
    TabTrainMapper mapper;

    public int addEmp(TabTrain entity) {
        return mapper.add(entity);
    }

    public Map<String, Object> getAllByPage(Integer page, Integer rows, String keywords) {
        Map<String, Object> map = new HashMap<>();
        List<TabTrain> list = mapper.getAll();

        if (list.isEmpty()){
            TabTrain entity = new TabTrain();
            entity.setId((long) -1);
            list.add(entity);
            map.put("respList", list);
            map.put("count", 1);
        } else {
            List<TabTrain> results = PageUtil.getPage(list, page, rows);
            map.put("respList", results);
            map.put("count", list.size());
        }
        return map;
    }

    public int update(TabTrain entity) {
        return mapper.update(entity);
    }

    public boolean deleteById(String ids) {
        String[] split = ids.split(",");
        return mapper.delete(split) == split.length;
    }


}
