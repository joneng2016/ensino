# Primeira Avaliação

* Forneça uma url de repositório do github
* Pode ser feito em qualquer linguagem de programação (PHP, Java, Node, Python, Golang).
* Pode usar o *framework* desenvolvido em sala de aula.
* Pode usar o PHP sem ser no framework desenvolvido em sala de aula (pode ser no PHP vanila bem como em algum outro framework de mercado, ex *Laravel, Symfony*)
* Para o caso da API ser formada em uma linguagem que não a usada em sala de aula, você deverá fornecer um texto (dentro da estrutura de diretório) que forneça intruções de como instalar a linguage e como iniciar o serviço.
* A api deverá funcionar sobre o seguinte banco de dados - *Anexo 1*
* Essa api deve conter as seguintes rotas

Talvez você sinta uma certa dificuldade no que tange ao banco de dados. Para isso, você pode verificar como essa situação foi resolvida no serviço que está sendo desenvolvido em sala de aula. A seguinte classe foi montada:

https://github.com/joneng2016/framework-senac022022/blob/master/app/FrameworkTools/Database/DatabaseConnection.php

Ela foi posicionada conforme o namespace indica: app\FrameworkTools\Database\DatabaseConnection.php


Para exemplificar o uso da mesma, eu criei uma controller, que é chamada da seguinte forma no arquivo de rotas

https://github.com/joneng2016/framework-senac022022/blob/master/app/FrameworkTools/Implementations/Route/RouteProcess.php


O código da controller, mostrado logo a segui, mostra exatamente como podemos podemos fazer uma query ao banco de dados: 

https://github.com/joneng2016/framework-senac022022/blob/master/app/Controllers/TrainQueryController.php


No caso desse exemplo, usei a seguinte tabela:

https://github.com/joneng2016/framework-senac022022/blob/master/sql/query1.sql



Não esqueça que seu banco de dados precisa estar ativo (ir no xampp e ativar)

```
GET /car  
```
retorna todos os carros


```
GET /car?idCar=2
```
retorna os carros com determinado id (o valor do id é só um exemplo)


```
GET /car?nameCar=civic
```

retorna todos os carros com determinado *nameCar* (o valor do *nameCar* é só um exemplo)


```
GET /seller  
```
retorna todos os vendedores


```
GET /seller?idSellerr=2
```
retorna todos os vendedores com determinado id (o valor do id é só um exemplo)


```
GET /seller?nameSeller=Joao
```
retorna todos os vendedores com o nome nameSeller (o valor do *nameSeller* é só um exemplo)


```
GET /seller/car?nameSeller=Joao
```
retorna todos os carros venidos por nameSeller (João é só um exemplo)


```
GET /buyer  
```
retorna todos os compradores


```
GET /buyer?idBuyer=2
```
retorna todos os compradores com determinado id (o valor do id é só um exemplo)


```
GET /buyer?nameBuyer=Joao
```
retorna todos os compradores com o nome nameBuyer (o valor do *nameBuyer* é só um exemplo)



```
GET /buyer/car?nameBuyer=Joao
```
retorna todos os carros comprados por nameBuyer (neste exemplo é João)


## Anexos

### Anexo 1
```
DROP DATABASE IF EXISTS car;
CREATE DATABASE car;

USE car;

DROP TABLE IF EXISTS sells;
DROP TABLE IF EXISTS buyer;
DROP TABLE IF EXISTS seller;
DROP TABLE IF EXISTS car;

CREATE TABLE car (
    id_car INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    car_model VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    motorization FLOAT NOT NULL
);

INSERT INTO car (name, car_model, year, motorization) VALUES 
('gol','volkswagen',1998,1.8),
('chevet','chevrolet',1995,1.8),
('opala','chevrolet',1989,4.2),
('civic','honda',2021,2.0);



CREATE TABLE seller (
    id_seller INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL
);

INSERT INTO seller (name, last_name) VALUES
('Pedro','da Silva'),
('Joao','de Lima');



CREATE TABLE buyer (
    id_buyer   INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL 
);

INSERT INTO buyer (name, last_name) VALUES
('Rafael','da Silva'),
('Jorge','de Lima');



CREATE TABLE sells (
    id_sell INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_seller INTEGER,
    FOREIGN KEY (id_seller) REFERENCES seller(id_seller),
    id_buyer INTEGER,
    FOREIGN KEY (id_buyer) REFERENCES buyer(id_buyer),
    id_car INTEGER,
    FOREIGN KEY (id_car) REFERENCES car(id_car)
);

INSERT INTO sells (id_seller,id_buyer,id_car) VALUES
(1,1,1),
(1,2,2),
(2,1,3),
(1,2,4);


```