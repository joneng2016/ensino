# SELECTs

Para trazer informações de uma determinada tabela, se faz necessário executar o comando "SELECT". Considerando uma tabela produto, com as colunas id_produto, nome_produto,
preco, data_registro, realizamos o select da seguinte forma:

Um Select que trás todas as colunas

```
 SELECT * FROM produto;
```


Vamos supor que é do teu interesse trazer apenas nome_produto e preço - o comando acaba tendo a seguinte estrutura:


```
SELECT nome_produto, preco FROM produto
```


Suponto que é do teu interesse trazer uma determinada informação da tabela com em um registro. Suponha, por exemplo, que a sua tabela tenha os seguintes registros:

```
... 
1, cafe, 10,00, 01/10/2025 
2, chocolate, 20,00, 01/10/2025
1, nescau,21,00, 01/10/2025
...
```

Suponha que seja do seu interesse buscar o preço do chocolate, a estrutura do comando é:

```
SELECT
  preco
FROM
  produto
WHERE
  nome_produto = "chocolate"
```




Considerando que você queira trazer tanto chocolate como nescau, então podemos trabalhar com a condicional OR, que semanticamente possui a seguinte estrutura:



```
SELECT
  preco
FROM
  produto
WHERE
  nome_produto = "chocolate" || nome_produto = "nescau"
```






