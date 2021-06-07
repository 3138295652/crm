/*
MySQL Data Transfer
Source Host: localhost
Source Database: bs
Target Host: localhost
Target Database: bs
Date: 2021/5/28 12:19:18
*/


SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for basicdata
-- ----------------------------
DROP TABLE IF EXISTS `basicdata`;
CREATE TABLE `basicdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(25) CHARACTER SET utf8 NOT NULL,
  `stock` char(25) CHARACTER SET utf8 NOT NULL,
  `price` char(25) CHARACTER SET utf8 NOT NULL,
  `pic` char(20) CHARACTER SET utf8 NOT NULL DEFAULT '无',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;


-- ----------------------------
-- Table structure for client
-- ----------------------------

DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `grade` char(1) NOT NULL,
  `tel` char(11) NOT NULL,
  `mail` varchar(20) DEFAULT NULL,
  `lable` char(20) NOT NULL,
  `businesscard` char(100) DEFAULT NULL,
  `negotiationrecord` char(10) DEFAULT NULL,
  `goto` char(1) NOT NULL,
  `pic` char(20) NOT NULL,
  `address` char(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2223124 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for lable
-- ----------------------------
DROP TABLE IF EXISTS `lable`;
CREATE TABLE `lable` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `type` char(10) CHARACTER SET utf8 NOT NULL,
  `content` char(100) CHARACTER SET utf8 DEFAULT NULL,
  `name` char(40) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `la_name` (`name`),
  UNIQUE KEY `la_content` (`content`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for marketing
-- ----------------------------
DROP TABLE IF EXISTS `marketing`;
CREATE TABLE `marketing` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `thing` char(200) CHARACTER SET utf8 NOT NULL,
  `time` date NOT NULL,
  `discoverer` char(40) CHARACTER SET utf8 NOT NULL,
  `type` char(40) CHARACTER SET utf8 DEFAULT NULL,
  `contact` char(50) CHARACTER SET utf8 NOT NULL,
  `remarks` char(100) CHARACTER SET utf8 DEFAULT NULL,
  `location` char(100) CHARACTER SET utf8 NOT NULL,
  `title` char(40) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `m_title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for negotiationrecord
-- ----------------------------
DROP TABLE IF EXISTS `negotiationrecord`;
CREATE TABLE `negotiationrecord` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `client_name` char(100) CHARACTER SET utf8 NOT NULL,
  `pic` char(10) CHARACTER SET utf8 NOT NULL,
  `time` char(20) CHARACTER SET utf8 NOT NULL,
  `content` char(40) CHARACTER SET utf8 NOT NULL,
  `title` char(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `c` (`content`),
  UNIQUE KEY `t` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=213124 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for plan
-- ----------------------------
DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` char(40) CHARACTER SET utf8 NOT NULL,
  `planner` char(10) CHARACTER SET utf8 NOT NULL,
  `executor` char(10) CHARACTER SET utf8 DEFAULT NULL,
  `statu` char(10) CHARACTER SET utf8 NOT NULL,
  `starttime` date NOT NULL,
  `remarks` char(100) CHARACTER SET utf8 DEFAULT NULL,
  `content` char(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `p_title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS `service`;
CREATE TABLE `service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientname` char(100) CHARACTER SET utf8 NOT NULL,
  `overtime` date NOT NULL,
  `lv` char(1) CHARACTER SET utf8 DEFAULT NULL,
  `pic` varchar(10) CHARACTER SET utf8 DEFAULT '无' COMMENT '无',
  `title` char(40) CHARACTER SET utf8 DEFAULT NULL,
  `statu` char(10) CHARACTER SET utf8 DEFAULT '未处理',
  `type` char(20) CHARACTER SET utf8 NOT NULL,
  `starttime` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` char(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `password` char(20) CHARACTER SET utf8 NOT NULL,
  `gl` char(5) CHARACTER SET utf8 NOT NULL DEFAULT '不可操作',
  `gd` char(5) CHARACTER SET utf8 DEFAULT '不可操作',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `basicdata` VALUES ('1', '手机', '39510', '3000', '肖茂江');
INSERT INTO `basicdata` VALUES ('2', '电脑', '45681', '5500', '金文刚');
INSERT INTO `basicdata` VALUES ('3', '平板', '32664', '4500', 'ma');
INSERT INTO `basicdata` VALUES ('7', '产品12', '2', '3', 'mf');
INSERT INTO `client` VALUES ('1', '鑫世科技', '低', '15216664855', 'asda@qq.com', '科技', 'http://localhost:7001/public/upload/1621416222494bonito1.jpg', '一次马菲商谈', '有', '肖茂江', '海南省**市**路021号');
INSERT INTO `client` VALUES ('2', '致远教育', '低', '', 'eqmyuy@Gmail.com', '教育', null, '', '无', '肖茂江', '吉林省**市**路154号');
INSERT INTO `client` VALUES ('3', '北京马菲科技', '高', '13558988555', 'mafei@mail.com', '科技', null, null, '有', 'ma', '北京市****354号');
INSERT INTO `client` VALUES ('12', '御灵音乐', '低', '2', '2', '音乐', 'http://localhost:7001/public/upload/1618465907592粗.png', '', '无', '金文刚', '2');
INSERT INTO `client` VALUES ('123', '基晓科技', '中', '大三', 'as', '科技', null, '2', '有', '李博', 'asd');
INSERT INTO `client` VALUES ('132', '风影工作室', '中', '123', '123', '科技', null, '123', '有', '李博', '213');
INSERT INTO `client` VALUES ('442', '弦音工作室', '中', '16522223345', 'xiany@mail.com', '音乐', 'http://localhost:7001/public/upload/1618465888925QQ图片20200812104708.png', null, '有', '金文刚', '西海三线（152,842）');
INSERT INTO `client` VALUES ('23123', '客户3', '高', '2312', '213', '案例', 'http://localhost:7001/public/upload/1618821205794粗.png', '123', '无', 'ma', '123');
INSERT INTO `client` VALUES ('123123', '客户1', '低', 'qwe', 'wqeq', '其他', null, 'qwe', '无', '金文刚', 'qwe');
INSERT INTO `client` VALUES ('1414141', '鑫世科', '低', '15233334854', 'sasfa', '音乐', null, null, '无', '肖茂江', '上海市***');
INSERT INTO `client` VALUES ('2223123', '客户4', '低', '1500000000', 'dasdfasda', '科技', null, null, '无', 'mf', '奥术大师多');
INSERT INTO `lable` VALUES ('1', '1', null, '科技');
INSERT INTO `lable` VALUES ('2', '1', null, '教育');
INSERT INTO `lable` VALUES ('3', '1', null, '音乐');
INSERT INTO `lable` VALUES ('9', '2', 'wqeqwe', '2');
INSERT INTO `lable` VALUES ('11', '2', '3213', '13232');
INSERT INTO `lable` VALUES ('12', '1', null, 'a');
INSERT INTO `lable` VALUES ('13', '2', 'bbbbq', 'aaab');
INSERT INTO `lable` VALUES ('22', '2', '1asd65', '156');
INSERT INTO `lable` VALUES ('25', '2', 'qweqwe', '165');
INSERT INTO `lable` VALUES ('26', '2', 'saasdasdasd', 'qweqweqweqw');
INSERT INTO `lable` VALUES ('27', '1', null, 'b');
INSERT INTO `lable` VALUES ('34', '1', null, 'c');
INSERT INTO `lable` VALUES ('35', '1', null, 'd');
INSERT INTO `lable` VALUES ('36', '1', null, 'e');
INSERT INTO `lable` VALUES ('37', '2', '5', '54245');
INSERT INTO `lable` VALUES ('39', '2', '4', '4555');
INSERT INTO `lable` VALUES ('40', '1', null, 'f');
INSERT INTO `marketing` VALUES ('9', '某地产生的营销机会', '2021-04-30', '肖茂江', '产品3', '4008208820', '1110', '某省某市某地点', '关于产品3的营销机会');
INSERT INTO `marketing` VALUES ('10', '打撒所大所多大所', '2021-05-02', '金文刚', '产品2', '13656564872', '呜呜呜565', '阿撒大声地今天的一句话', '产品2的营销机会');
INSERT INTO `marketing` VALUES ('11', '啊 这是一个销售机会', '2021-04-30', '王文杰', '77', '12355588888', '11', '事件地点', '销售机会006');
INSERT INTO `marketing` VALUES ('12', '这是一个营销机会', '2021-04-21', '代某', '7', '13255555555', '427527', '北京市起飞路马飞大厦20层', '营销机会005');
INSERT INTO `marketing` VALUES ('13', '沙雕', '2021-04-28', '肖茂江', '', '11111111111', '', '奥术大师多', '啧啧啧');
INSERT INTO `negotiationrecord` VALUES ('1', '北京马菲科技', '肖茂江', '2021.3.14', '阿巴阿巴444', '一次马菲商谈');
INSERT INTO `negotiationrecord` VALUES ('2', '2', 'mf', 'qew', 'qew', 'wqe');
INSERT INTO `negotiationrecord` VALUES ('5', '2', 'ma', '2', '2', '3');
INSERT INTO `negotiationrecord` VALUES ('55', '2', 'ma', '123', '123321', '1223');
INSERT INTO `negotiationrecord` VALUES ('1231', '3', 'mf', '4.12', '气温气温', ' 撒大大啊');
INSERT INTO `negotiationrecord` VALUES ('141452', '2', '肖茂江', '4545', '786786', '4545');
INSERT INTO `negotiationrecord` VALUES ('213123', '2', '肖茂江', '21345', '231132', '123125234213');
INSERT INTO `plan` VALUES ('3', '开发计划', 'mf', 'ma', '正在执行1', '2021-04-15', '肖茂江正在执行', '奥术大师大所多内容');
INSERT INTO `plan` VALUES ('4', '新计划', '肖茂江', '肖茂江', '未执行', '2021-04-13', '测试新计划', '新计划内容');
INSERT INTO `plan` VALUES ('5', '去231', 'mf', '', '气味', '2021-04-29', '气味', '委屈而去');
INSERT INTO `plan` VALUES ('6', '顺顺利利', '肖茂江', '', '', '2021-05-27', '', '大飒飒的');
INSERT INTO `service` VALUES ('1', '致远教育', '2021-04-13', '低', '肖茂江', '鑫世需求讨论', '已处理', '电话', '2021-05-22');
INSERT INTO `service` VALUES ('2', '致远教育', '2021-04-23', '中', '肖茂江', '业务培训计划之阿巴阿巴呜呜呜', '已处理', '腾讯视频', null);
INSERT INTO `service` VALUES ('3', '风影工作室', '2021-04-18', '中', '肖茂江', '项目收购详情', '未处理', '线下', '2021-05-20');
INSERT INTO `service` VALUES ('4', '风影工作室', '2021-04-17', '高', '无', '工业建设商谈', '未处理', '线下', null);
INSERT INTO `service` VALUES ('5', '东风文化', '2021-04-21', '低', 'mf', '人才培养计划', '已处理', '线下', null);
INSERT INTO `service` VALUES ('11', '星芒科技', '2021-04-01', '中', '金文刚', '气温气温', '已处理', '。。。。', null);
INSERT INTO `service` VALUES ('13', '御灵音乐', '2021-05-20', '低', '肖茂江', '16515', '未处理', '15132156515', null);
INSERT INTO `service` VALUES ('18', '星芒科技', '2021-05-22', '低', '金文刚', '钱3123', '已处理', '123', null);
INSERT INTO `service` VALUES ('19', '基晓科技', '2021-05-27', '低', '肖茂江', '搜索框', '未处理', '电话', null);
INSERT INTO `service` VALUES ('20', '基晓科技', '2021-06-26', '低', '金文刚', '多发点', '未处理', 'asda', null);
INSERT INTO `service` VALUES ('21', '弦音工作室', '2021-05-28', '低', '肖茂江', '搜索', '未处理', '是', '1970-01-01');
INSERT INTO `service` VALUES ('22', '致远教育', '2021-05-06', '低', '肖茂江', '搜索', '未处理', '搜索', '2021-05-21');
INSERT INTO `service` VALUES ('23', '致远教育', '2021-05-29', '低', '肖茂江', '4', '未处理', '电话', null);
INSERT INTO `service` VALUES ('24', '北京马菲科技', '2021-05-28', '低', '肖茂江', '搜索', '未处理', '搜索', '2021-05-20');
INSERT INTO `user` VALUES ('ma', '123', '不可操作', '不可操作');
INSERT INTO `user` VALUES ('mf', '123', '不可操作', '不可操作');
INSERT INTO `user` VALUES ('qweqwe', 'qwe', '不可操作', '不可操作');
INSERT INTO `user` VALUES ('肖茂江', '5266', '可操作', '可操作');
INSERT INTO `user` VALUES ('金文刚', '三', '不可操作', '不可操作');
