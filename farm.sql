-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 05, 2021 at 07:18 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `farm`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `A_ID` int(10) NOT NULL,
  `A_Name` varchar(30) NOT NULL,
  `A_UName` varchar(30) NOT NULL,
  `A_Address` varchar(100) NOT NULL,
  `A_Password` varchar(30) NOT NULL,
  `Login_ID` int(10) NOT NULL,
  `F_ID` int(10) NOT NULL,
  PRIMARY KEY (`A_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`A_ID`, `A_Name`, `A_UName`, `A_Address`, `A_Password`, `Login_ID`, `F_ID`) VALUES
(601, 'Rifa Tasfia', 'Rifa', 'Dhaka', 'Clash', 501, 1);

-- --------------------------------------------------------

--
-- Table structure for table `available product`
--

DROP TABLE IF EXISTS `available product`;
CREATE TABLE IF NOT EXISTS `available product` (
  `P_ID` int(10) NOT NULL AUTO_INCREMENT,
  `P_Type` varchar(30) NOT NULL,
  `P_Name` varchar(30) NOT NULL,
  `P_Amount` double NOT NULL,
  `P_Price` int(10) NOT NULL,
  PRIMARY KEY (`P_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=805 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `available product`
--

INSERT INTO `available product` (`P_ID`, `P_Type`, `P_Name`, `P_Amount`, `P_Price`) VALUES
(801, 'Meat', 'Beef', 100, 500),
(802, 'Meat', 'Mutton', 50, 700),
(803, 'Egg', 'Egg (Chicken)', 5000, 10),
(804, 'Egg', 'Egg (Duck)', 2500, 15);

-- --------------------------------------------------------

--
-- Table structure for table `a_email`
--

DROP TABLE IF EXISTS `a_email`;
CREATE TABLE IF NOT EXISTS `a_email` (
  `A_Email_ID` varchar(30) NOT NULL,
  `A_ID` int(10) NOT NULL,
  PRIMARY KEY (`A_Email_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `a_email`
--

INSERT INTO `a_email` (`A_Email_ID`, `A_ID`) VALUES
('rifa@gmail.com', 601),
('tasfia@gmail.com', 601);

-- --------------------------------------------------------

--
-- Table structure for table `a_phone`
--

DROP TABLE IF EXISTS `a_phone`;
CREATE TABLE IF NOT EXISTS `a_phone` (
  `A_Phone_No` int(12) NOT NULL,
  `A_ID` int(11) NOT NULL,
  PRIMARY KEY (`A_Phone_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `a_phone`
--

INSERT INTO `a_phone` (`A_Phone_No`, `A_ID`) VALUES
(1717777777, 601),
(1818888888, 601);

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

DROP TABLE IF EXISTS `buyer`;
CREATE TABLE IF NOT EXISTS `buyer` (
  `B_ID` int(10) NOT NULL AUTO_INCREMENT,
  `Login_ID` int(10) NOT NULL,
  `B_Name` varchar(20) NOT NULL,
  `B_Password` varchar(10) NOT NULL,
  `B_UName` varchar(20) NOT NULL,
  `B_Address` varchar(20) NOT NULL,
  PRIMARY KEY (`B_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=703 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`B_ID`, `Login_ID`, `B_Name`, `B_Password`, `B_UName`, `B_Address`) VALUES
(701, 502, 'Priyo Islam', 'Contest', 'Priyo', 'Dhaka'),
(702, 503, 'Kashfia Shaoky', 'Clone', 'Kashfia', 'Dhaka');

-- --------------------------------------------------------

--
-- Table structure for table `b_email`
--

DROP TABLE IF EXISTS `b_email`;
CREATE TABLE IF NOT EXISTS `b_email` (
  `B_Email_ID` varchar(50) NOT NULL,
  `B_ID` int(10) NOT NULL,
  PRIMARY KEY (`B_Email_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_email`
--

INSERT INTO `b_email` (`B_Email_ID`, `B_ID`) VALUES
('priyo@gmail.com', 701),
('kashfia@gmail.com', 702),
('shaoky@gmail.com', 702);

-- --------------------------------------------------------

--
-- Table structure for table `b_phone`
--

DROP TABLE IF EXISTS `b_phone`;
CREATE TABLE IF NOT EXISTS `b_phone` (
  `B_Phone_No` int(11) NOT NULL,
  `B_ID` int(10) NOT NULL,
  PRIMARY KEY (`B_Phone_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_phone`
--

INSERT INTO `b_phone` (`B_Phone_No`, `B_ID`) VALUES
(1711111111, 701),
(1722222222, 701),
(1715077683, 702);

-- --------------------------------------------------------

--
-- Table structure for table `checks`
--

DROP TABLE IF EXISTS `checks`;
CREATE TABLE IF NOT EXISTS `checks` (
  `Check_ID` int(10) NOT NULL AUTO_INCREMENT,
  `B_ID` int(10) NOT NULL,
  `P_ID` int(10) NOT NULL,
  PRIMARY KEY (`Check_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=1105 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `checks`
--

INSERT INTO `checks` (`Check_ID`, `B_ID`, `P_ID`) VALUES
(1101, 701, 802),
(1102, 702, 804),
(1103, 702, 801),
(1104, 702, 803);

-- --------------------------------------------------------

--
-- Table structure for table `chicken`
--

DROP TABLE IF EXISTS `chicken`;
CREATE TABLE IF NOT EXISTS `chicken` (
  `C_ID` int(10) NOT NULL AUTO_INCREMENT,
  `Br_ID` int(10) NOT NULL,
  `C_Type` varchar(30) NOT NULL,
  `C_Number` int(10) NOT NULL,
  `C_Breed` varchar(30) NOT NULL,
  `C_FoodIntake` int(10) NOT NULL,
  `C_AvgEggProd` int(10) NOT NULL,
  `ShedNo` int(10) NOT NULL,
  PRIMARY KEY (`C_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=107 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chicken`
--

INSERT INTO `chicken` (`C_ID`, `Br_ID`, `C_Type`, `C_Number`, `C_Breed`, `C_FoodIntake`, `C_AvgEggProd`, `ShedNo`) VALUES
(101, 1, 'Egg Producing', 50, 'White Leghorn', 10, 300, 905),
(102, 1, 'Male', 10, 'White Leghorn', 3, 0, 906),
(103, 1, 'Meat', 100, 'Rhode Island Red', 40, 150, 907),
(104, 1, 'Chick', 200, 'All', 100, 0, 908);

-- --------------------------------------------------------

--
-- Table structure for table `cow`
--

DROP TABLE IF EXISTS `cow`;
CREATE TABLE IF NOT EXISTS `cow` (
  `Co_ID` int(10) NOT NULL AUTO_INCREMENT,
  `Br_ID` int(10) NOT NULL,
  `Co_Type` varchar(30) NOT NULL,
  `Co_Gender` varchar(30) NOT NULL,
  `Co_Color` varchar(30) NOT NULL,
  `Co_Weight` double NOT NULL,
  `Co_MilkProduction` double NOT NULL,
  `Co_FoodIntake` double NOT NULL,
  `Co_Shed_No` int(10) NOT NULL,
  `Co_Status` varchar(30) NOT NULL,
  PRIMARY KEY (`Co_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=205 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cow`
--

INSERT INTO `cow` (`Co_ID`, `Br_ID`, `Co_Type`, `Co_Gender`, `Co_Color`, `Co_Weight`, `Co_MilkProduction`, `Co_FoodIntake`, `Co_Shed_No`, `Co_Status`) VALUES
(201, 1, 'Australian Friesian', 'Male', 'White', 800, 0, 10, 901, '6H'),
(202, 1, 'Australian Friesian', 'Female', 'Red', 120, 25, 10, 902, '5H'),
(203, 1, 'Shahiwal', 'Female', 'Black', 100, 10, 12, 903, '6U'),
(204, 1, 'Shahiwal', 'Male', 'Pink', 700, 0, 10, 904, '5U');

-- --------------------------------------------------------

--
-- Table structure for table `duck`
--

DROP TABLE IF EXISTS `duck`;
CREATE TABLE IF NOT EXISTS `duck` (
  `D_ID` int(10) NOT NULL AUTO_INCREMENT,
  `Br_ID` int(10) NOT NULL,
  `D_Type` varchar(30) NOT NULL,
  `D_Number` int(10) NOT NULL,
  `D_Breed` varchar(30) NOT NULL,
  `D_FoodIntake` double NOT NULL,
  `D_AvgEggProd` double NOT NULL,
  `ShedNo` int(10) NOT NULL,
  PRIMARY KEY (`D_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=304 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `duck`
--

INSERT INTO `duck` (`D_ID`, `Br_ID`, `D_Type`, `D_Number`, `D_Breed`, `D_FoodIntake`, `D_AvgEggProd`, `ShedNo`) VALUES
(301, 1, 'Egg', 50, 'Campbell', 10, 150, 909),
(302, 1, 'Male', 10, 'Campbell', 3, 0, 910),
(303, 1, 'Baby', 40, 'Campbell', 6, 0, 911);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `E_ID` int(10) NOT NULL,
  `Br_ID` int(10) NOT NULL,
  `E_Name` varchar(25) NOT NULL,
  `E_WorkingHour` int(2) NOT NULL,
  `E_Salary` int(10) NOT NULL,
  `E_Status` varchar(20) NOT NULL,
  `E_Role` varchar(20) NOT NULL,
  PRIMARY KEY (`E_ID`,`Br_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`E_ID`, `Br_ID`, `E_Name`, `E_WorkingHour`, `E_Salary`, `E_Status`, `E_Role`) VALUES
(1201, 1, 'Raju', 9, 5000, 'On Duty', 'Chicken & Duck'),
(1202, 1, 'Karim', 9, 5000, 'On Duty', 'Cow & Goat'),
(1203, 1, 'Rina', 9, 5000, 'On Duty', 'Food & Equipment'),
(1204, 1, 'Tina', 9, 5000, 'On Leave', 'Fishery');

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
CREATE TABLE IF NOT EXISTS `equipment` (
  `Eq_ID` int(10) NOT NULL AUTO_INCREMENT,
  `Buying Date` date NOT NULL,
  `E_Type` varchar(30) NOT NULL,
  `E_Name` varchar(40) NOT NULL,
  `Eq_Role` varchar(40) NOT NULL,
  `Br_ID` int(10) NOT NULL,
  PRIMARY KEY (`Eq_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=403 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`Eq_ID`, `Buying Date`, `E_Type`, `E_Name`, `Eq_Role`, `Br_ID`) VALUES
(401, '2021-02-09', 'Field', 'Rake', 'Cleaning', 1),
(402, '2021-02-01', 'Transport', 'Tractor', 'Leveling', 1);

-- --------------------------------------------------------

--
-- Table structure for table `e_email`
--

DROP TABLE IF EXISTS `e_email`;
CREATE TABLE IF NOT EXISTS `e_email` (
  `E_Email_ID` varchar(20) NOT NULL,
  `Br_ID` int(10) NOT NULL,
  `E_ID` int(10) NOT NULL,
  PRIMARY KEY (`E_Email_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `e_email`
--

INSERT INTO `e_email` (`E_Email_ID`, `Br_ID`, `E_ID`) VALUES
('raju@gmail.com', 1, 1201),
('r@gmail', 1, 1201),
('karim@gmail.com', 1, 1202),
('rina@gmail.com', 1, 1203),
('ri@gmail.com', 1, 1203),
('tina@gmail.com', 1, 1204);

-- --------------------------------------------------------

--
-- Table structure for table `e_phone`
--

DROP TABLE IF EXISTS `e_phone`;
CREATE TABLE IF NOT EXISTS `e_phone` (
  `E_Phone_No` int(11) NOT NULL,
  `E_ID` int(10) NOT NULL,
  `Br_ID` int(10) NOT NULL,
  PRIMARY KEY (`E_Phone_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `e_phone`
--

INSERT INTO `e_phone` (`E_Phone_No`, `E_ID`, `Br_ID`) VALUES
(1899999999, 1201, 1),
(1666666666, 1202, 1),
(1999999999, 1203, 1),
(1988888888, 1204, 1),
(1544444444, 1204, 1);

-- --------------------------------------------------------

--
-- Table structure for table `farm`
--

DROP TABLE IF EXISTS `farm`;
CREATE TABLE IF NOT EXISTS `farm` (
  `F_ID` int(10) NOT NULL,
  `F_Name` varchar(40) NOT NULL,
  `F_Type` varchar(30) NOT NULL,
  `F_Description` varchar(50) NOT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `farm`
--

INSERT INTO `farm` (`F_ID`, `F_Name`, `F_Type`, `F_Description`) VALUES
(1, 'AgroTech', 'Husbandry', 'Chain');

-- --------------------------------------------------------

--
-- Table structure for table `farm branch`
--

DROP TABLE IF EXISTS `farm branch`;
CREATE TABLE IF NOT EXISTS `farm branch` (
  `Br_ID` int(10) NOT NULL AUTO_INCREMENT,
  `F_ID` int(10) NOT NULL,
  `Br_Name` varchar(30) NOT NULL,
  `Br_Location` varchar(30) NOT NULL,
  PRIMARY KEY (`Br_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `farm branch`
--

INSERT INTO `farm branch` (`Br_ID`, `F_ID`, `Br_Name`, `Br_Location`) VALUES
(1, 1, 'Dhaka Branch', 'Dhaka');

-- --------------------------------------------------------

--
-- Table structure for table `fishery`
--

DROP TABLE IF EXISTS `fishery`;
CREATE TABLE IF NOT EXISTS `fishery` (
  `Fi_ID` int(10) NOT NULL AUTO_INCREMENT,
  `Br_ID` int(10) NOT NULL,
  `Fi_Type` varchar(30) NOT NULL,
  `Fi_FoodIntake` double NOT NULL,
  `F_ReleasingTime` varchar(30) NOT NULL,
  `F_Reproduction` varchar(30) NOT NULL,
  `F_Num` int(10) NOT NULL,
  `Fishing Time` varchar(30) NOT NULL,
  `PondNo` int(10) NOT NULL,
  PRIMARY KEY (`Fi_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=704 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fishery`
--

INSERT INTO `fishery` (`Fi_ID`, `Br_ID`, `Fi_Type`, `Fi_FoodIntake`, `F_ReleasingTime`, `F_Reproduction`, `F_Num`, `Fishing Time`, `PondNo`) VALUES
(701, 1, 'Rui', 10, 'Mid Jan', 'Mid Sept', 200, 'Mid Dec', 912),
(702, 1, 'Koi', 10, 'Mid July', 'Mid Jan', 150, 'Mid Feb', 912),
(703, 1, 'Mrigel', 10, 'Mid Mar', 'Mid Apr', 100, 'Mid Dec', 912);

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
CREATE TABLE IF NOT EXISTS `food` (
  `Fo_ID` int(10) NOT NULL,
  `Fo_Name` varchar(30) NOT NULL,
  `Fo_Type` varchar(30) NOT NULL,
  `Fo_For` varchar(30) NOT NULL,
  `Price` double(15,2) NOT NULL,
  `Br_ID` int(10) NOT NULL,
  PRIMARY KEY (`Fo_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`Fo_ID`, `Fo_Name`, `Fo_Type`, `Fo_For`, `Price`, `Br_ID`) VALUES
(1301, 'Rice Bran', 'Solid', 'Cattle', 10000.00, 1),
(1302, 'Supplement', 'Solid', 'Poultry', 15000.00, 1),
(1303, 'Husk', 'Powder', 'Fishery', 7000.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `goat`
--

DROP TABLE IF EXISTS `goat`;
CREATE TABLE IF NOT EXISTS `goat` (
  `G_ID` int(10) NOT NULL AUTO_INCREMENT,
  `Br_ID` int(10) NOT NULL,
  `G_Type` varchar(30) NOT NULL,
  `G_Gender` varchar(30) NOT NULL,
  `G_Color` varchar(30) NOT NULL,
  `G_MilkProduction` double NOT NULL,
  `G_Weight` double NOT NULL,
  `G_Status` varchar(30) NOT NULL,
  `G_Shed_No` int(10) NOT NULL,
  `G_FoodIntake` double NOT NULL,
  PRIMARY KEY (`G_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=1002 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goat`
--

INSERT INTO `goat` (`G_ID`, `Br_ID`, `G_Type`, `G_Gender`, `G_Color`, `G_MilkProduction`, `G_Weight`, `G_Status`, `G_Shed_No`, `G_FoodIntake`) VALUES
(1001, 1, 'Black Bengal', 'Male', 'Black', 0, 24, '4H', 913, 6);

-- --------------------------------------------------------

--
-- Table structure for table `hasequipment`
--

DROP TABLE IF EXISTS `hasequipment`;
CREATE TABLE IF NOT EXISTS `hasequipment` (
  `Has_ID` int(10) NOT NULL,
  `Br_ID` int(10) NOT NULL,
  PRIMARY KEY (`Has_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=403 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hasequipment`
--

INSERT INTO `hasequipment` (`Has_ID`, `Br_ID`) VALUES
(401, 1),
(402, 1),
(1301, 1),
(1302, 1),
(1303, 1);

-- --------------------------------------------------------

--
-- Table structure for table `log in`
--

DROP TABLE IF EXISTS `log in`;
CREATE TABLE IF NOT EXISTS `log in` (
  `Login_ID` int(10) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `Category` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  PRIMARY KEY (`Login_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log in`
--

INSERT INTO `log in` (`Login_ID`, `UserName`, `Category`, `Password`) VALUES
(501, 'Rifa', 'Admin', 'Clash'),
(502, 'Priyo', 'Buyer', 'Contest'),
(503, 'Kashfia', 'Buyer', 'Clone');

-- --------------------------------------------------------

--
-- Table structure for table `monitoring`
--

DROP TABLE IF EXISTS `monitoring`;
CREATE TABLE IF NOT EXISTS `monitoring` (
  `M_ID` int(10) NOT NULL,
  `Br_ID` int(10) NOT NULL,
  `Humidity` int(10) DEFAULT NULL,
  `Temperature` varchar(10) NOT NULL,
  `WaterQuality` int(10) DEFAULT NULL,
  `Type` varchar(20) NOT NULL,
  PRIMARY KEY (`M_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monitoring`
--

INSERT INTO `monitoring` (`M_ID`, `Br_ID`, `Humidity`, `Temperature`, `WaterQuality`, `Type`) VALUES
(901, 1, 1, '20 C', 10, 'Cow Shed'),
(905, 1, 2, '20 C', 8, 'Chicken  Shed'),
(913, 1, NULL, '35 C', 17, 'Fishery'),
(910, 1, 6, '20 C', 9, 'Duck Shed'),
(902, 1, 6, '25 C', 3, 'Cow Shed');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
