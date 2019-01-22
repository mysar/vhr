package org.sang;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@MapperScan("org.sang.mapper")
@EnableCaching
public class HrServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(HrServerApplication.class, args);
    }
}
