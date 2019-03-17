package org.sang.controller.salary;

import org.sang.bean.Department;
import org.sang.bean.Entity.PersonSalary;
import org.sang.bean.Entity.TabTrain;
import org.sang.common.PageUtil;
import org.sang.service.DepartmentService;
import org.sang.service.EmpService;
import org.sang.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Tip: 工资表
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
@RestController
@RequestMapping("/salary/table")
public class SalaryTableController {
    @Autowired
    DepartmentService departmentService;

    @Autowired
    SalaryService salaryService;

    @Autowired
    EmpService empService;

    @RequestMapping("/deps")
    public List<Department> departments() {
        return departmentService.getAllDeps();
    }

    @RequestMapping("/getPerson")
    public Map<String, Object> getPersonSalary(String yhId, String keywords, String month,Integer page, Integer rows) {

        List<PersonSalary> list = salaryService.getPersionSalary(yhId,keywords);
        Map<String, Object> map = new HashMap<>();

        if (list.isEmpty()){
            PersonSalary entity = new PersonSalary();
            entity.setJj("-");
            list.add(entity);
            map.put("respList", list);
            map.put("count", 1);
        } else {
            List<PersonSalary> results = PageUtil.getPage(list, page, rows);
            map.put("respList", results);
            map.put("count", list.size());
        }
        return map;

    }


}
