# Prática 23


Comando

```
SELECT coluna1, coluna2, ...
FROM tabela
ORDER BY coluna
LIMIT quantidade OFFSET offset;
```


Exemplo

```
SELECT nome
FROM produtos
ORDER BY id
LIMIT 100 OFFSET 2;
```


Exercício 1:
Considere uma tabela chamada "actor". Escreva uma consulta SQL que retorne a partir do quinto registro, limitando o resultado a 3 registros.

Exercício 2:
Suponha que você tenha uma tabela chamada "city" . Escreva uma consulta SQL que retorne a partir do segundo registro, ordenando-os em ordem alfabética e limitando em 4.

Exercício 3:
Considere uma tabela chamada "store". Escreva uma consulta SQL que retorne a partir do terceiro registro, limitando o resultado a 5 registros, ordenando-os por nome em ordem decrescente.

Exercício 4:
Suponha que você tenha uma tabela chamada rental. Escreva uma consulta SQL que retorne a partir do oitavo registro, limitando o resultado a 4 registros, ordenando-os por id em ordem crescente.

Lembre-se de utilizar a sintaxe correta do OFFSET em cada consulta para obter os resultados desejados.



Exercício 5:
Busque todas as cidades que assistiram o filme de KEVIN BLOOM. Limite em 3 registros e traga a partir do terceiro


