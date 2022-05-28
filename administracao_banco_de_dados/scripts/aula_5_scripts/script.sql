CREATE DATABASE IF NOT EXISTS aula5;

USE aula5;

DROP TABLE aula5tbl;

CREATE TABLE IF NOT EXISTS aula5tbl (
    nome           VARCHAR(100),
    eu_sou_notnull VARCHAR(100) NOT NULL
);

SELECT 'NOT NULL' as '';

INSERT aula5tbl
    (nome)
VALUES
    ('meu nome');

SELECT * FROM aula5tbl;



SELECT 'UNIQUE' as '';

ALTER TABLE 
    aula5tbl
ADD COLUMN sou_unique VARCHAR(255) UNIQUE;

DESCRIBE aula5tbl;

SELECT * FROM aula5tbl;

INSERT INTO aula5tbl
    (eu_sou_notnull, sou_unique)
VALUES
    ('only not null', 'sou-unico'),
    ('only not null', 'sou-unico');



SELECT 'PRIMARY KEY - FOREIGN KEY' as '';

DROP TABLE IF tempo;

CREATE TABLE IF NOT EXISTS tempo (
    id_tempo SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome enum('sol','nublado','chuva') DEFAULT 'sol'
);

DESCRIBE tempo;


INSERT INTO tempo 
    (nome)
VALUES
    ('sol'),
    ('nublado'),
    ('chuva');


select * from tempo;


DROP TABLE IF EXISTS cidade;

CREATE TABLE IF NOT EXISTS cidade (
    id_cidade SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    temperatura FLOAT,
    id_tempo SMALLINT UNSIGNED,
    CONSTRAINT fk_tempo FOREIGN KEY (id_tempo) REFERENCES tempo(id_tempo) 
);


DESCRIBE cidade;
SELECT * FROM cidade;


SELECT 
  TABLE_NAME,COLUMN_NAME,CONSTRAINT_NAME, REFERENCED_TABLE_NAME,REFERENCED_COLUMN_NAME
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_NAME = 'tempo';


INSERT INTO 
    cidade
    (nome, temperatura, id_tempo)
VALUES 
    ('Curitiba', 5.15, 2),
    ('São Paulo', 25.5, 3),
    ('Rio de Janeiro', 40, 1),
    ('Porto Alegre', 12, 2),
    ('Fortaleza', 35.2, 1);

SELECT * FROM cidade;


INSERT INTO 
    cidade
    (nome, temperatura, id_tempo)
VALUES
    ('Cuiaba', 35.2, 10);


SELECT * FROM cidade;

DELETE FROM tempo where id_tempo = 2;


SELECT 'CHECK' as '';

CREATE TABLE IF NOT EXISTS person (
    id_person SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(255) NOT NULL,
    age int,
    city VARCHAR(255) NOT NULL, 
    CONSTRAINT chk_person check (age >= 18 AND city='Curitiba') 
);

SELECT 'Jony - 14' as '';

INSERT INTO person 
    (fname, age, city)
VALUES
    ('Jony', 14, 'Curitiba');

SELECT 'Jony - 18' as '';

INSERT INTO person 
    (fname, age, city)
VALUES
    ('Jony', 18, 'Curitiba');
    
SELECT * FROM person;