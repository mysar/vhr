package org.sang.controller.salary;

import org.sang.bean.EmpSalary;
import org.sang.bean.Employee;
import org.sang.bean.RespBean;
import org.sang.bean.Salary;
import org.sang.common.LikeObjCopyUtil;
import org.sang.mapper.EmpSalaryMapper;
import org.sang.service.EmpService;
import org.sang.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Tip:
 *
 * @author Im.Yan
 * @date 2019/2/1
 */
@RestController
@RequestMapping("/salary/sobcfg")
public class SalaryEmpController {
    @Autowired
    SalaryService salaryService;
    @Autowired
    EmpService empService;

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public RespBean updateEmpSalary(Integer sid, Long eid) {
        if (salaryService.updateEmpSalary(sid, eid) == 1) {
            return RespBean.ok("修改成功!");
        }
        return RespBean.error("修改失败!");
    }

    @RequestMapping(value = "/salaries", method = RequestMethod.GET)
    public List<Salary> salaries() {
        return salaryService.getAllSalary();
    }

    @Autowired
    EmpSalaryMapper empSalaryMapper;
    /**
     * 查询个人工资详情
     *
     * @param page
     * @param rows
     * @return
     */
    @RequestMapping(value = "/emp", method = RequestMethod.GET)
    public Map<String, Object> getEmployeeByPage(@RequestParam(defaultValue = "1") Integer page,
                                                 @RequestParam(defaultValue = "10") Integer rows) {
        Map<String, Object> map = new HashMap<>();
        // 获取所有账套信息
        List<Salary> salaryList = salaryService.getAllSalary();
        HashMap<Integer, Salary> hashMap = new HashMap<>();
        for (Salary salary : salaryList) {
            hashMap.put(salary.getId(), salary);
        }
        List<EmpSalary> results = new ArrayList<>();
        List<Employee> employeeByPage = empService.getEmployeeByPageShort(page, rows);
        for (Employee employee : employeeByPage) {
            EmpSalary entity = new EmpSalary();
            Integer sid = empSalaryMapper.getSalaryIdByYhId(employee.getId());
            LikeObjCopyUtil.copyObjFieldsToOther(employee, entity);
            entity.setSalary(hashMap.get(sid));
            results.add(entity);
        }
        System.out.println(results.toString());
        Long count = empService.getCountByKeywords("", null, null, null, null, null, null, null);
        map.put("emps", results);
        map.put("count", count);
        return map;
    }
}
