-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-05-2020 a las 23:16:25
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_sistema_peliculas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquiler`
--

CREATE TABLE `alquiler` (
  `idalquiler` int(8) NOT NULL,
  `idcliente` int(8) NOT NULL,
  `idpelicula` int(8) NOT NULL,
  `fechaprestamo` date NOT NULL,
  `fechadevolucion` date NOT NULL,
  `valor` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alquiler`
--

INSERT INTO `alquiler` (`idalquiler`, `idcliente`, `idpelicula`, `fechaprestamo`, `fechadevolucion`, `valor`) VALUES
(19, 1, 4, '2020-04-10', '2020-04-27', '28282'),
(20, 2, 4, '2020-04-27', '2020-06-18', '46364'),
(22, 2, 8, '2020-04-27', '2020-05-27', '23232'),
(23, 4, 4, '2020-04-27', '2020-08-27', '212'),
(32, 4, 6, '2020-04-28', '2020-05-28', '88'),
(33, 2, 6, '2020-04-29', '2020-05-14', '15'),
(35, 6, 6, '2020-05-29', '2020-08-19', '1212'),
(36, 6, 6, '2020-05-02', '2020-07-10', '2323');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idcliente` int(8) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(8) NOT NULL,
  `dui` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idcliente`, `nombre`, `direccion`, `telefono`, `dui`) VALUES
(1, 'Juan', 'usulutan', '72738420', '00641662-4'),
(2, 'Melissa', 'Usulutan', '08929302', '00236216-6'),
(4, 'Michael Rodriguez', 'El Trancito', '01010202', '3829102-9'),
(6, 'Alexia', 'Santa Elena', '7734-222', '00676216-4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `idpelicula` int(8) NOT NULL,
  `descripcion` text NOT NULL,
  `sinopsis` varchar(800) NOT NULL,
  `genero` varchar(100) NOT NULL,
  `duracion` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`idpelicula`, `descripcion`, `sinopsis`, `genero`, `duracion`) VALUES
(4, 'Iron Man: el hombre de hierro', ' Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.', 'accion/cine de ciencia ficcion ', '02:30'),
(6, 'Fragmentado', 'Kevin, un hombre con 23 personalidades, secuestra a 3 chicas jóvenes y las mantiene retenidas en un sótano. A medida que una de sus personalidades va imponiéndose al resto, la vida de las chicas, y la del propio Kevin, peligra cada vez más.', 'suspenso / terror', '02:45'),
(8, 'Ouija: el origen del mal', 'En Los Ángeles de 1967, una madre viuda y sus dos hijas añaden un nuevo truco para reforzar su estafador negocio de espiritismo y sin darse cuenta invitan a un espíritu maligno en su casa. Cuando la hija menor es poseída por el implacable espíritu, esta pequeña familia deberá enfrentar a temores impensables para salvarla y enviar de regreso a la perversa entidad.', ' Terror / Suspenso', '02:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD PRIMARY KEY (`idalquiler`),
  ADD KEY `idcliente` (`idcliente`,`idpelicula`),
  ADD KEY `idpelicula` (`idpelicula`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idcliente`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`idpelicula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  MODIFY `idalquiler` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idcliente` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `idpelicula` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD CONSTRAINT `alquiler_ibfk_1` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `alquiler_ibfk_2` FOREIGN KEY (`idpelicula`) REFERENCES `peliculas` (`idpelicula`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
