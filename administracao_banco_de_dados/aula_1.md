# Criação de Base de Dados/Tabelas

## Comando source

Executa scripts .sql

```
source endereco/nome do arquivo.sql
```

Exemplo

```
mysql> source /home/www/ensino/administracao_banco_de_dados/aula_1_scripts/hello.sql
```

## Database

Conjunto de Informações: Tabelas, Relacionamentos, Procedures, Index sempre estarão contidos dentro de um Database.

Para ver toda as bases de dados:

```
show database
```

Para criar uma base de dados nova:

```
create database my_first_db;
```

Para selecionar a base de dados

```
use my_first_db;
```


## Tables

### Criação
Para criar uma tabela - monte um arquivo .sql (qualquer nome).

Dentro desse arquivo, criar a seguinte estrutura

```
CREATE TABLE person
(
    person_id SMALLINT UNSIGNED,
    fname VARCHAR(20),
    lname VARCHAR(20),
    eye_color CHAR(2),
    birth_date DATE,
    street VARCHAR(30),
    city VARCHAR(20),
    state VARCHAR(20),
    country VARCHAR(20),
    postal_code VARCHAR(20),
    CONSTRAINT pk_person PRIMARY KEY (person_id)
);
```

Ver a tablea;

```
DESCRIBE person
```


```
mysql> describe person;
+-------------+-------------------+------+-----+---------+-------+
| Field       | Type              | Null | Key | Default | Extra |
+-------------+-------------------+------+-----+---------+-------+
| person_id   | smallint unsigned | NO   | PRI | NULL    |       |
| fname       | varchar(20)       | YES  |     | NULL    |       |
| lname       | varchar(20)       | YES  |     | NULL    |       |
| eye_color   | char(2)           | YES  |     | NULL    |       |
| birth_date  | date              | YES  |     | NULL    |       |
| street      | varchar(30)       | YES  |     | NULL    |       |
| city        | varchar(20)       | YES  |     | NULL    |       |
| state       | varchar(20)       | YES  |     | NULL    |       |
| country     | varchar(20)       | YES  |     | NULL    |       |
| postal_code | varchar(20)       | YES  |     | NULL    |       |
+-------------+-------------------+------+-----+---------+-------+
```



```
CREATE TABLE favorite_food
(   person_id SMALLINT UNSIGNED,
    food VARCHAR(20),
    CONSTRAINT pk_favorite_food PRIMARY KEY (person_id, food),
    CONSTRAINT fk_fav_food_person_id FOREIGN KEY (person_id)
    REFERENCES person (person_id)
);
```

```
mysql> source /home/www/ensino/administracao_banco_de_dados/aula_1_scripts/favorite_food.sql
Query OK, 0 rows affected (0,01 sec)

mysql> describe favorite_food;
+-----------+-------------------+------+-----+---------+-------+
| Field     | Type              | Null | Key | Default | Extra |
+-----------+-------------------+------+-----+---------+-------+
| person_id | smallint unsigned | NO   | PRI | NULL    |       |
| food      | varchar(20)       | NO   | PRI | NULL    |       |
+-----------+-------------------+------+-----+---------+-------+
2 rows in set (0,01 sec)

mysql> 
```



## Tipagem

```
DECIMAL(M,D) – Ponto decimal com M dígitos no total (precisão) e D casas decimais (escala); o padrão é 10,0; M vai até 65 e D até 30.
FLOAT(M,D) – Ponto flutuante com precisão M e escala D; o padrão é 10,2; D vai até 24.
CHAR(M) – String que ocupa tamanho fixo entre 0 e 255 caracteres
BOOL / BOOLEAN – Valores binários 0 / 1; Na verdade, é um alias para o tipo TINYINT(1)
VARCHAR(M) – String de tamanho variável, até 65535 caracteres.
BLOB / MEDIUMBLOB/ TINYBLOB – Campo com tamanho máximo de 65535 caracteres binários; ‘Binary Large Objects’, são usados para armazenar grandes quantidades de dados, como imagens.
MEDIUMTEXT – Permite armazenar até 16.777.215 caracteres.
LONGTEXT – Permite armazenar até 4.294.967.295 caracteres.
DATE – Uma data de 01/01/1000 a 31/12/9999, no formato YYYY-MM-DD
DATETIME – Uma combinação de data e hora de 01/01/1000 00:00:00 a 31/12/9999 23:59:59, no formato YYYY-MM-DD HH:MM:SS
TIME – Hora apenas, no formato HH:MM:SS
YEAR(M) – Ano nos formatos de 2 ou 4 dígitos; Se forem 2 (YEAR(2)), ano vai de 1970 a 2069; para 4 (YEAR(4)), vai de 1901 a 2155. O padrão é 4.
```

 

## Exercício

- Criar uma tabela que armazena os dados de bebidas, deve conter os seguintes campos:

id_bebida
nome
empresa 
quantidade -> 300
valor unitário -> 24.1
alcool -> sim ou não





