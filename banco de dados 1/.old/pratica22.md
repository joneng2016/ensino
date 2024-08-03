# Prática 22

`SELECT DISTINCT` é utilizado para trazer todos os dados distintos entre si. Sua sintaxe se dá

```
SELECT DISTINCT coluna_1, coluna_2, ... coluna_n FROM tabela;
```

Existe uma diferença entre o distinct para o group by, um trás apenas aqueles que são distintos entre si, outro trás o agrupamento. 


`HAVING` Utilizado apenas com o "GROUP BY", diferente do `WHERE`, `HAVING` atua depois do agrupamento.


1) Dentro da tabela film, execute os registros agrupados por special features (é interessante que a coluna special features fique na frente das demais)
2) Dentro da tabela film, traga os registros de forma distinta special features (é interessante que a coluna special features fique na frente das demais)
3) Em um, aplique o `WHERE` por `RATING` igual a `R`
4) Em dois, aplique o `WHERE` por `RATING` igual a `R`
5) Em um, apique o `HAVING` por `RATING` igula a `R`  

