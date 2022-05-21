# Insert/Update

## Estrutura do Comando Insert

```
INSERT INTO [nome da tabela] ([coluna 1, coluna 2, coluna 3]) VALUES ([valor 1, valor 2, valor 3])
```

Se a coluna for auto-increment não ha necessidade de adicionar a coluna.

```
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
```

Fazer o seguinte INSERT


```
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
        'castannhos',
        '1998-03-01 10:15',
        'Rua Riachuelo',
        'São Paulo',
        'São Paulo',
        'Brasil',
        810026
    );

```

Como fazer para criar vários Inserts?

```
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
        'Rio de Janeiro'
        'Rio de Janeiro',
        'Brasil',
        810025
    )
    ;

SELECT * FROM person;
```
### Exercício

Crie um Script .sq com os seguintes objetivos


1 Cria uma base dados chamado "pet"
2 Seleciona a base de dados
3 Crie uma tabela chamada "animais" que possuem as seguintes colunas:

* id_animal -> Inteira, primary key, auto_increment
* tipo -> enum [cachorro, gato]
* nome -> varchar
* data -> data de insert, sempre a data de hora que a inserção ocorre


4 insere os seguintes dados

1 Loirinho, cachorro
2 Frajola, gato