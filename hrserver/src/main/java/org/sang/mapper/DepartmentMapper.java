package org.sang.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.sang.bean.Department;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Tip:
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
@Mapper
@Repository
//@Component("departmentMapper")
public interface DepartmentMapper {
    void addDep(@Param("dep") Department department);

    void deleteDep(@Param("dep") Department department);

    List<Department> getDepByPid(Long pid);

    List<Department> getAllDeps();
}
