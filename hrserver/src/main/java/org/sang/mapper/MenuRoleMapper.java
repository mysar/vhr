package org.sang.mapper;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * Tip:
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
@Repository
public interface MenuRoleMapper {
    int deleteMenuByRid(@Param("rid") Long rid);

    int addMenu(@Param("rid") Long rid, @Param("mids") Long[] mids);
}
