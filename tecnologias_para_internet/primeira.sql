DROP DATABASE IF EXISTS car;
CREATE DATABASE car;

USE car;

DROP TABLE IF EXISTS sells;
DROP TABLE IF EXISTS buyer;
DROP TABLE IF EXISTS seller;
DROP TABLE IF EXISTS car;

CREATE TABLE car (
    id_car INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    car_model VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    motorization FLOAT NOT NULL
);

INSERT INTO car (name, car_model, year, motorization) VALUES 
('gol','volkswagen',1998,1.8),
('chevet','chevrolet',1995,1.8),
('opala','chevrolet',1989,4.2),
('civic','honda',2021,2.0);



CREATE TABLE seller (
    id_seller INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL
);

INSERT INTO seller (name, last_name) VALUES
('Pedro','da Silva'),
('Joao','de Lima');



CREATE TABLE buyer (
    id_buyer   INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL 
);

INSERT INTO buyer (name, last_name) VALUES
('Rafael','da Silva'),
('Jorge','de Lima');



CREATE TABLE sells (
    id_sell INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_seller INTEGER,
    FOREIGN KEY (id_seller) REFERENCES seller(id_seller),
    id_buyer INTEGER,
    FOREIGN KEY (id_buyer) REFERENCES buyer(id_buyer),
    id_car INTEGER,
    FOREIGN KEY (id_car) REFERENCES car(id_car)
);

INSERT INTO sells (id_seller,id_buyer,id_car) VALUES
(1,1,1),
(1,2,2),
(2,1,3),
(1,2,4);





