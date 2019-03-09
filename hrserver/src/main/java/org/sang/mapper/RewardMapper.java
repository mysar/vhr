package org.sang.mapper;

import org.apache.ibatis.annotations.Param;
import org.sang.bean.Entity.RewardEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Tip: 奖惩记录
 * Created by Im.Yan on 2019/2/17.
 */
@Repository
public interface RewardMapper {

    int add(@Param("entity") RewardEntity entity);

    RewardEntity getByName(@Param("name") String name);

    List<RewardEntity> getAll();

    int deleteByIds(@Param("ids") String[] ids);

    int updateById(@Param("entity") RewardEntity entity);



    List<RewardEntity> getAllByPage(@Param("page") Integer page, @Param("rows") Integer rows, @Param("keywords") String keywords);
}
