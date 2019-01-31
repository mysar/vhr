package org.sang.mapper;

import org.apache.ibatis.annotations.Param;
import org.sang.bean.Role;

import java.util.List;

/**
 * Tip:
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
public interface RoleMapper {
    List<Role> roles();

    int addNewRole(@Param("role") String role, @Param("roleZh") String roleZh);

    int deleteRoleById(Long rid);
}
