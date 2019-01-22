package org.sang.common.poi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.sang.common.redis.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RedisUtilTests {

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    StringRedisTemplate stringRedisTemplate;

    @Test
    public void contextLoads() {
        String obj = "12345678985550";
        redisUtil.set("1233", obj);

        //stringRedisTemplate.opsForValue().set("123",obj);
    }
}
