package org.sang.service;

import org.sang.mapper.SystemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 系统设置
 */
@Service
@Transactional
public class SystemService {

    @Autowired
    SystemMapper systemMapper;


}
