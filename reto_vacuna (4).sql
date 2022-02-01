-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2022 a las 09:51:19
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

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

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectAllPacientes` ()  SELECT * FROM pacientes$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectAllVacunas` ()  SELECT * FROM vacuna$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectCitasByPaciente` (IN `cod_paciente` INT(11))  SELECT * FROM citas WHERE citas.Cod_paciente=cod_paciente$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectHistorialByPaciente` (IN `cod_paciente` INT(10))  SELECT * FROM historial WHERE historial.Cod_paciente=cod_paciente$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administra`
--

CREATE TABLE `administra` (
  `Cod_centro` int(10) NOT NULL,
  `Cod_usuario` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administra`
--

INSERT INTO `administra` (`Cod_centro`, `Cod_usuario`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(4, 1),
(4, 2),
(4, 3),
(5, 1),
(6, 1),
(6, 2),
(6, 3),
(19, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro`
--

CREATE TABLE `centro` (
  `idCentro` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `img` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `centro`
--

INSERT INTO `centro` (`idCentro`, `Nombre`, `img`) VALUES
(1, 'Hospital Gernika-Lumo', 'hospitalgernika.jpg'),
(2, 'Hospital Eibar', 'hospitaleibar.jfif'),
(3, 'Hospital Galdakao', 'hospitalgaldakao.jpg'),
(4, 'Hospital Leza', 'hospitalleza.jpg'),
(5, 'Hospital Zumarraga', 'hospitalzumarraga.jpg'),
(6, 'Centro Salud Durango', 'centrosaluddurango.jpg'),
(19, 'corporacion C', 'Corporacion_capsula.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `idCitas` int(11) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Cod_paciente` int(11) NOT NULL,
  `Cod_vacuna` int(10) NOT NULL,
  `Cod_centro` int(10) NOT NULL,
  `Cod_anulacion` int(10) NOT NULL,
  `Numero_dosis` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`idCitas`, `Fecha`, `Cod_paciente`, `Cod_vacuna`, `Cod_centro`, `Cod_anulacion`, `Numero_dosis`) VALUES
(58, '2022-02-03 09:25:00', 2, 4, 4, 154373, 0),
(62, '2023-11-01 09:25:00', 1, 1, 4, 568652, 0);

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
-- Estructura de tabla para la tabla `datoscovi`
--

CREATE TABLE `datoscovi` (
  `cod_provincia` int(11) NOT NULL,
  `cod_mes` int(11) NOT NULL,
  `positivos` int(11) NOT NULL,
  `fallecidos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `datoscovi`
--

INSERT INTO `datoscovi` (`cod_provincia`, `cod_mes`, `positivos`, `fallecidos`) VALUES
(1, 1, 1000, 120),
(1, 2, 871, 50),
(1, 3, 552, 100),
(1, 4, 661, 200),
(1, 5, 431, 20),
(1, 6, 550, 88),
(1, 7, 620, 34),
(1, 8, 700, 91),
(1, 9, 759, 107),
(1, 10, 639, 200),
(1, 11, 721, 300),
(1, 12, 809, 500),
(2, 1, 800, 100),
(2, 2, 700, 75),
(2, 3, 476, 150),
(2, 4, 543, 220),
(2, 5, 675, 120),
(2, 6, 411, 58),
(2, 7, 700, 74),
(2, 8, 721, 121),
(2, 9, 659, 20),
(2, 10, 539, 190),
(2, 11, 421, 300),
(2, 12, 709, 400),
(3, 1, 502, 150),
(3, 2, 228, 21),
(3, 3, 276, 50),
(3, 4, 443, 320),
(3, 5, 575, 220),
(3, 6, 311, 158),
(3, 7, 500, 134),
(3, 8, 421, 221),
(3, 9, 659, 420),
(3, 10, 739, 190),
(3, 11, 821, 20),
(3, 12, 409, 100);

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
  `Cod_vacuna` int(1) NOT NULL,
  `Numero_dosis` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`idHistorial`, `Fecha`, `Cod_paciente`, `Cod_vacuna`, `Numero_dosis`) VALUES
(10, '2022-01-28 12:55:00', 1, 3, 1),
(11, '2022-11-29 15:25:00', 1, 2, 2),
(18, '2022-02-03 09:40:00', 8, 2, 1);

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
-- Estructura de tabla para la tabla `meses`
--

CREATE TABLE `meses` (
  `id_mes` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `meses`
--

INSERT INTO `meses` (`id_mes`, `nombre`) VALUES
(1, 'Enero'),
(2, 'Febrero'),
(3, 'Marzo'),
(4, 'Abril'),
(5, 'Mayo'),
(6, 'Junio'),
(7, 'Julio'),
(8, 'Agosto'),
(9, 'Septiembre'),
(10, 'Octubre'),
(11, 'Noviembre'),
(12, 'Diciembre');

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
(18, 'Elorrio', 6),
(27, 'RR', 19),
(28, 'World Tournament', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `idPaciente` int(11) NOT NULL,
  `TIS` int(20) NOT NULL,
  `Fecha_pos` date DEFAULT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Apellidos2` varchar(250) DEFAULT NULL,
  `Fecha_nac` date NOT NULL,
  `Cod_municipio` int(10) NOT NULL,
  `DNI` varchar(9) NOT NULL,
  `img` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`idPaciente`, `TIS`, `Fecha_pos`, `Nombre`, `Apellidos`, `Apellidos2`, `Fecha_nac`, `Cod_municipio`, `DNI`, `img`) VALUES
(1, 12345678, '2022-01-12', 'Antonio', 'Banderas', 'Domínguez ', '1990-01-12', 11, '12346798B', 'antoniobanderas.jpg'),
(2, 12345672, NULL, 'Felipe', 'Gonzalez', '', '2022-01-23', 12, '12345678A', NULL),
(3, 64741709, '0000-00-00', 'aa', 'aa', '', '2022-01-06', 12, 'aa', ''),
(4, 2683402, NULL, 'bb', 'bb', '', '2022-01-05', 14, 'bb', ''),
(5, 5212904, NULL, 'manolo', 'pepinote', '', '2022-01-27', 3, '12458A', 'españita.png'),
(6, 81219342, NULL, 'Eneko', 'arroyo', 'aa', '2000-01-28', 1, '123456Z', ''),
(7, 89564901, NULL, 'prueba', 'sabado', 'domingo', '2022-01-29', 15, '123', 'centrosaluddurango.jpg'),
(8, 94527199, NULL, 'gogeta', 'ssj', 'blue', '2022-01-12', 2, '123456', 'placeholderusuario.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id_provincia` int(1) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id_provincia`, `nombre`) VALUES
(1, 'Bizkaia'),
(2, 'Gipuzkoa'),
(3, 'Araba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Contrasena` varchar(250) NOT NULL,
  `Categoria` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `Nombre`, `Contrasena`, `Categoria`) VALUES
(1, 'paco', '$2y$10$dOJtuByY155OuP.YSxiaQOMhONNKCywhDZc2l5ZdhdlF5sNVpm9qS', 'AdminGeneral'),
(2, 'felipe', '$2y$10$dOJtuByY155OuP.YSxiaQOMhONNKCywhDZc2l5ZdhdlF5sNVpm9qS', 'AdminCentro'),
(3, 'antonio', '$2y$10$9iESB8OLfRpWv/gJAqpuIuMzQXafX5q52y2sAASMO7bYxDA2Ud2By', 'AdminCentro'),
(4, 'pablo', '$2y$10$VWQsEo3D8u.3rInXkLDFDe4QgCp12MCtpNP4H5zy1bEen4cM/EInq', 'AdminCentro'),
(5, 'bulma', '$2y$10$UGz0XYXqHf4ZVEKCfXE6ieg5C7hSYcjf/QxefHEvA.CGIy1raK01e', 'AdminCentro');

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
-- Indices de la tabla `administra`
--
ALTER TABLE `administra`
  ADD PRIMARY KEY (`Cod_centro`,`Cod_usuario`),
  ADD KEY `Cod_centro` (`Cod_centro`),
  ADD KEY `Cod_usuario` (`Cod_usuario`);

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
-- Indices de la tabla `datoscovi`
--
ALTER TABLE `datoscovi`
  ADD PRIMARY KEY (`cod_provincia`,`cod_mes`),
  ADD KEY `cod_provincia` (`cod_provincia`),
  ADD KEY `cod_mes` (`cod_mes`);

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
  ADD KEY `Cod_usuario` (`Cod_paciente`),
  ADD KEY `Cod_vacuna` (`Cod_vacuna`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD KEY `Cod_dia` (`Cod_dia`,`Cod_centro`),
  ADD KEY `Cod_centro` (`Cod_centro`);

--
-- Indices de la tabla `meses`
--
ALTER TABLE `meses`
  ADD PRIMARY KEY (`id_mes`);

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
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id_provincia`);

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
  MODIFY `idCentro` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `idCitas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `dias`
--
ALTER TABLE `dias`
  MODIFY `idDias` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `idHistorial` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `meses`
--
ALTER TABLE `meses`
  MODIFY `id_mes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `idMunicipio` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id_provincia` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vacuna`
--
ALTER TABLE `vacuna`
  MODIFY `idVacuna` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administra`
--
ALTER TABLE `administra`
  ADD CONSTRAINT `administra_ibfk_1` FOREIGN KEY (`Cod_usuario`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `administra_ibfk_2` FOREIGN KEY (`Cod_centro`) REFERENCES `centro` (`idCentro`);

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`Cod_paciente`) REFERENCES `pacientes` (`idPaciente`),
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`Cod_vacuna`) REFERENCES `vacuna` (`idVacuna`),
  ADD CONSTRAINT `citas_ibfk_3` FOREIGN KEY (`Cod_centro`) REFERENCES `centro` (`idCentro`);

--
-- Filtros para la tabla `datoscovi`
--
ALTER TABLE `datoscovi`
  ADD CONSTRAINT `datoscovi_ibfk_1` FOREIGN KEY (`cod_provincia`) REFERENCES `provincias` (`id_provincia`),
  ADD CONSTRAINT `datoscovi_ibfk_2` FOREIGN KEY (`cod_mes`) REFERENCES `meses` (`id_mes`);

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`Cod_paciente`) REFERENCES `pacientes` (`idPaciente`),
  ADD CONSTRAINT `historial_ibfk_2` FOREIGN KEY (`Cod_vacuna`) REFERENCES `vacuna` (`idVacuna`);

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
