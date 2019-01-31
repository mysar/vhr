package org.sang.mapper;

import org.apache.ibatis.annotations.Param;
import org.sang.bean.JobLevel;

import java.util.List;

/**
 * Tip:
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
public interface JobLevelMapper {
    JobLevel getJobLevelByName(String name);

    int addJobLevel(@Param("jobLevel") JobLevel jobLevel);

    List<JobLevel> getAllJobLevels();

    int deleteJobLevelById(@Param("ids") String[] ids);

    int updateJobLevel(@Param("jobLevel") JobLevel jobLevel);
}
