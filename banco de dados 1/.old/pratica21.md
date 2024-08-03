# Prática 21

Muitas vezes é do nosso interesse ordernar os dados de uma _query_ do menor para o maior ou do maior para o menor. Para isso fazemos uso do comando 
_order by_ e funciona da seguinte forma:
```
SELECT 
  *
FROM 
  nome_da_tabela
WHERE
  condicionais...
ORDER BY 
  nome_da_coluna
```

Se desejamos que a ordenação seja feita de forma decrescente, então adicionamos um `DESC` ao
final da _query_ nesta linha:


```
SELECT 
  *
FROM 
  nome_da_tabela
WHERE
  condicionais...
ORDER BY 
  nome_da_coluna
DESC
```



Em alguns casos desejamos também relaliza agrupamento de dados de uma determinada consulta, para
isso estruturamos a _query_ da seguinte forma:



```
SELECT 
  *
FROM 
  nome_da_tabela
WHERE
  condicionais...
GROUP BY
  nome_da_coluna
```


Por último, várias vezes é do interesse nosso limitar a quantidade de registros selecionados, 
para isso se faz o uso de _LIMIT_, logo - fica da seguinte forma: 

```
SELECT
  *
FROM
  nome_da_tabela
WHERE
  condicionais...
LIMIT 10 
```

(neste caso, limitamos em 10 registros)


Nós podemos combinar os três comandos na seguinte hierarquia:


```
SELECT
  *
FROM
  nome_da_tabela
WHERE
  condicionais...
GROUP BY
 noma_coluna_X
ORDER BY
 nome_coluna_Y
LIMIT 10 
```




1) Em film, faça um select que busque todos aqueles que começam com a letra A em _title_ e seja limitado em no máximo 5 registros
2) Dentro da tabela film, execute os registros agrupados por _special features_ (é interessante que a coluna special features fique na frente das demais)
3) Dentro de film ainda, busque todos os registros ordenados por _length_
4) Busque todos os registros, em film, que começam com A, sejam ordenrados por _last_update_, estejam limitados em 10 registros
5) Em film, agrupe todos os registros por  _special featuers_, que contenha o termos como "Dentist", "Monkey", "Boy", que começecem com a letra B, (para o campo description), seja ordernado por rental_duration e seja limitado em três registros.
6) Faça uma relação de select, subselect com film, film_category e category. Feito isso, traga todos os filmes ordernados por film_id em ordem decrescente. Limite os registros em 15 registros. Deve conter apenas categorias que comecem com a letra C. A ordenação das categorias deve ser decrescente em category_id
