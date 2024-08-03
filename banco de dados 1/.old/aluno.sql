DROP DATABASE IF EXISTS pratica_12;
CREATE DATABASE pratica_12;
USE pratica_12;
DROP TABLE IF EXISTS cargo;
DROP TABLE IF EXISTS funcionario;

CREATE TABLE cargo
(
    id_cargo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_cargo VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE funcionario 
(
    id_produto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL,
    empresa_fabrciante VARCHAR(100) NOT NULL,
    id_cargo INT NOT NULL,
    FOREIGN KEY id_cargo REFERENCES cargo (id_cargo)
);
/*
INSERT INTO cargo (nome_cargo, descricao)
VALUES ('bananeiro1', 'faz banana1');
VALUES ('bananeiro2', 'faz banana2');
VALUES ('bananeiro3', 'faz banana3');
VALUES ('bananeiro4', 'faz banana4');
VALUES ('bananeiro5', 'faz banana5');
