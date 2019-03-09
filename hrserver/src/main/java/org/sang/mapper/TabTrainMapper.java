package org.sang.mapper;

import org.apache.ibatis.annotations.Param;
import org.sang.bean.Entity.TabTrain;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Tip: 培训记录表
 * Created by Im.Yan on 2019/3/9.
 */
@Repository
public interface TabTrainMapper {

    int add(@Param("entity") TabTrain entity);
    int update(@Param("entity") TabTrain entity);

    List<TabTrain> getAll(String keyword);


    int delete(@Param("ids") String[] ids);
}
