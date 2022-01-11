-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-01-2022 a las 09:25:57
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reto_vacuna`
--
CREATE DATABASE IF NOT EXISTS `reto_vacuna` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `reto_vacuna`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro`
--

CREATE TABLE `centro` (
  `idCentro` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `centro`
--

INSERT INTO `centro` (`idCentro`, `Nombre`) VALUES
(1, 'Hospital Gernika-Lumo'),
(2, 'Hospital Eibar'),
(3, 'Hospital Galdakao'),
(4, 'Hospital Leza'),
(5, 'Hospital Zumarraga'),
(6, 'Centro Salud Durango');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `idCitas` int(11) NOT NULL,
  `Fecha` int(11) NOT NULL,
  `Cod_paciente` int(11) NOT NULL,
  `Cod_vacuna` int(10) NOT NULL,
  `Cod_centro` int(10) NOT NULL,
  `Cod_anulacion` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `condiciones`
--

CREATE TABLE `condiciones` (
  `DosisHasta11` int(11) NOT NULL,
  `DosisDesde11` int(11) NOT NULL,
  `TiempoEntreDosis/PCR` int(11) NOT NULL,
  `Otros` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `condiciones`
--

INSERT INTO `condiciones` (`DosisHasta11`, `DosisDesde11`, `TiempoEntreDosis/PCR`, `Otros`) VALUES
(1, 3, 6, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias`
--

CREATE TABLE `dias` (
  `idDias` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dias`
--

INSERT INTO `dias` (`idDias`, `Nombre`) VALUES
(1, 'Lunes'),
(2, 'Martes'),
(3, 'Miércoles'),
(4, 'Jueves'),
(5, 'Viernes'),
(6, 'Sabado'),
(7, 'Domingo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `idHistorial` int(10) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Cod_paciente` int(10) NOT NULL,
  `Tipo` varchar(50) NOT NULL,
  `Numero_dosis` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `Cod_dia` int(10) NOT NULL,
  `Cod_centro` int(10) NOT NULL,
  `Hora_apertura` time NOT NULL,
  `Hora_cierre` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`Cod_dia`, `Cod_centro`, `Hora_apertura`, `Hora_cierre`) VALUES
(1, 1, '08:30:00', '15:00:00'),
(1, 2, '08:55:22', '18:55:22'),
(1, 3, '08:55:22', '14:55:22'),
(1, 4, '08:55:22', '20:55:22'),
(1, 5, '08:55:22', '23:55:22'),
(1, 6, '08:55:22', '13:55:22'),
(2, 1, '08:55:22', '19:55:22'),
(2, 2, '08:55:22', '16:55:22'),
(2, 3, '08:55:22', '20:55:22'),
(2, 4, '08:55:22', '18:55:22'),
(2, 5, '08:55:22', '21:55:22'),
(2, 6, '08:55:22', '16:55:22'),
(3, 1, '08:55:22', '19:55:22'),
(3, 2, '08:55:22', '16:55:22'),
(3, 3, '08:55:22', '20:55:22'),
(3, 4, '08:55:22', '13:55:22'),
(3, 5, '08:55:22', '18:55:22'),
(3, 6, '08:55:22', '13:55:22'),
(4, 1, '08:55:22', '20:55:22'),
(4, 2, '08:55:22', '19:55:22'),
(4, 3, '08:55:22', '17:55:22'),
(4, 4, '08:55:22', '23:55:22'),
(4, 5, '08:55:22', '18:55:22'),
(4, 6, '08:55:22', '15:55:22'),
(5, 1, '08:55:22', '18:55:22'),
(5, 2, '08:55:22', '17:55:22'),
(5, 3, '08:55:22', '16:55:22'),
(5, 4, '08:55:22', '21:55:22'),
(5, 5, '08:55:22', '22:55:22'),
(5, 6, '08:55:22', '15:55:22'),
(6, 1, '08:55:22', '19:55:22'),
(6, 2, '08:55:22', '18:55:22'),
(6, 3, '08:55:22', '17:55:22'),
(6, 4, '08:55:22', '19:55:22'),
(6, 5, '08:55:22', '15:55:22'),
(6, 6, '08:55:22', '12:55:22'),
(7, 1, '08:55:22', '13:55:22'),
(7, 2, '08:55:22', '13:55:22'),
(7, 3, '08:55:22', '13:55:22'),
(7, 4, '08:55:22', '12:55:22'),
(7, 5, '08:55:22', '14:55:22'),
(7, 6, '08:55:22', '12:55:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `idMunicipio` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Cod_centro` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`idMunicipio`, `Nombre`, `Cod_centro`) VALUES
(1, 'Gernika', 1),
(2, 'Amorebieta-Etxano', 1),
(3, 'Bermeo', 1),
(4, 'Eibar', 2),
(5, 'Zaldibar', 2),
(6, 'Elgoibar', 2),
(7, 'Galdakao', 3),
(8, 'Usansolo', 3),
(9, 'Arrigorriaga', 3),
(10, 'Leza', 4),
(11, 'Samaniego', 4),
(12, 'Navaridas', 4),
(13, 'Zumarraga', 5),
(14, 'Antzuola', 5),
(15, 'Vergara', 5),
(16, 'Durango', 6),
(17, 'Ermua', 6),
(18, 'Elorrio', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `idPaciente` int(11) NOT NULL,
  `TIS` int(20) NOT NULL,
  `Fecha_pos` date NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Fecha_nac` date NOT NULL,
  `Cod_municipio` int(10) NOT NULL,
  `DNI` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Contrasena` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `Nombre`, `Contrasena`) VALUES
(1, 'Admin', '$2y$10$dOJtuByY155OuP.YSxiaQOMhONNKCywhDZc2l5ZdhdlF5sNVpm9qS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacuna`
--

CREATE TABLE `vacuna` (
  `idVacuna` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Numero` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vacuna`
--

INSERT INTO `vacuna` (`idVacuna`, `Nombre`, `Numero`) VALUES
(1, 'Pfizer-BioNTech', 2),
(2, 'Moderna', 2),
(3, 'Janssen de Jhonson & Jhonson', 2),
(4, 'AstraZeneca', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centro`
--
ALTER TABLE `centro`
  ADD PRIMARY KEY (`idCentro`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idCitas`),
  ADD KEY `idCitas` (`idCitas`,`Fecha`,`Cod_paciente`,`Cod_vacuna`,`Cod_centro`,`Cod_anulacion`),
  ADD KEY `Cod_paciente` (`Cod_paciente`),
  ADD KEY `Cod_vacuna` (`Cod_vacuna`),
  ADD KEY `Cod_centro` (`Cod_centro`);

--
-- Indices de la tabla `dias`
--
ALTER TABLE `dias`
  ADD PRIMARY KEY (`idDias`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`idHistorial`),
  ADD KEY `Cod_usuario` (`Cod_paciente`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD KEY `Cod_dia` (`Cod_dia`,`Cod_centro`),
  ADD KEY `Cod_centro` (`Cod_centro`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`idMunicipio`),
  ADD KEY `Cod_centro` (`Cod_centro`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`idPaciente`),
  ADD UNIQUE KEY `TIS` (`TIS`),
  ADD KEY `Cod_municipio` (`Cod_municipio`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `vacuna`
--
ALTER TABLE `vacuna`
  ADD PRIMARY KEY (`idVacuna`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `centro`
--
ALTER TABLE `centro`
  MODIFY `idCentro` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `idCitas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `dias`
--
ALTER TABLE `dias`
  MODIFY `idDias` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `idHistorial` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `idMunicipio` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vacuna`
--
ALTER TABLE `vacuna`
  MODIFY `idVacuna` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`Cod_paciente`) REFERENCES `pacientes` (`idPaciente`),
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`Cod_vacuna`) REFERENCES `vacuna` (`idVacuna`),
  ADD CONSTRAINT `citas_ibfk_3` FOREIGN KEY (`Cod_centro`) REFERENCES `centro` (`idCentro`);

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`Cod_paciente`) REFERENCES `pacientes` (`idPaciente`);

--
-- Filtros para la tabla `horario`
--
ALTER TABLE `horario`
  ADD CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`Cod_centro`) REFERENCES `centro` (`idCentro`),
  ADD CONSTRAINT `horario_ibfk_2` FOREIGN KEY (`Cod_dia`) REFERENCES `dias` (`idDias`);

--
-- Filtros para la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD CONSTRAINT `municipio_ibfk_1` FOREIGN KEY (`Cod_centro`) REFERENCES `centro` (`idCentro`);

--
-- Filtros para la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD CONSTRAINT `pacientes_ibfk_1` FOREIGN KEY (`Cod_municipio`) REFERENCES `municipio` (`idMunicipio`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
