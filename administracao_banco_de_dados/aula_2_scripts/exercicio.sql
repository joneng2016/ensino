CREATE DATABASE IF NOT EXISTS pet;

USE pet;

DROP TABLE IF EXISTS animal;

CREATE TABLE IF NOT EXISTS animal (
    id_pet INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo ENUM('cachorro', 'gato') NOT NULL DEFAULT 'cachorro',
    nome VARCHAR(100),
    record_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO 
    animal (tipo, nome) 
VALUES 
    ('cachorro' , 'loirinho'),
    ('gato', 'frajola');


SELECT * FROM animal;