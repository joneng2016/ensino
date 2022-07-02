# AULA 9
```
use world;

DELIMITER //
DROP PROCEDURE SelectCountry;

CREATE PROCEDURE SelectCountry()
BEGIN
  SELECT * FROM country;
END

DELIMITER ;
```

```
CAll SelectCountry;
```

```
DELIMITER //

DROP PROCEDURE IF EXISTS  SelectCountry;

CREATE  PROCEDURE SelectCountry(CountryName VARCHAR(255))
BEGIN
  SELECT 
 	* 
  FROM 
 	country
  WHERE 
 	country.Name=CountryName;
END

DELIMITER ;
```


```
call SelectCountry ('Brazil');
```

```
DELIMITER //
DROP  PROCEDURE IF EXISTS SelectCountryByCityName;
CREATE  PROCEDURE SelectCountryByCityName(CityName VARCHAR(255))
BEGIN	
  SET @CountryCode:=(SELECT city.CountryCode  FROM city WHERE city.Name=CityName);
 
 SELECT @CountryCode;
 
 SELECT 
 	* 
  FROM 
 	country
  WHERE 
 	country.Code=@CountryCode;
END

DELIMITER ;

CALL SelectCountryByCityName('Biskra');
```



Exercícios


Válido para o Sakila db


![alt text](./db.png)



1 Crie uma procedure que informa todos os atores assistidos por uma dada pessoa em um certo período de pagamento

2 Crie uma procedure que informa a categoria predileta de uma determinada pessoa 

3 Crie uma procedure que informa os idiomas de preferência de uma determinada pessoa.

3 Crie uma procedure que informa a categoria predileta de um determinado país

4 Crie uma procedure que cria a seguinte relação - país/quantidade de pessoas/ator










