/*
Navicat MySQL Data Transfer

Source Server         : 39.104.169.106
Source Server Version : 50722
Source Host           : 39.104.169.106:3306
Source Database       : hr

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2019-03-17 17:53:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL COMMENT '部门名称',
  `parentId` int(11) DEFAULT NULL,
  `depPath` varchar(255) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  `isParent` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1', '机电工程系', '-1', '.1', '1', '1');
INSERT INTO `department` VALUES ('4', '建筑工程系', '1', '.1.4', '1', '1');
INSERT INTO `department` VALUES ('5', '经济管理系', '4', '.1.4.5', '1', '1');
INSERT INTO `department` VALUES ('6', '艺术传媒系', '5', '.1.4.5.6', '1', '0');
INSERT INTO `department` VALUES ('8', '语言文学系', '5', '.1.4.5.8', '1', '0');
INSERT INTO `department` VALUES ('78', '生物科学系', '5', '.1.4.5.78', '1', '1');
INSERT INTO `department` VALUES ('81', '计算机信息中心', '78', '.1.4.5.78.81', '1', '1');
INSERT INTO `department` VALUES ('82', '图书阅览中心', '78', '.1.4.5.78.82', '1', '0');
INSERT INTO `department` VALUES ('85', '后勤管理中心', '81', '.1.4.5.78.81.85', '1', '0');
INSERT INTO `department` VALUES ('86', '组织人事部', '78', '.1.4.5.78.86', '1', '1');
INSERT INTO `department` VALUES ('87', '党政办公室', '86', '.1.4.5.78.86.87', '1', '1');
INSERT INTO `department` VALUES ('89', '教务管理部', '87', '.1.4.5.78.86.87.89', '1', '0');
INSERT INTO `department` VALUES ('91', '学生工作部', '5', '.1.4.5.91', '1', '0');
INSERT INTO `department` VALUES ('92', '财务管理部', '5', '.1.4.5.92', '1', '0');

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '员工编号',
  `name` varchar(10) DEFAULT NULL COMMENT '员工姓名',
  `gender` char(4) DEFAULT NULL COMMENT '性别',
  `birthday` date DEFAULT NULL COMMENT '出生日期',
  `idCard` char(18) DEFAULT NULL COMMENT '身份证号',
  `wedlock` enum('已婚','未婚','离异') DEFAULT NULL COMMENT '婚姻状况',
  `nationId` int(8) DEFAULT NULL COMMENT '民族',
  `nativePlace` varchar(20) DEFAULT NULL COMMENT '籍贯',
  `politicId` int(8) DEFAULT NULL COMMENT '政治面貌',
  `email` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(11) DEFAULT NULL COMMENT '电话号码',
  `address` varchar(64) DEFAULT NULL COMMENT '联系地址',
  `departmentId` int(11) DEFAULT NULL COMMENT '所属部门',
  `jobLevelId` int(11) DEFAULT NULL COMMENT '职称ID',
  `posId` int(11) DEFAULT NULL COMMENT '职位ID',
  `engageForm` varchar(8) DEFAULT NULL COMMENT '聘用形式',
  `tiptopDegree` enum('博士','硕士','本科','大专','高中','初中','小学','其他') DEFAULT NULL COMMENT '最高学历',
  `specialty` varchar(32) DEFAULT NULL COMMENT '所属专业',
  `school` varchar(32) DEFAULT NULL COMMENT '毕业院校',
  `beginDate` date DEFAULT NULL COMMENT '入职日期',
  `workState` enum('在职','离职') DEFAULT '在职' COMMENT '在职状态',
  `workID` char(8) DEFAULT NULL COMMENT '工号',
  `contractTerm` double DEFAULT NULL COMMENT '合同期限',
  `conversionTime` date DEFAULT NULL COMMENT '转正日期',
  `notWorkDate` date DEFAULT NULL COMMENT '离职日期',
  `beginContract` date DEFAULT NULL COMMENT '合同起始日期',
  `endContract` date DEFAULT NULL COMMENT '合同终止日期',
  `workAge` int(11) DEFAULT NULL COMMENT '工龄',
  PRIMARY KEY (`id`),
  KEY `departmentId` (`departmentId`),
  KEY `jobId` (`jobLevelId`),
  KEY `dutyId` (`posId`),
  KEY `nationId` (`nationId`),
  KEY `politicId` (`politicId`),
  KEY `workID_key` (`workID`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`),
  CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`jobLevelId`) REFERENCES `joblevel` (`id`),
  CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`posId`) REFERENCES `position` (`id`),
  CONSTRAINT `employee_ibfk_4` FOREIGN KEY (`nationId`) REFERENCES `nation` (`id`),
  CONSTRAINT `employee_ibfk_5` FOREIGN KEY (`politicId`) REFERENCES `politicsstatus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1521 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1', '闫朝辉', '男', '1989-12-26', '610122199001011256', '已婚', '1', '陕西', '13', 'laowang@qq.com', '18565558897', '深圳市南山区', '4', '9', '29', '劳务合同', '本科', '信息管理与信息系统', '深圳大学', '2017-12-26', '在职', '00000001', '2', '2018-03-26', null, '2017-12-26', '2019-12-26', null);
INSERT INTO `employee` VALUES ('2', '陈静', '男', '1989-01-31', '421288198902011234', '已婚', '1', '海南', '1', 'chenjing@qq.com', '18795556693', '海南省海口市美兰区', '8', '12', '30', '劳动合同', '高中', '市场营销', '武汉大学', '2015-06-08', '在职', '00000002', '3', '2015-09-09', null, '2015-06-08', '2018-06-07', null);
INSERT INTO `employee` VALUES ('3', '赵琳浩', '男', '1993-03-04', '610122199303041456', '未婚', '1', '陕西', '3', 'zhao@qq.com', '15698887795', '陕西省西安市莲湖区', '91', '12', '33', '劳动合同', '博士', '电子工程', '哈尔滨理工大学', '2018-01-01', '在职', '00000003', '3.5', '2018-04-01', null, '2018-01-01', '2021-07-14', null);
INSERT INTO `employee` VALUES ('4', '鹿存亮', '男', '1990-01-03', '610122199001031456', '已婚', '1', '陕西', '3', 'zhao@qq.com', '15612347795', '陕西省西安市莲湖区', '92', '12', '34', '劳动合同', '高中', '电子工程', '哈尔滨理工大学', '2018-01-01', '在职', '00000004', '3.5', '2018-04-01', null, '2018-01-01', '2021-07-14', null);
INSERT INTO `employee` VALUES ('5', '姚森', '男', '1991-02-05', '610122199102058952', '已婚', '1', '河南', '3', 'yaosen@qq.com', '14785559936', '河南洛阳人民大道58号', '92', '15', '34', '劳动合同', '硕士', '室内装修设计', '西北大学', '2017-01-02', '在职', '00000005', '7', '2017-04-02', null, '2017-01-02', '2024-01-17', null);
INSERT INTO `employee` VALUES ('6', '云星', '女', '1993-01-05', '610122199301054789', '已婚', '1', '陕西西安', '1', 'yunxing@qq.com', '15644442252', '陕西西安新城区', '92', '16', '34', '劳务合同', '硕士', '通信工程', '西安电子科技学校', '2018-01-01', '在职', '00000006', '5.25', '2018-04-01', null, '2018-01-01', '2023-04-13', null);
INSERT INTO `employee` VALUES ('7', '贾旭明', '男', '1993-11-11', '610122199311111234', '已婚', '1', '广东广州', '4', 'jiaxuming@qq.com', '15644441234', '广东省广州市天河区冼村路', '78', '15', '33', '劳务合同', '初中', '通信工程', '西北大学', '2018-01-01', '在职', '00000007', '5.25', '2018-04-01', null, '2018-01-01', '2023-04-13', null);
INSERT INTO `employee` VALUES ('8', '张黎明', '男', '1991-02-01', '610144199102014569', '已婚', '1', '广东', '6', 'zhangliming@qq.com', '18979994478', '广东珠海', '91', '15', '33', '劳动合同', '高中', '考古', '清华大学', '2018-01-01', '在职', '00000008', '7', '2018-04-01', null, '2018-01-01', '2025-01-30', null);
INSERT INTO `employee` VALUES ('9', '薛磊', '男', '1992-07-01', '610144199207017895', '已婚', '1', '陕西西安', '13', 'xuelei@qq.com', '15648887741', '西安市雁塔区', '92', '14', '34', '劳动合同', '初中', '无', '华胥中学', '2018-01-01', '在职', '00000009', '6', '2018-04-01', null, '2018-01-01', '2024-01-17', null);
INSERT INTO `employee` VALUES ('10', '张洁', '女', '1990-10-09', '420177199010093652', '未婚', '1', '海南', '5', 'zhangjie@qq.com', '13695557742', '海口市美兰区', '92', '16', '34', '劳动合同', '高中', '无', '海南侨中', '2018-01-01', '在职', '00000010', '1', '2018-01-31', null, '2018-01-01', '2019-01-01', null);
INSERT INTO `employee` VALUES ('11', '韩一', '男', '1990-01-01', '610122199001011256', '已婚', '1', '陕西', '13', 'laowang@qq.com', '18565558897', '深圳市南山区', '91', '9', '29', '劳动合同', '本科', '信息管理与信息系统', '深圳大学', '2018-01-01', '在职', '00000011', '1', '2018-04-01', null, '2018-01-01', '2019-01-01', null);
INSERT INTO `employee` VALUES ('1520', 'yy', '男', '2019-03-04', '130428199702041315', '已婚', '1', '123', '1', '473498011@qq.com', '010223', '123', '4', '9', '29', '劳动合同', '大专', '123', '456', '2019-03-11', '在职', '00000012', '0', '2019-03-18', null, '2019-03-17', '2019-03-24', null);

-- ----------------------------
-- Table structure for employeeremove
-- ----------------------------
DROP TABLE IF EXISTS `employeeremove`;
CREATE TABLE `employeeremove` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eid` int(11) DEFAULT NULL,
  `afterDepId` int(11) DEFAULT NULL COMMENT '调动后部门',
  `afterJobId` int(11) DEFAULT NULL COMMENT '调动后职位',
  `removeDate` date DEFAULT NULL COMMENT '调动日期',
  `reason` varchar(255) DEFAULT NULL COMMENT '调动原因',
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pid` (`eid`),
  CONSTRAINT `employeeremove_ibfk_1` FOREIGN KEY (`eid`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employeeremove
-- ----------------------------

-- ----------------------------
-- Table structure for employeetrain
-- ----------------------------
DROP TABLE IF EXISTS `employeetrain`;
CREATE TABLE `employeetrain` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eid` int(11) DEFAULT NULL COMMENT '员工编号',
  `trainDate` date DEFAULT NULL COMMENT '培训日期',
  `trainContent` varchar(255) DEFAULT NULL COMMENT '培训内容',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`),
  KEY `pid` (`eid`),
  CONSTRAINT `employeetrain_ibfk_1` FOREIGN KEY (`eid`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employeetrain
-- ----------------------------

-- ----------------------------
-- Table structure for empsalary
-- ----------------------------
DROP TABLE IF EXISTS `empsalary`;
CREATE TABLE `empsalary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eid` int(11) DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eid` (`eid`),
  KEY `empsalary_ibfk_2` (`sid`),
  CONSTRAINT `empsalary_ibfk_1` FOREIGN KEY (`eid`) REFERENCES `employee` (`id`),
  CONSTRAINT `empsalary_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `salary` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of empsalary
-- ----------------------------
INSERT INTO `empsalary` VALUES ('6', '4', '10');
INSERT INTO `empsalary` VALUES ('7', '3', '9');
INSERT INTO `empsalary` VALUES ('10', '5', '9');
INSERT INTO `empsalary` VALUES ('11', '6', '13');
INSERT INTO `empsalary` VALUES ('12', '7', '13');
INSERT INTO `empsalary` VALUES ('14', '8', '10');
INSERT INTO `empsalary` VALUES ('15', '9', '10');
INSERT INTO `empsalary` VALUES ('16', '10', '13');
INSERT INTO `empsalary` VALUES ('26', '1', '15');
INSERT INTO `empsalary` VALUES ('29', '2', '15');

-- ----------------------------
-- Table structure for hr
-- ----------------------------
DROP TABLE IF EXISTS `hr`;
CREATE TABLE `hr` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'hrID',
  `name` varchar(32) DEFAULT NULL COMMENT '姓名',
  `phone` char(11) DEFAULT NULL COMMENT '手机号码',
  `telephone` varchar(16) DEFAULT NULL COMMENT '住宅电话',
  `address` varchar(64) DEFAULT NULL COMMENT '联系地址',
  `enabled` tinyint(1) DEFAULT '1',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `userface` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hr
-- ----------------------------
INSERT INTO `hr` VALUES ('1', 'hui', '15200128811', '010-123456', '北京', '0', 'hui', '$2a$10$oE39aG10kB/rFu2vQeCJTu/V/v4n6DRR0f8WyXRiAYvBpmadoOBE.', 'https://avatars2.githubusercontent.com/u/23180803?s=460&v=4', '默认密码123');
INSERT INTO `hr` VALUES ('3', '系统管理员', '18568887789', '029-82881234', '深圳南山', '1', 'admin', '$2a$10$ySG2lkvjFHY5O0./CPIE1OI8VJsuKYEzOYzqIa7AJR6sEgSzUFOAm', 'https://avatars2.githubusercontent.com/u/23180803?s=460&v=4', null);
INSERT INTO `hr` VALUES ('5', 'A', '18568123489', '029-82123434', '海口美兰', '1', 'A', '$2a$10$oE39aG10kB/rFu2vQeCJTu/V/v4n6DRR0f8WyXRiAYvBpmadoOBE.', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514093920321&di=913e88c23f382933ef430024afd9128a&imgtype=0&src=http%3A%2F%2Fp.3761.com%2Fpic%2F9771429316733.jpg', null);
INSERT INTO `hr` VALUES ('10', 'B', '18568123666', '029-82111555', '广州番禺', '1', 'zhaohui', '$2a$10$oE39aG10kB/rFu2vQeCJTu/V/v4n6DRR0f8WyXRiAYvBpmadoOBE.', 'https://avatars2.githubusercontent.com/u/23180803?s=460&v=4', null);
INSERT INTO `hr` VALUES ('11', 'C', '18568123377', '029-82111333', '广州天河', '1', 'B', '$2a$10$oE39aG10kB/rFu2vQeCJTu/V/v4n6DRR0f8WyXRiAYvBpmadoOBE.', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515233756&di=0856d923a0a37a87fd26604a2c871370&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-27%2F041716704.jpg', null);
INSERT INTO `hr` VALUES ('12', 'D', '18568128888', '029-82111222', '广州越秀', '1', 'C', '$2a$10$oE39aG10kB/rFu2vQeCJTu/V/v4n6DRR0f8WyXRiAYvBpmadoOBE.', 'https://avatars3.githubusercontent.com/u/14972920?s=460&v=4', null);

-- ----------------------------
-- Table structure for hr_role
-- ----------------------------
DROP TABLE IF EXISTS `hr_role`;
CREATE TABLE `hr_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hrid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rid` (`rid`),
  KEY `hr_role_ibfk_1` (`hrid`),
  CONSTRAINT `hr_role_ibfk_1` FOREIGN KEY (`hrid`) REFERENCES `hr` (`id`) ON DELETE CASCADE,
  CONSTRAINT `hr_role_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hr_role
-- ----------------------------
INSERT INTO `hr_role` VALUES ('1', '3', '6');
INSERT INTO `hr_role` VALUES ('9', '5', '1');
INSERT INTO `hr_role` VALUES ('10', '5', '4');
INSERT INTO `hr_role` VALUES ('35', '12', '4');
INSERT INTO `hr_role` VALUES ('36', '12', '3');
INSERT INTO `hr_role` VALUES ('37', '12', '2');
INSERT INTO `hr_role` VALUES ('43', '11', '3');
INSERT INTO `hr_role` VALUES ('44', '11', '2');
INSERT INTO `hr_role` VALUES ('45', '11', '4');
INSERT INTO `hr_role` VALUES ('46', '11', '5');
INSERT INTO `hr_role` VALUES ('48', '10', '3');
INSERT INTO `hr_role` VALUES ('49', '10', '4');
INSERT INTO `hr_role` VALUES ('51', '1', '15');
INSERT INTO `hr_role` VALUES ('52', '1', '2');
INSERT INTO `hr_role` VALUES ('53', '1', '3');
INSERT INTO `hr_role` VALUES ('54', '1', '4');

-- ----------------------------
-- Table structure for joblevel
-- ----------------------------
DROP TABLE IF EXISTS `joblevel`;
CREATE TABLE `joblevel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL COMMENT '职称名称',
  `titleLevel` enum('正高级','副高级','中级','初级','员级') DEFAULT NULL,
  `createDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of joblevel
-- ----------------------------
INSERT INTO `joblevel` VALUES ('9', '教授', '正高级', '2018-01-11 21:19:14', '1');
INSERT INTO `joblevel` VALUES ('10', '副教授', '副高级', '2018-01-11 21:19:20', '1');
INSERT INTO `joblevel` VALUES ('12', '助教', '初级', '2018-01-11 21:35:39', '1');
INSERT INTO `joblevel` VALUES ('13', '讲师', '中级', '2018-01-11 22:42:12', '1');
INSERT INTO `joblevel` VALUES ('14', '初级工程师', '初级', '2018-01-14 16:18:50', '1');
INSERT INTO `joblevel` VALUES ('15', '中级工程师', '中级', '2018-01-14 16:19:00', '1');
INSERT INTO `joblevel` VALUES ('16', '高级工程师', '副高级', '2018-01-14 16:19:14', '1');
INSERT INTO `joblevel` VALUES ('17', '骨灰级工程师', '正高级', '2018-01-14 16:19:24', '1');

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(64) DEFAULT NULL,
  `path` varchar(64) DEFAULT NULL,
  `component` varchar(64) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `iconCls` varchar(64) DEFAULT NULL,
  `keepAlive` tinyint(1) DEFAULT NULL,
  `requireAuth` tinyint(1) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '/', null, null, '所有', null, null, null, null, '1');
INSERT INTO `menu` VALUES ('2', '/', '/home', 'Home', '人员资料', 'fa fa-user-circle-o', null, '1', '1', '1');
INSERT INTO `menu` VALUES ('3', '/', '/home', 'Home', '人事管理', 'fa fa-address-card-o', null, '1', '1', '1');
INSERT INTO `menu` VALUES ('4', '/', '/home', 'Home', '薪资管理', 'fa fa-money', null, '1', '1', '1');
INSERT INTO `menu` VALUES ('5', '/', '/home', 'Home', '统计管理', 'fa fa-bar-chart', null, '1', '1', '1');
INSERT INTO `menu` VALUES ('6', '/', '/home', 'Home', '系统管理', 'fa fa-windows', null, '1', '1', '1');
INSERT INTO `menu` VALUES ('7', '/employee/basic/**', '/emp/basic', 'EmpBasic', '基本资料', null, null, '1', '2', '1');
INSERT INTO `menu` VALUES ('8', '/employee/advanced/**', '/emp/adv', 'EmpAdv', '高级资料', null, null, '1', '2', '0');
INSERT INTO `menu` VALUES ('9', '/personnel/emp/**', '/per/emp', 'PerEmp', '员工资料', null, null, '1', '3', '1');
INSERT INTO `menu` VALUES ('10', '/personnel/ec/**', '/per/ec', 'PerEc', '员工奖惩', null, null, '1', '3', '1');
INSERT INTO `menu` VALUES ('11', '/personnel/train/**', '/per/train', 'PerTrain', '员工培训', null, null, '1', '3', '1');
INSERT INTO `menu` VALUES ('12', '/personnel/salary/**', '/per/salary', 'PerSalary', '员工调薪', null, null, '1', '3', '0');
INSERT INTO `menu` VALUES ('13', '/personnel/remove/**', '/per/mv', 'PerMv', '员工调动', null, null, '1', '3', '0');
INSERT INTO `menu` VALUES ('14', '/salary/sob/**', '/sal/sob', 'SalSob', '工资账套管理', null, null, '1', '4', '1');
INSERT INTO `menu` VALUES ('15', '/salary/sobcfg/**', '/sal/sobcfg', 'SalSobCfg', '员工账套设置', null, null, '1', '4', '1');
INSERT INTO `menu` VALUES ('16', '/salary/table/**', '/sal/table', 'SalTable', '工资表管理', null, null, '1', '4', '0');
INSERT INTO `menu` VALUES ('17', '/salary/month/**', '/sal/month', 'SalMonth', '月末处理', null, null, '1', '4', '0');
INSERT INTO `menu` VALUES ('18', '/salary/search/**', '/sal/search', 'SalSearch', '工资表查询', null, null, '1', '4', '1');
INSERT INTO `menu` VALUES ('19', '/statistics/all/**', '/sta/all', 'StaAll', '综合信息统计', null, null, '1', '5', '1');
INSERT INTO `menu` VALUES ('20', '/statistics/score/**', '/sta/score', 'StaScore', '员工积分统计', null, null, '1', '5', '0');
INSERT INTO `menu` VALUES ('21', '/statistics/personnel/**', '/sta/pers', 'StaPers', '人事信息统计', null, null, '1', '5', '0');
INSERT INTO `menu` VALUES ('22', '/statistics/recored/**', '/sta/record', 'StaRecord', '人事记录统计', null, null, '1', '5', '0');
INSERT INTO `menu` VALUES ('23', '/system/basic/**', '/sys/basic', 'SysBasic', '基础信息设置', null, null, '1', '6', '1');
INSERT INTO `menu` VALUES ('24', '/system/cfg/**', '/sys/cfg', 'SysCfg', '系统管理', null, null, '1', '6', '0');
INSERT INTO `menu` VALUES ('25', '/system/log/**', '/sys/log', 'SysLog', '操作日志管理', null, null, '1', '6', '0');
INSERT INTO `menu` VALUES ('26', '/system/hr/**', '/sys/hr', 'SysHr', '操作员管理', null, null, '1', '6', '1');
INSERT INTO `menu` VALUES ('27', '/system/data/**', '/sys/data', 'SysData', '备份恢复数据库', null, null, '1', '6', '0');
INSERT INTO `menu` VALUES ('28', '/system/init/**', '/sys/init', 'SysInit', '初始化数据库', null, null, '1', '6', '0');

-- ----------------------------
-- Table structure for menu_role
-- ----------------------------
DROP TABLE IF EXISTS `menu_role`;
CREATE TABLE `menu_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mid` (`mid`),
  KEY `rid` (`rid`),
  CONSTRAINT `menu_role_ibfk_1` FOREIGN KEY (`mid`) REFERENCES `menu` (`id`),
  CONSTRAINT `menu_role_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=300 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu_role
-- ----------------------------
INSERT INTO `menu_role` VALUES ('161', '7', '3');
INSERT INTO `menu_role` VALUES ('162', '7', '6');
INSERT INTO `menu_role` VALUES ('163', '9', '6');
INSERT INTO `menu_role` VALUES ('164', '10', '6');
INSERT INTO `menu_role` VALUES ('165', '11', '6');
INSERT INTO `menu_role` VALUES ('166', '12', '6');
INSERT INTO `menu_role` VALUES ('167', '13', '6');
INSERT INTO `menu_role` VALUES ('168', '14', '6');
INSERT INTO `menu_role` VALUES ('169', '15', '6');
INSERT INTO `menu_role` VALUES ('170', '16', '6');
INSERT INTO `menu_role` VALUES ('171', '17', '6');
INSERT INTO `menu_role` VALUES ('172', '18', '6');
INSERT INTO `menu_role` VALUES ('173', '19', '6');
INSERT INTO `menu_role` VALUES ('174', '20', '6');
INSERT INTO `menu_role` VALUES ('175', '21', '6');
INSERT INTO `menu_role` VALUES ('176', '22', '6');
INSERT INTO `menu_role` VALUES ('177', '23', '6');
INSERT INTO `menu_role` VALUES ('178', '25', '6');
INSERT INTO `menu_role` VALUES ('179', '26', '6');
INSERT INTO `menu_role` VALUES ('180', '27', '6');
INSERT INTO `menu_role` VALUES ('181', '28', '6');
INSERT INTO `menu_role` VALUES ('182', '24', '6');
INSERT INTO `menu_role` VALUES ('247', '7', '4');
INSERT INTO `menu_role` VALUES ('248', '8', '4');
INSERT INTO `menu_role` VALUES ('249', '11', '4');
INSERT INTO `menu_role` VALUES ('250', '7', '2');
INSERT INTO `menu_role` VALUES ('251', '8', '2');
INSERT INTO `menu_role` VALUES ('252', '9', '2');
INSERT INTO `menu_role` VALUES ('253', '10', '2');
INSERT INTO `menu_role` VALUES ('254', '12', '2');
INSERT INTO `menu_role` VALUES ('255', '13', '2');
INSERT INTO `menu_role` VALUES ('256', '7', '1');
INSERT INTO `menu_role` VALUES ('257', '8', '1');
INSERT INTO `menu_role` VALUES ('258', '9', '1');
INSERT INTO `menu_role` VALUES ('259', '10', '1');
INSERT INTO `menu_role` VALUES ('260', '11', '1');
INSERT INTO `menu_role` VALUES ('261', '12', '1');
INSERT INTO `menu_role` VALUES ('262', '13', '1');
INSERT INTO `menu_role` VALUES ('263', '14', '1');
INSERT INTO `menu_role` VALUES ('264', '15', '1');
INSERT INTO `menu_role` VALUES ('265', '16', '1');
INSERT INTO `menu_role` VALUES ('266', '17', '1');
INSERT INTO `menu_role` VALUES ('267', '18', '1');
INSERT INTO `menu_role` VALUES ('268', '19', '1');
INSERT INTO `menu_role` VALUES ('269', '20', '1');
INSERT INTO `menu_role` VALUES ('270', '21', '1');
INSERT INTO `menu_role` VALUES ('271', '22', '1');
INSERT INTO `menu_role` VALUES ('272', '23', '1');
INSERT INTO `menu_role` VALUES ('273', '24', '1');
INSERT INTO `menu_role` VALUES ('274', '25', '1');
INSERT INTO `menu_role` VALUES ('275', '26', '1');
INSERT INTO `menu_role` VALUES ('276', '27', '1');
INSERT INTO `menu_role` VALUES ('277', '28', '1');
INSERT INTO `menu_role` VALUES ('278', '7', '15');
INSERT INTO `menu_role` VALUES ('279', '8', '15');
INSERT INTO `menu_role` VALUES ('280', '9', '15');
INSERT INTO `menu_role` VALUES ('281', '10', '15');
INSERT INTO `menu_role` VALUES ('282', '11', '15');
INSERT INTO `menu_role` VALUES ('283', '12', '15');
INSERT INTO `menu_role` VALUES ('284', '13', '15');
INSERT INTO `menu_role` VALUES ('285', '14', '15');
INSERT INTO `menu_role` VALUES ('286', '15', '15');
INSERT INTO `menu_role` VALUES ('287', '16', '15');
INSERT INTO `menu_role` VALUES ('288', '17', '15');
INSERT INTO `menu_role` VALUES ('289', '18', '15');
INSERT INTO `menu_role` VALUES ('290', '19', '15');
INSERT INTO `menu_role` VALUES ('291', '20', '15');
INSERT INTO `menu_role` VALUES ('292', '21', '15');
INSERT INTO `menu_role` VALUES ('293', '22', '15');
INSERT INTO `menu_role` VALUES ('294', '23', '15');
INSERT INTO `menu_role` VALUES ('295', '24', '15');
INSERT INTO `menu_role` VALUES ('296', '25', '15');
INSERT INTO `menu_role` VALUES ('297', '26', '15');
INSERT INTO `menu_role` VALUES ('298', '27', '15');
INSERT INTO `menu_role` VALUES ('299', '28', '15');

-- ----------------------------
-- Table structure for msgcontent
-- ----------------------------
DROP TABLE IF EXISTS `msgcontent`;
CREATE TABLE `msgcontent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of msgcontent
-- ----------------------------
INSERT INTO `msgcontent` VALUES ('14', '2222222222', '11111111111111111', '2018-02-02 20:46:19');
INSERT INTO `msgcontent` VALUES ('15', '22222222', '3333333333333333333333', '2018-02-02 21:45:57');
INSERT INTO `msgcontent` VALUES ('16', '通知标题1', '通知内容1', '2018-02-03 11:41:39');
INSERT INTO `msgcontent` VALUES ('17', '通知标题2', '通知内容2', '2018-02-03 11:52:37');
INSERT INTO `msgcontent` VALUES ('18', '通知标题3', '通知内容3', '2018-02-03 12:19:41');
INSERT INTO `msgcontent` VALUES ('19', '78', '89', '2019-01-31 11:20:28');
INSERT INTO `msgcontent` VALUES ('20', '', '', '2019-01-31 15:15:27');
INSERT INTO `msgcontent` VALUES ('21', '11', '111', '2019-03-17 13:58:29');
INSERT INTO `msgcontent` VALUES ('22', '1111', '1111', '2019-03-17 14:01:11');
INSERT INTO `msgcontent` VALUES ('23', '14141', '41414141[[[[oo', '2019-03-17 14:04:14');
INSERT INTO `msgcontent` VALUES ('24', '777', '7777', '2019-03-17 14:04:38');
INSERT INTO `msgcontent` VALUES ('25', '111', '1111', '2019-03-17 14:06:36');
INSERT INTO `msgcontent` VALUES ('26', '12', '121', '2019-03-17 14:07:56');
INSERT INTO `msgcontent` VALUES ('27', '13', '13', '2019-03-17 14:09:06');

-- ----------------------------
-- Table structure for nation
-- ----------------------------
DROP TABLE IF EXISTS `nation`;
CREATE TABLE `nation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nation
-- ----------------------------
INSERT INTO `nation` VALUES ('1', '汉族');
INSERT INTO `nation` VALUES ('2', '蒙古族');
INSERT INTO `nation` VALUES ('3', '回族');
INSERT INTO `nation` VALUES ('4', '藏族');
INSERT INTO `nation` VALUES ('5', '维吾尔族');
INSERT INTO `nation` VALUES ('6', '苗族');
INSERT INTO `nation` VALUES ('7', '彝族');
INSERT INTO `nation` VALUES ('8', '壮族');
INSERT INTO `nation` VALUES ('9', '布依族');
INSERT INTO `nation` VALUES ('10', '朝鲜族');
INSERT INTO `nation` VALUES ('11', '满族');
INSERT INTO `nation` VALUES ('12', '侗族');
INSERT INTO `nation` VALUES ('13', '瑶族');
INSERT INTO `nation` VALUES ('14', '白族');
INSERT INTO `nation` VALUES ('15', '土家族');
INSERT INTO `nation` VALUES ('16', '哈尼族');
INSERT INTO `nation` VALUES ('17', '哈萨克族');
INSERT INTO `nation` VALUES ('18', '傣族');
INSERT INTO `nation` VALUES ('19', '黎族');
INSERT INTO `nation` VALUES ('20', '傈僳族');
INSERT INTO `nation` VALUES ('21', '佤族');
INSERT INTO `nation` VALUES ('22', '畲族');
INSERT INTO `nation` VALUES ('23', '高山族');
INSERT INTO `nation` VALUES ('24', '拉祜族');
INSERT INTO `nation` VALUES ('25', '水族');
INSERT INTO `nation` VALUES ('26', '东乡族');
INSERT INTO `nation` VALUES ('27', '纳西族');
INSERT INTO `nation` VALUES ('28', '景颇族');
INSERT INTO `nation` VALUES ('29', '柯尔克孜族');
INSERT INTO `nation` VALUES ('30', '土族');
INSERT INTO `nation` VALUES ('31', '达斡尔族');
INSERT INTO `nation` VALUES ('32', '仫佬族');
INSERT INTO `nation` VALUES ('33', '羌族');
INSERT INTO `nation` VALUES ('34', '布朗族');
INSERT INTO `nation` VALUES ('35', '撒拉族');
INSERT INTO `nation` VALUES ('36', '毛难族');
INSERT INTO `nation` VALUES ('37', '仡佬族');
INSERT INTO `nation` VALUES ('38', '锡伯族');
INSERT INTO `nation` VALUES ('39', '阿昌族');
INSERT INTO `nation` VALUES ('40', '普米族');
INSERT INTO `nation` VALUES ('41', '塔吉克族');
INSERT INTO `nation` VALUES ('42', '怒族');
INSERT INTO `nation` VALUES ('43', '乌孜别克族');
INSERT INTO `nation` VALUES ('44', '俄罗斯族');
INSERT INTO `nation` VALUES ('45', '鄂温克族');
INSERT INTO `nation` VALUES ('46', '崩龙族');
INSERT INTO `nation` VALUES ('47', '保安族');
INSERT INTO `nation` VALUES ('48', '裕固族');
INSERT INTO `nation` VALUES ('49', '京族');
INSERT INTO `nation` VALUES ('50', '塔塔尔族');
INSERT INTO `nation` VALUES ('51', '独龙族');
INSERT INTO `nation` VALUES ('52', '鄂伦春族');
INSERT INTO `nation` VALUES ('53', '赫哲族');
INSERT INTO `nation` VALUES ('54', '门巴族');
INSERT INTO `nation` VALUES ('55', '珞巴族');
INSERT INTO `nation` VALUES ('56', '基诺族');

-- ----------------------------
-- Table structure for oplog
-- ----------------------------
DROP TABLE IF EXISTS `oplog`;
CREATE TABLE `oplog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addDate` date DEFAULT NULL COMMENT '添加日期',
  `operate` varchar(255) DEFAULT NULL COMMENT '操作内容',
  `hrid` int(11) DEFAULT NULL COMMENT '操作员ID',
  PRIMARY KEY (`id`),
  KEY `hrid` (`hrid`),
  CONSTRAINT `oplog_ibfk_1` FOREIGN KEY (`hrid`) REFERENCES `hr` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of oplog
-- ----------------------------

-- ----------------------------
-- Table structure for politicsstatus
-- ----------------------------
DROP TABLE IF EXISTS `politicsstatus`;
CREATE TABLE `politicsstatus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of politicsstatus
-- ----------------------------
INSERT INTO `politicsstatus` VALUES ('1', '中共党员');
INSERT INTO `politicsstatus` VALUES ('2', '中共预备党员');
INSERT INTO `politicsstatus` VALUES ('3', '共青团员');
INSERT INTO `politicsstatus` VALUES ('4', '民革党员');
INSERT INTO `politicsstatus` VALUES ('5', '民盟盟员');
INSERT INTO `politicsstatus` VALUES ('6', '民建会员');
INSERT INTO `politicsstatus` VALUES ('7', '民进会员');
INSERT INTO `politicsstatus` VALUES ('8', '农工党党员');
INSERT INTO `politicsstatus` VALUES ('9', '致公党党员');
INSERT INTO `politicsstatus` VALUES ('10', '九三学社社员');
INSERT INTO `politicsstatus` VALUES ('11', '台盟盟员');
INSERT INTO `politicsstatus` VALUES ('12', '无党派民主人士');
INSERT INTO `politicsstatus` VALUES ('13', '普通公民');

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL COMMENT '职位',
  `createDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES ('29', '技术总监', '2018-01-11 21:13:42', '1');
INSERT INTO `position` VALUES ('30', '运营总监', '2018-01-11 21:13:48', '1');
INSERT INTO `position` VALUES ('31', '市场总监', '2018-01-11 21:13:56', '1');
INSERT INTO `position` VALUES ('32', '总经理', '2018-01-11 21:35:07', '1');
INSERT INTO `position` VALUES ('33', '研发工程师', '2018-01-14 16:07:11', '1');
INSERT INTO `position` VALUES ('34', '运维工程师', '2018-01-14 16:11:41', '1');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `nameZh` varchar(64) DEFAULT NULL COMMENT '角色名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'ROLE_manager', '部门经理');
INSERT INTO `role` VALUES ('2', 'ROLE_personnel', '人事专员');
INSERT INTO `role` VALUES ('3', 'ROLE_recruiter', '招聘主管');
INSERT INTO `role` VALUES ('4', 'ROLE_train', '培训主管');
INSERT INTO `role` VALUES ('5', 'ROLE_performance', '薪酬绩效主管');
INSERT INTO `role` VALUES ('6', 'ROLE_admin', '系统管理员');
INSERT INTO `role` VALUES ('13', 'ROLE_test2', '测试角色2');
INSERT INTO `role` VALUES ('14', 'ROLE_test1', '测试角色1');
INSERT INTO `role` VALUES ('15', 'ROLE_super', '超级管理员');

-- ----------------------------
-- Table structure for salary
-- ----------------------------
DROP TABLE IF EXISTS `salary`;
CREATE TABLE `salary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `basicSalary` int(11) DEFAULT NULL COMMENT '基本工资',
  `bonus` int(11) DEFAULT NULL COMMENT '奖金',
  `lunchSalary` int(11) DEFAULT NULL COMMENT '午餐补助',
  `trafficSalary` int(11) DEFAULT NULL COMMENT '交通补助',
  `allSalary` int(11) DEFAULT NULL COMMENT '应发工资',
  `pensionBase` int(11) DEFAULT NULL COMMENT '养老金基数',
  `pensionPer` float DEFAULT NULL COMMENT '养老金比率',
  `createDate` timestamp NULL DEFAULT NULL COMMENT '启用时间',
  `medicalBase` int(11) DEFAULT NULL COMMENT '医疗基数',
  `medicalPer` float DEFAULT NULL COMMENT '医疗保险比率',
  `accumulationFundBase` int(11) DEFAULT NULL COMMENT '公积金基数',
  `accumulationFundPer` float DEFAULT NULL COMMENT '公积金比率',
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of salary
-- ----------------------------
INSERT INTO `salary` VALUES ('9', '8999', '4000', '800', '500', null, '2000', '0.07', '2018-01-24 00:00:00', '2000', '0.07', '2000', '0.07', '市场部工资账套');
INSERT INTO `salary` VALUES ('10', '2000', '2000', '400', '1000', null, '2000', '0.07', '2018-01-01 00:00:00', '2000', '0.07', '2000', '0.07', '人事部工资账套');
INSERT INTO `salary` VALUES ('13', '10000', '3000', '500', '500', null, '4000', '0.07', '2018-01-25 00:00:00', '4000', '0.07', '4000', '0.07', '运维部工资账套');
INSERT INTO `salary` VALUES ('15', '5000', '1000', '300', '200', null, '5000', '0.05', '2019-02-12 10:00:00', '5000', '0.05', '3000', '0.05', '普通教师帐套');
INSERT INTO `salary` VALUES ('16', '2', '2', '2', '2', null, '2', '2', '2019-03-03 10:00:00', '2', '2', '2', '2', '123');

-- ----------------------------
-- Table structure for sysmsg
-- ----------------------------
DROP TABLE IF EXISTS `sysmsg`;
CREATE TABLE `sysmsg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mid` int(11) DEFAULT NULL COMMENT '消息id',
  `type` int(11) DEFAULT '0' COMMENT '0表示群发消息',
  `hrid` int(11) DEFAULT NULL COMMENT '这条消息是给谁的',
  `state` int(11) DEFAULT '0' COMMENT '0 未读 1 已读',
  PRIMARY KEY (`id`),
  KEY `hrid` (`hrid`),
  KEY `sysmsg_ibfk_1` (`mid`),
  CONSTRAINT `sysmsg_ibfk_1` FOREIGN KEY (`mid`) REFERENCES `msgcontent` (`id`),
  CONSTRAINT `sysmsg_ibfk_2` FOREIGN KEY (`hrid`) REFERENCES `hr` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sysmsg
-- ----------------------------
INSERT INTO `sysmsg` VALUES ('57', '14', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('58', '14', '0', '5', '1');
INSERT INTO `sysmsg` VALUES ('59', '14', '0', '10', '1');
INSERT INTO `sysmsg` VALUES ('60', '14', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('61', '14', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('62', '15', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('63', '15', '0', '5', '1');
INSERT INTO `sysmsg` VALUES ('64', '15', '0', '10', '1');
INSERT INTO `sysmsg` VALUES ('65', '15', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('66', '15', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('67', '16', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('68', '16', '0', '5', '1');
INSERT INTO `sysmsg` VALUES ('69', '16', '0', '10', '1');
INSERT INTO `sysmsg` VALUES ('70', '16', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('71', '16', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('72', '17', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('73', '17', '0', '5', '1');
INSERT INTO `sysmsg` VALUES ('74', '17', '0', '10', '1');
INSERT INTO `sysmsg` VALUES ('75', '17', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('76', '17', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('77', '18', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('78', '18', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('79', '18', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('80', '18', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('81', '18', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('82', '19', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('83', '19', '0', '5', '1');
INSERT INTO `sysmsg` VALUES ('84', '19', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('85', '19', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('86', '19', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('87', '20', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('88', '20', '0', '5', '1');
INSERT INTO `sysmsg` VALUES ('89', '20', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('90', '20', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('91', '20', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('92', '21', '0', '1', '0');
INSERT INTO `sysmsg` VALUES ('93', '21', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('94', '21', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('95', '21', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('96', '21', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('97', '21', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('98', '22', '0', '1', '0');
INSERT INTO `sysmsg` VALUES ('99', '22', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('100', '22', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('101', '22', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('102', '22', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('103', '22', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('104', '23', '0', '1', '0');
INSERT INTO `sysmsg` VALUES ('105', '23', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('106', '23', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('107', '23', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('108', '23', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('109', '23', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('110', '24', '0', '1', '0');
INSERT INTO `sysmsg` VALUES ('111', '24', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('112', '24', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('113', '24', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('114', '24', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('115', '24', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('116', '25', '0', '1', '0');
INSERT INTO `sysmsg` VALUES ('117', '25', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('118', '25', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('119', '25', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('120', '25', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('121', '25', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('122', '26', '0', '1', '0');
INSERT INTO `sysmsg` VALUES ('123', '26', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('124', '26', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('125', '26', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('126', '26', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('127', '26', '0', '12', '0');
INSERT INTO `sysmsg` VALUES ('128', '27', '0', '1', '0');
INSERT INTO `sysmsg` VALUES ('129', '27', '0', '3', '1');
INSERT INTO `sysmsg` VALUES ('130', '27', '0', '5', '0');
INSERT INTO `sysmsg` VALUES ('131', '27', '0', '10', '0');
INSERT INTO `sysmsg` VALUES ('132', '27', '0', '11', '0');
INSERT INTO `sysmsg` VALUES ('133', '27', '0', '12', '0');

-- ----------------------------
-- Table structure for tab_reward
-- ----------------------------
DROP TABLE IF EXISTS `tab_reward`;
CREATE TABLE `tab_reward` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `empId` varchar(50) NOT NULL,
  `empName` varchar(500) DEFAULT NULL,
  `time` varchar(150) DEFAULT NULL,
  `msg` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_reward
-- ----------------------------
INSERT INTO `tab_reward` VALUES ('1', '2', '陈静', '2019-02-05', '评比一等奖1');

-- ----------------------------
-- Table structure for tab_train
-- ----------------------------
DROP TABLE IF EXISTS `tab_train`;
CREATE TABLE `tab_train` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_train
-- ----------------------------
INSERT INTO `tab_train` VALUES ('15', '陈静', '2', '培训三个月');
