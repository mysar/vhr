package org.sang.mapper;

import org.apache.ibatis.annotations.Param;
import org.sang.bean.Entity.RewardEntity;
import org.sang.bean.Position;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Tip:
 * Created by Im.Yan on 2019/2/17.
 */
@Repository
public interface RewardMapper {

    int add(@Param("entity") RewardEntity entity);

    RewardEntity getByName(@Param("name") String name);

    List<RewardEntity> getAll();

    int deleteById(@Param("ids") String[] ids);

    int updateById(@Param("entity") RewardEntity entity);




}
