CREATE TABLE IF NOT EXISTS person
(
    person_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(20) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    eye_color CHAR(2),
    birth_date DATE,
    street VARCHAR(30),
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20),
    country VARCHAR(20),
    postal_code VARCHAR(20)
);
