-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2019 at 02:14 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` text,
  `number` text,
  `city` text,
  `fess` text,
  `nationality` text,
  `national` text,
  `passport_number` text,
  `licence_number` text,
  `language` text,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `number`, `city`, `fess`, `nationality`, `national`, `passport_number`, `licence_number`, `language`, `start_date`, `end_date`, `status`, `created_at`, `updated_at`) VALUES
(8, 'OmarTarek', '01123656796', 'Cairo', '201459878442122', 'Egypt', '201798214245232545', '45121125544545454', 'A125464654564656', 'English ', '2019-09-09 22:00:00', '2019-09-10 22:00:00', 1, NULL, NULL),
(13, 'Ahmed Mohamed', '010025695871', 'Aswan', '02559658742', 'Egypt', '207896523365598554', '54545455445', 'A1265465455454545', 'English ,Arabic', '2019-09-10 22:00:00', '2019-09-11 22:00:00', 1, NULL, NULL),
(14, 'Salah', '0125698574578', 'Alexandria', '26985475255', 'Egypt', '1256441251646465', '54545455445', 'A125464654564656', 'English ,Arabic,German', '2019-09-11 22:00:00', '2019-09-11 22:00:00', 1, NULL, NULL),
(15, 'Yasser Khaled', '0125898532155', 'Bani Sweif', '25654564546', 'Egypt', '545445454554488445', '54545455445', 'A125464654564656', 'English ,Arabic,French', '2019-09-27 22:00:00', '2019-09-10 22:00:00', 1, NULL, NULL),
(16, 'TAREK', '01123656796', 'Cairo', '6515454545454', 'Egypt', '5454645454546546', '54545455445', 'A125464654564656', 'English ,Arabic,German', '2019-09-10 22:00:00', '2019-09-11 22:00:00', 1, NULL, NULL),
(17, 'admin', '012345678910', 'Alexandria', '1554455487814414145', 'Egypt', '5545454545465656', '54545455445', 'A125464654564656', 'English ,Arabic,French', '2019-09-10 22:00:00', '2019-09-11 22:00:00', 1, NULL, NULL),
(18, 'Mahmoud Maher', '01236579665558', 'Alexandria', '216545445564546', 'Egypt', '234564654546546', '54545455445', 'A125464654564656', 'English ', '2019-09-10 22:00:00', '2019-09-11 22:00:00', 1, NULL, NULL),
(19, 'Silvana', '012365796854', 'Bani Sweif', '211554545465465', 'Egypt', '554545448561232332', '54545455445', 'A125464654564656', 'English ,Arabic,German', '2019-09-11 22:00:00', '2019-09-12 22:00:00', 1, NULL, NULL),
(20, 'Habib', '0123657965855', 'Giza', '12236554889', 'Egypt', '5154654546546546', '54545455445', 'A125464654564656', 'Arabic', '2019-09-20 22:00:00', '2019-09-18 22:00:00', 1, NULL, NULL),
(21, 'Esraa Ahmed', '0123656796584', 'Cairo', '1325468487989', 'Germany', '65546545454546', '54545455445', 'A125464654564656', 'English ,Arabic,German', '2019-09-19 22:00:00', '2019-09-11 22:00:00', 1, NULL, NULL),
(22, 'Omar Tarek', '01123656796', 'Cairo', '126598785411221', 'Egypt', '236565987845122154', '54545455445', 'A125464654564656', 'English ,Arabic,German', '2019-09-11 22:00:00', '2019-09-13 22:00:00', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin@gmail.com', '$2a$10$BVkZY7MrbNXg/sVQ4ix.RebKZiA7OUNRZgv1DsqBrcJUr/yGhLw8y');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
