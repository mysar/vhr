package org.sang.service;

import org.sang.bean.Entity.RewardEntity;
import org.sang.common.PageUtil;
import org.sang.mapper.RewardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Tip: 员工奖惩记录
 * Created by Im.Yan on 2019/2/17.
 */
@Service
@Transactional
public class RewardService {

    @Autowired
    RewardMapper rewardMapper;

    public int addEmp(RewardEntity entity) {
        return rewardMapper.add(entity);
    }

    public List<RewardEntity> getAllByPage(Integer page, Integer rows, String keywords) {
        List<RewardEntity> list = rewardMapper.getAllByPage(page, rows, keywords);

        return list;
    }

    public int update(RewardEntity entity) {
        return rewardMapper.updateById(entity);
    }

    public boolean deleteById(String ids) {
        String[] split = ids.split(",");
        return rewardMapper.deleteByIds(split) == split.length;
    }

}
