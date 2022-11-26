-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 24/11/2022 às 20h20min
-- Versão do Servidor: 8.0.29
-- Versão do PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `tcc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `genero` varchar(200) NOT NULL,
  `sinopse` varchar(550) NOT NULL,
  `autor` varchar(200) NOT NULL,
  `comentario` varchar(200) NOT NULL,
  `classificacao` int NOT NULL,
  `opcao` varchar(7) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `posts`
--

INSERT INTO `posts` (`id`, `titulo`, `genero`, `sinopse`, `autor`, `comentario`, `classificacao`, `opcao`, `createdAt`, `updatedAt`) VALUES
(2, 'Corte de Rosas e Espinhos', 'Fantasia e Romance', 'Ela roubou uma vida. Agora deve pagar com o coração. Em Corte de espinhos e rosas, livro que da início a uma das séries mais queridas pelo público, acompanhe as aventuras de Feyre pelo perigoso e deslumbrante mundo das fadas.', 'Sarah J Maas', 'Livro intacto, história muito boa', 16, 'Troca ', '2022-11-24 04:41:13', '2022-11-24 04:41:13'),
(3, 'Punk 57', 'Dark Romance', 'Punk 57 é sobre o Misha e a Ryen, que estudam em colégios diferentes e trocam cartas há 7 anos devido a um projeto dos professores. Os dois se encontram em uma festa, mas só o Misha reconhece a amiga (ela nunca viu nenhuma foto dele).', 'Penelope Douglas', 'Nunca lido, intocado', 18, 'Doação ', '2022-11-24 04:46:01', '2022-11-24 04:46:01'),
(15, 's', 'w', 'a', 'a', 'a', 2, 'a', '2022-11-24 19:15:00', '2022-11-24 19:15:00'),
(16, 'a', 'a', 'a', 'a', 'a', 12, 'a', '2022-11-24 19:15:25', '2022-11-24 19:15:25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220615143057-create-user.js'),
('20220919180142-create-gente.js'),
('20220919181341-create-usuario.js'),
('20221107190938-create-posts.js'),
('20221107191614-create-posts.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `telefone` bigint NOT NULL,
  `email` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `senha`, `telefone`, `email`, `createdAt`, `updatedAt`) VALUES
(2, 'Yasmin Michels', 'lalala', 48999703633, 'yamichels@gmail.com', '2022-11-24 02:29:26', '2022-11-24 02:29:26'),
(3, 'Maria', '123', 48999703633, 'mari@gmail.com', '2022-11-24 11:19:31', '2022-11-24 11:19:31'),
(4, 'Jao', 'lalala', 48999703633, 'aaaa@gmail.com', '2022-11-24 18:42:28', '2022-11-24 18:42:28'),
(5, 'dani', '123', 11111, 'dani@gmail.com', '2022-11-24 19:16:58', '2022-11-24 19:16:58');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
