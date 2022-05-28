DROP IF EXISTS aula_4;
CREATE DATABASE IF NOT EXISTS aula_4 CHARACTER SET utf8 COLLATE utf8_general_ci;
USE aula_4;
DROP TABLE IF EXISTS time_futebol;

SELECT 'Criar tabela time_futebol se não existe' AS 'PRINT DADO';

CREATE TABLE IF NOT EXISTS time_futebol (
    id_time_futebol SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome_time VARCHAR(255) NOT NULL,
    gols INTEGER NOT NULL,
    record_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

SELECT 'Estrutura da tabela' AS 'PRINT DADO';

DESCRIBE time_futebol;

SELECT 'Realizar o INSERT na tabela time_futebol' AS 'PRINT DADO';

INSERT INTO 
    time_futebol 
    (
        nome_time,
        gols
    )
VALUES
    (
        'Corinthians',
        4
    ),
    (
        'Atlético',
        6
    ),
    (
        'Coxa',
        6
    ),
    (
        'São Paulo',
        4
    );


SELECT * FROM time_futebol;


SELECT 'Alter table insert column' AS 'PRINT DADO';

ALTER TABLE
    time_futebol
ADD COLUMN observacao VARCHAR(255) AFTER gols,     
ADD COLUMN ponto_campeonato INTEGER NOT NULL DEFAULT 0 AFTER gols,
ADD COLUMN campeonato enum('brasileiro','libertadores','paranaense','paulista') NOT NULL DEFAULT 'brasileiro' AFTER gols;

SELECT * FROM time_futebol;

SELECT 'Alter table DROP Column column' AS 'PRINT DADO';

ALTER TABLE
    time_futebol
DROP COLUMN observacao;  

DESCRIBE time_futebol;
SELECT * FROM time_futebol;


SELECT 'Modifica uma Coluna' AS 'PRINT DADO';

UPDATE 
    time_futebol 
SET 
    ponto_campeonato = 25;

ALTER TABLE
    time_futebol
MODIFY COLUMN ponto_campeonato FLOAT;

DESCRIBE time_futebol;


UPDATE 
    time_futebol 
SET 
    ponto_campeonato = 25.2;

SELECT * FROM time_futebol;


DROP TABLE time_futebol;

SHOW TABLES;