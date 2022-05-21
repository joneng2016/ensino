# Update

## Estrutura do Comando Insert

```
UPDATE 
    [nome da tabela] 
SET 
    [clouna]=[valor]
WHERE
    [coluna]=[valor e condicionais lógicas];

```


## Criando e inserindo dados

```
CREATE DATABASE IF NOT EXISTS aula3;

USE aula3;

DROP TABLE tempo_cidade;

CREATE TABLE IF NOT EXISTS tempo_cidade (
    id_tempo_cidade SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome_cidade VARCHAR(100) NOT NULL,
    tempo ENUM('sol','nublado','chuva') NOT NULL DEFAULT 'sol',
    temperatura FLOAT,
    record_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tempo_cidade 
    (
        nome_cidade,
        tempo,
        temperatura
    )
VALUES
    (
        'Curitiba',
        'sol',
        11.2
    ),
    (
        'Londrina',
        'sol',
        29.2
    ),
    (
        'Rio de Janeiro',
        'nublado',
        35.2
    ),
    (
        'Salvador',
        'sol',
        36.2
    ),
    (
        'Florianópolis',
        'chuva',
        15.2
    ),
    (
        'Porto Alegre',
        'nublado',
        5.2
    ),
    (
        'Cuiaba',
        'sol',
        30
    ),
    (
        'Governador Valadares',
        'sol',
        27.3
    )    
;

SELECT * FROM tempo_cidade;

```



## Exemplo 1 de Update

```
UPDATE 
    tempo_cidade 
SET 
    temperatura=29.1
WHERE
    nome_cidade = 'Governador Valadares';


SELECT * FROM tempo_cidade WHERE nome_cidade = 'Governador Valadares';
```



## Exemplo 2 de Update

```
UPDATE 
    tempo_cidade 
SET 
    tempo='chuva'
WHERE
    tempo='sol';


SELECT * FROM tempo_cidade;
```


## Exemplo 3 de Update - Update sem WHERE, o caminho mais rápido para sua demissão

```
UPDATE 
    tempo_cidade 
SET 
    nome_cidade='PERDEU';

SELECT * FROM tempo_cidade;
```