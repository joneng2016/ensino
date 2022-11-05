DROP DATABASE IF EXISTS db_functions;
CREATE DATABASE db_functions;
SET NAMES utf8mb4;

USE db_functions;

CREATE TABLE country (
    id_country INTEGER AUTO_INCREMENT PRIMARY KEY,
    country_name VARCHAR(255),
    continent VARCHAR(255)
);

INSERT INTO 
    country (country_name, continent) 
VALUES
    ('Brasil', 'América do Sul'),
    ('Paraguai', 'América do Sul'),
    ('Uruguai', 'América do Sul'),
    ('Peru', 'América do Sul'),
    ('Líbano', 'Asia'),
    ('Estados Unidos', 'América do Norte')
;

DELIMITER $$

CREATE FUNCTION SelectCountry() RETURNS VARCHAR(255)  
BEGIN
  RETURN "TESTE";
END $$

DELIMITER ;



SELECT SelectCountry();