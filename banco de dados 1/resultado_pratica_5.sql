DROP DATABASE IF EXISTS dia_28_02;
CREATE DATABASE dia_28_02  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE  dia_28_02;

CREATE TABLE coisas_antes_morrer (
    nome VARCHAR(50),
    descricao TEXT, 
    esta_feito TINYINT
);

INSERT INTO coisas_antes_morrer
    (nome, descricao, esta_feito)
VALUES
    ('trabalhar em algo que gosto', 'ter um emprego que me de realização profissional', 1),
    ('ter mais que 40 cm de braço', 'ter um braço maior do que 40 cm', 1),
    ('fazer mochilão no Brasil',    'Viajar de mochila por todo o território nacional. Conhecer a maior quantidade de cidades possíveis', 0),
    ('fazer mochilão na Europa',    'Viajar de mochila por todo o território Europeu. Conhecer a maior quantidade de cidades possíveis', 0),
    ('juntar 1 milhão de Reais',    'Conseguir juntar a quantidade de 1 milhão de reais', 0)        
;


;
SELECT * FROM coisas_antes_morrer;
