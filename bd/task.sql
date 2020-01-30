-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-01-2020 a las 03:33:53
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `task`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(6) NOT NULL,
  `name` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `password` varchar(40) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id_admin`, `name`, `email`, `password`) VALUES
(1, 'Juan Sarabia', 'test@hotmail.com', 'test2020');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responsible`
--

CREATE TABLE `responsible` (
  `id_responsible` int(6) NOT NULL,
  `name_responsible` varchar(40) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `responsible`
--

INSERT INTO `responsible` (`id_responsible`, `name_responsible`) VALUES
(0, 'Not assigned'),
(2, 'Juan Sarabia'),
(3, 'Jhon Duque'),
(4, 'Marcela Parra'),
(5, 'Francisco Morales'),
(7, 'Roberto Barrios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `task`
--

CREATE TABLE `task` (
  `id_task` int(6) NOT NULL,
  `nameTask` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `state` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `id_responsible` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `task`
--

INSERT INTO `task` (`id_task`, `nameTask`, `state`, `id_responsible`) VALUES
(1, 'Edit folder', 'In-Progress', 3),
(2, 'Modify View', 'Completed', 2),
(3, 'Edit Image', 'In-Progress', 5),
(4, 'Modify View mobile', 'Open', 0),
(6, 'Perform tests', 'Open', 0),
(7, 'Bug', 'Completed', 2),
(8, ' Production', 'Open', 0),
(34, 'Study', 'Archived', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indices de la tabla `responsible`
--
ALTER TABLE `responsible`
  ADD PRIMARY KEY (`id_responsible`);

--
-- Indices de la tabla `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id_task`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `responsible`
--
ALTER TABLE `responsible`
  MODIFY `id_responsible` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `task`
--
ALTER TABLE `task`
  MODIFY `id_task` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
