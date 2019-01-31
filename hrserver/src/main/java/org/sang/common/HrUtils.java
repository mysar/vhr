package org.sang.common;

import org.sang.bean.Hr;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Tip: Spring Security获取当前用户
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
public class HrUtils {
    public static Hr getCurrentHr() {
        return (Hr) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
