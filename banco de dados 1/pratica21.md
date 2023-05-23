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


Nós podemos combinar os três comandos na seguinte hierarquia
