DROP DATABASE IF EXISTS transactionrollback;

CREATE DATABASE transactionrollback CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

USE transactionrollback;

CREATE TABLE musics (
    id_music INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_music VARCHAR(255) NOT NULL,
    band VARCHAR(255) NOT NULL,
    CREATED_AT DATETIME DEFAULT NOW()
);

INSERT INTO 
    musics (name_music, band) 
VALUES 
    ('Nothing Else Matters', 'Metalica'),
    ('Enter Sandman',        'Metalica'),
    ('My Friend of Misery' , 'Metalica'),
    ('Deutshchland',         'Rammstein'),
    ('Rosenrot',             'Rammstein'),
    ('Ohne dich',            'Rammstein');

SELECT * FROM musics;


SET autocommit=0;

START TRANSACTION;
    DELETE FROM musics;

SELECT 'Table music with transactions execute' AS 'LOG';

SELECT * FROM musics;

ROLLBACK;

SELECT 'Table music after rollback' AS 'LOG';

SELECT * FROM musics;

SET autocommit=1;


SET autocommit=0;

START TRANSACTION;
    DELETE FROM musics;

SELECT 'Table music with transactions execute' AS 'LOG';

SELECT * FROM musics;

COMMIT;

ROLLBACK;

SELECT * FROM musics;

SET autocommit=1;