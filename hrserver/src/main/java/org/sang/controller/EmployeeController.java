package org.sang.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Tip:
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    @RequestMapping("/basic")
    public String basic() {
        return "basic";
    }
    @RequestMapping("/")
    public String  hello() {
        return "Hello";
    }
}
