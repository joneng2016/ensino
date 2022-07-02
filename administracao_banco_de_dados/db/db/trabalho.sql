/*******************************USUARIO*******************************************/
DROP IF EXISTS trabalho;
CREATE DATABASE IF NOT EXISTS trabalho CHARACTER SET utf8 COLLATE utf8_general_ci;
USE trabalho;
DROP TABLE IF EXISTS usuarios;

SELECT 'Criar tabela usuarios se não existe' AS 'PRINT DADO';

CREATE TABLE usuarios(
    id_usuario SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    enredeco VARCHAR(255) NOT NULL,
    cargos VARCHAR(255) NOT NULL
);

SELECT 'Estrutura da tabela' AS 'PRINT DADO';

DESCRIBE usuarios;

SELECT 'Realizar o INSERT na tabela usuarios' AS 'PRINT DADO';

INSERT INTO
    usuarios(
        nome,
        enredeco,
        cargos
    )

VALUES(
    'leonardo',
    'rua 1',
    'estoquista'
),
      (
          'lucas',
          'rua 2',
          'vendedor'
      ),

      (
          'luiz',
          'rua 3',
          'secretario'
      ),

      (
          'daniel',
          'rua 4',
          'diretor'
      ),

      (
        'marcelo',
        'rua 5',
        'estagiario'
      );

/*******************************CARGOS*******************************************/

CREATE TABLE cargos(

    estoquista VARCHAR(255) NOT NULL,
    vendedor VARCHAR(255) NOT NULL,
    secretario VARCHAR(255) NOT NULL

    
);

    SELECT 'INNER JOIN' AS '';
    SELECT 'Retorna linhas quando houver pelo menos uma correspondência em ambas as tabelas' AS '';

    SELECT
        cargos.cargos,
        usuarios.usuarios,
    FROM
        cargos
    INNER JOIN
        usuarios ON usuarios.id_usuario = cargos.id_usuario;

    SELECT 'INNER JOIN com mais de uma tabela' AS '';
    LIMIT 4;

SELECT * FROM usuarios;
/*******************************PRODUTO*******************************************/

CREATE TABLE produtos(
    id_produto SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    compra INTEGER NOT NULL,
    venda INTEGER NOT NULL,
    quantidade INTEGER NOT NULL
);

SELECT 'Estrutura da tabela' AS 'PRINT DADO';

DESCRIBE produtos;

SELECT 'Realizar o INSERT na tabela usuarios' AS 'PRINT DADO';

INSERT INTO
    produtos(
        nome,
        compra,
        venda,
        quantidade
    )

VALUES(
    'achocolatado',
    10,
    14,
    500
),

      (
        'chocolate',
        30,
        20,
        200
      ),

      (
        'café',
        32,
        25,
        100
      ),

      (
        'yopro',
        6,
        8,
        100
      ),

      (
        'caixa de bombom',
        15,
        20,
        700
      ),

      (
        'Refrigerante',
        10,
        19,
        1000
      );

SELECT * FROM produtos;
/*******************************EMPRESA*******************************************/

CREATE TABLE empresas(
    id_empresas SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
);

INSERT INTO
    empresas(
        nome
    )

VALUES(
    'nescau'
),
      (
        'lacta'
      ),

      (
        'Ouro Fino'
      ),

      (
        'Danone'
      ),

      (
        'Garoto'
      ),

      (
        'Guaraná'
      );

SELECT * FROM empresas;

/*******************************CLIENTES*******************************************/

CREATE TABLE clientes(
    cpfcnpj SMALLINT UNSIGNED PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    enredeco VARCHAR(255) NOT NULL
    
);

SELECT 'Estrutura da tabela' AS 'PRINT DADO';

DESCRIBE clientes;

SELECT 'Realizar o INSERT na tabela clientes' AS 'PRINT DADO';

INSERT INTO
    clientes(
        cpfcnpj,
        nome,
        enredeco
    )

VALUES(
    '123',
    'alisson',
    'rua do estoquista'
),
      (
          '321',
          'rafael',
          'rua do vendedor'
      );

SELECT * FROM clientes;

SELECT * FROM cargos;

SELECT * FROM usuarios;

SELECT * FROM produtos WHERE (nome = 'achocolatado');
SELECT * FROM clientes;
SELECT * FROM empresas;




