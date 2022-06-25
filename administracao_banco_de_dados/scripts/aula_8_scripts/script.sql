CREATE DATABASE aula8;

USE aula8;

CREATE TABLE IF NOT EXISTS editora (
	editora_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	endereco VARCHAR(255) NOT NULL
);

SHOW INDEX FROM editora;

SELECT * FROM editora;

INSERT INTO 
	editora (nome,endereco) 
VALUES
	('Abril', 'Rua Abcd 111'),
	('Madras','Rua Dcb 222'),
	('Globo', 'Rua Xsg 222');
	

EXPLAIN SELECT * FROM editora WHERE nome = 'Globo';

CREATE INDEX idx_editora ON editora(nome);

SHOW INDEX FROM editora;

EXPLAIN SELECT * FROM editora WHERE nome = 'Globo';