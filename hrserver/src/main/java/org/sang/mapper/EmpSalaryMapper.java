package org.sang.mapper;

import org.apache.ibatis.annotations.Param;
import org.sang.bean.Employee;
import org.sang.bean.Nation;
import org.sang.bean.PoliticsStatus;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

/**
 * Tip: WebSocket 消息处理类
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
@Repository
public interface EmpSalaryMapper {

    Integer getSalaryIdByYhId(@Param("yhId") Long yhId);

}
