-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 31 août 2021 à 12:17
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `forthsocial`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` varchar(32) NOT NULL,
  `message` text NOT NULL,
  `userId` varchar(32) NOT NULL,
  `postId` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `message`, `userId`, `postId`) VALUES
('1', 'C\'est dommage', '9e97c286af6747edbe332e016db80586', 'b79aece63a764fd79b9e300982bcbd72');

-- --------------------------------------------------------

--
-- Structure de la table `follower`
--

DROP TABLE IF EXISTS `follower`;
CREATE TABLE IF NOT EXISTS `follower` (
  `follower_id` varchar(32) NOT NULL,
  `following_id` varchar(32) NOT NULL,
  PRIMARY KEY (`follower_id`,`following_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `likepost`
--

DROP TABLE IF EXISTS `likepost`;
CREATE TABLE IF NOT EXISTS `likepost` (
  `userId` varchar(32) NOT NULL,
  `postId` varchar(32) NOT NULL,
  PRIMARY KEY (`userId`,`postId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `likepost`
--

INSERT INTO `likepost` (`userId`, `postId`) VALUES
('9e97c286af6747edbe332e016db80586', 'b79aece63a764fd79b9e300982bcbd71'),
('b79aece63a764fd79b9e300982bcbd73', 'b79aece63a764fd79b9e300982bcbd71');

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id` varchar(32) NOT NULL,
  `description` text,
  `image` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `userId` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `description`, `image`, `createdAt`, `updateAt`, `userId`) VALUES
('b79aece63a764fd79b9e300982bcbd71', 'Vacances à la mer', NULL, '2021-08-21 12:50:54', '2021-08-21 12:50:54', 'b79aece63a764fd79b9e300982bcbd73'),
('b79aece63a764fd79b9e300982bcbd72', 'Retour à la maison :\'(', 'post/1.jpeg', '2021-08-21 12:50:54', '2021-08-22 09:33:57', 'b79aece63a764fd79b9e300982bcbd73');

-- --------------------------------------------------------

--
-- Structure de la table `relationship`
--

DROP TABLE IF EXISTS `relationship`;
CREATE TABLE IF NOT EXISTS `relationship` (
  `userId_1` varchar(32) NOT NULL,
  `userId_2` varchar(32) NOT NULL,
  PRIMARY KEY (`userId_1`,`userId_2`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Amitié entre deux utilisateurs';

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(32) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(118) NOT NULL,
  `currentCity` varchar(50) DEFAULT NULL,
  `fromCity` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `coverPicture` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_username` (`username`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `currentCity`, `fromCity`, `description`, `profilePicture`, `coverPicture`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
('b79aece63a764fd79b9e300982bcbd73', 'Jean', 'Jean@gmail.com', '$argon2id$v=19$m=35840,t=8,p=1$WicirH+nvV0RAXClQOZB7+ftmHq8rksfjhciwDRoDjc$O1Y8LN8RLVp1XlWf6EQDy0EOG4wR8mjRS+jiTzIkzQI', NULL, NULL, NULL, 'person/.jpeg', './images./dog.jpg', 0, '2021-08-16 00:55:34', '2021-08-22 09:47:48'),
('9e97c286af6747edbe332e016db80586', 'Bertaa', 'Bertaa.rolland@youhoo.fr', '$argon2id$v=19$m=35840,t=8,p=1$OmPHw2HQ8Jhj/7H1V7B+Dww7ju0bxhWGwh5x9tUD3fs$lZ0Lztl9DxSJZVB7SfPK1tp+3hijOMtORrRrFIyc5xs', NULL, NULL, NULL, 'person/2.jpeg', './images./dog.jpg', 1, '2021-08-16 00:29:47', '2021-08-22 09:31:22');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
