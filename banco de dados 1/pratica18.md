# Prática 18

Dois operadores relevantes a serem entendido hoje são o `like`, `in`  e o `!=`. O like é 
utilizado para buscar todos os registros que contém uma "substring". Por exemplo, se você
realizar o seguinte select :

```
SELECT * FROM store WHERE title LIKE "%DIN%"
```

Você buscará todos os registros que contem DIN.

Já se você buscar por
```
SELECT * FROM store WHERE title LIKE "AF%"
```

Buscará todos os registros que começam com AF.


Se você buscar por: 

```
SELECT * FROM store WHERE title LIKE "%AN"
```

Receberá todos os serviços que finalizam com "AN".


Já o in é utilizado para buscar algum valor contido em um conjunto de valores. Por exemplo, ao
executar `SELECT * FROM film WHERE title IN('ACADEMY DINOSAUR', 'AFRICAN EGG', 'ALABAMA DEVIL')`


Já o operador `!=` é utilizado para pegar todos os registros diferentes de deterinado valor. 



Segue os exercícios

1 Buque na tabela `film` todos os registros que contenha `A`.

2 Buque na tabela `film` todos os registros que comece com a `A`. 

3 Buque na tabela `film` todos os registros que finaliza com  `A`.

4 Busque todos os registros da tabela `payment` onde rental_id contem os seguintes valores: 
11367, 9443, 8978, 10141, 10671

5 Na tabela language busque todos os registros que contem `English, Japanese` em `name` em 
conjunto com `last_update` dos seguintes valores `2006-02-15 05:02:19.000, 2006-02-15 05:02:19.000`.

6 Busque todos os registros de `actor` onde `first_name` não deve conter os seguintes registros: 

JENNIFE, 
JOHNNY, 
BETTE, 
GRACE, 
MATTHEW
JOE    
CHRISTI
ZERO   
KARL   
UMA    
VIVIEN 
CUBA   
FRED   
HELEN  
DAN    
BOB    
LUCILLE
KIRSTEN
ELVIS  
SANDRA 
CAMERON
KEVIN  
RIP    




## Desafio

Quero saber todos as cidades que locaram filmes dos seguintes atores que contem as seguintes letras nos nomes se sobrenomnes

NIFER DAV
NNY LLOBR
TT HOLSON 
ACE OST    
THE OHANSSO 
O SW  
ISTIAN GAB
EO CAG

Usar LIKE, IN e Subselect
