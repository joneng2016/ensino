CREATE DATABASE IF NOT EXISTS admin_class_teaching;

USE admin_class_teaching;

DROP TABLE person;

CREATE TABLE IF NOT EXISTS person
(
    person_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(20) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    eye_color VARCHAR(15),
    birth_date DATETIME,
    street VARCHAR(30),
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20),
    country VARCHAR(20),
    postal_code INT
);


INSERT INTO 
    person 
    (
        fname,
        lname,
        eye_color,
        birth_date,
        street,
        city,
        state,
        country,
        postal_code
    )
    VALUES
    (
        'Fernando',
        'da Silva',
        'verde',
        '2002-03-01 10:15',
        'Rua André de Carros',
        'Curitiba',
        'Paraná',
        'Brasil',
        810026
    );


SELECT * FROM person;


INSERT INTO 
    person 
    (
        fname,
        lname,
        eye_color,
        birth_date,
        street,
        city,
        state,
        country,
        postal_code
    )
    VALUES
    (
        'José',
        'da Lima',
        'castanhos',
        '1998-03-01 10:15',
        'Rua Riachuelo',
        'São Paulo',
        'São Paulo',
        'Brasil',
        810026
    );


SELECT * FROM person;

INSERT INTO 
    person 
    (
        fname,
        lname,
        eye_color,
        birth_date,
        street,
        city,
        state,
        country,
        postal_code
    )
    VALUES
    (
        'Fernanda',
        ' de Souza',
        'Azul',
        '1975-03-01 10:15',
        'Rua Durval',
        'São Paulo',
        'São Paulo',
        'Brasil',
        810022
    ),
        (
        'Elaine',
        ' de Pereira',
        'Preto',
        '1971-03-01 10:15',
        'Rua Machado de Assis',
        'Rio de Janeiro',
        'Rio de Janeiro',
        'Brasil',
        810025
    )
    ;

SELECT * FROM person;