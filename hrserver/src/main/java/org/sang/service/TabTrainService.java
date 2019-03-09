package org.sang.service;

import org.sang.bean.Entity.TabTrain;
import org.sang.common.PageUtil;
import org.sang.mapper.TabTrainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<TabTrain> getAllByPage(Integer page, Integer rows, String keywords) {
        List<TabTrain> list = mapper.getAll(keywords);
        List<TabTrain> list1 = PageUtil.getPage(list,page,rows);
        return list1;
    }

    public int update(TabTrain entity) {
        return mapper.update(entity);
    }

    public boolean deleteById(String ids) {
        String[] split = ids.split(",");
        return mapper.delete(split) == split.length;
    }


}
