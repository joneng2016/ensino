# SELECT


Carregar o banco world;

## Forma tradicional

```
USE world;

SELECT 
    'Forma mais tradicional de execução do código SELECT' 
AS 
    '';


SELECT 
    * 
FROM 
    city;

SELECT 
    * 
FROM 
    country;

```


## Selecionando Colunas

```
SELECT 
    'Selecionando apenas colunas de interesse' 
AS 
    '';

SELECT 
    NAME, 
    CountryCode 
FROM 
    city;



SELECT 
    Code, 
    Name, 
    Continent, 
    Region 
FROM 
    country;

```


## Adicinar limit no select

SELECT 
    'Adicionando um Limite no SELECT' 
AS 
    '';


SELECT 
    Code, 
    Name, 
    Continent, 
    Region 
FROM 
    country
LIMIT 15;


## Usando WHERE

```
SELECT 
    'Usando Where' 
AS 
    '';


SELECT
    Code,
    Name,
    Continent
    LocalName
FROM
    country
WHERE
    Continent = 'Europe';
```

## Condicional lógica AND - Restritiva

```
SELECT 
    'Condicional lógica AND - Restritiva' 
AS 
    '';


SELECT
    Code,
    Name,
    Continent
    LocalName
FROM
    country
WHERE
    Continent = 'Europe' AND 
    Name = 'Spain';
```



## Condicional lógica OR

```
SELECT 
    'Condicional lógica OR' 
AS 
    '';


SELECT
    Code,
    Name,
    Continent
    LocalName
FROM
    country
WHERE
    Continent = 'Europe' OR 
    Continent = 'North America';
```

## Condicoinal lógica IN

```
SELECT 
    'Condicionamento IN' 
AS 
    '';


SELECT
    Code,
    Name,
    Continent
    LocalName
FROM
    country
WHERE    
    Continent IN ('Asia','Africa','Oceania');

```


## Condicionamento BETWEEN

```
SELECT 
    'Condicionamento BETWEEN' 
AS 
    '';


SELECT
    Population,    
    Name,
    Continent
    LocalName
FROM
    country
WHERE    
    Population BETWEEN 5651000 AND 7651000;

```

## Combinando diferentes condicionais

```
SELECT 
    'Combinando diferentes condicionais' 
AS 
    '';

SELECT
    Population,    
    Name,
    Continent
    LocalName
FROM
    country
WHERE
    (Continent = 'Africa' OR Continent = 'Europe') AND     
    (Population BETWEEN 51000 AND 7651000) AND
    (Name IN ('Estonia','Gambia','Macedonia'))
;
```