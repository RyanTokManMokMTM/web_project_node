/*
 Navicat Premium Data Transfer

 Source Server         : course
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : webproject

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 11/06/2021 17:33:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `UID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'User',
  `LastName` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'Anonyous',
  `Email` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`UID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'jackson', 'tmm', 'ryantokmanmokmtm@hotmail.com', '$2b$10$9/5LZ3AJWfb3f7rHDmo6c.U6orZVEapacXpZv08O0zqH93iis7wlu');
INSERT INTO `users` VALUES (2, 'Jackson', 'tmmO', 'admin@admin.com', '$2b$10$ozuJ/oughjaRoNl6SMZop.yrGD5i8pORhQEtl4.OW0bLS7aBmw28m');
INSERT INTO `users` VALUES (3, 'jackson', 'mok', 'admin@test.com', '$2b$10$V2CY.4HohpzXy/zmcO1v.eJwq.BTrXN153n0BcjENGL8TQR.6Irue');
INSERT INTO `users` VALUES (4, 'jackson', 'mok', 'admin@tests.com', '$2b$10$59bHca0vuaqGKqducw9/Gu4GXqu3ErL.beWp3p1T.CHMKwPks15.K');
INSERT INTO `users` VALUES (5, 'Adnub', 'adnub', 'ryantokmanmdokmtm@hotmail.com', '$2b$10$X9j3jL2YdA6ORKM.j7xO7ePOQUpojORBuTRPosSeSe6xeTOCNhLee');
INSERT INTO `users` VALUES (6, 'jackson', 'tmm', 'jacksontmm@admin.com', '$2b$10$3ytaKPyqaXA6rFHkQumHF.CAo5fAYCuITaEwTJUDrjiWI9BgSdCCO');

SET FOREIGN_KEY_CHECKS = 1;
