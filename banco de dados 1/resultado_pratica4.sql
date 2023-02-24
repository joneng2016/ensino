DROP DATABASE IF EXISTS db_food_company;
CREATE DATABASE db_food_company CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE db_food_company;

CREATE TABLE IF NOT EXISTS empresa (
    id_empresa INT,
    nome VARCHAR(255),
    endereco VARCHAR(255)
)  CHARSET=utf8 COLLATE=utf8_danish_ci;

CREATE TABLE IF NOT EXISTS produto (
    id_produto INT,
    nome_produto VARCHAR(255),
    quantidade_produto INT,
    peso FLOAT,
    id_empresa INT
) CHARSET=utf8 COLLATE=utf8_danish_ci;

INSERT INTO
    empresa
    (id_empresa, nome, endereco)
VALUES
    (1, 'nescau', 'Endereço');

INSERT INTO
    produto
    (id_produto, nome_produto, quantidade_produto, peso, id_empresa)
VALUES
    (1, 'achocolatado', 30, 200, 1);
