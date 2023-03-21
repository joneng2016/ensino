# Prática 10

A alteração de coluna é dada pelos seguintes comandos

### Adição 

```
ALTER TABLE table_name
ADD column_name datatype;
```


### Remoção 

```
ALTER TABLE table_name
DROP COLUMN column_name;
```


### Modificação


```
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
```



referência: https://www.w3schools.com/mysql/mysql_alter.asp

Crie uma tabela chamada contatos, essa tabela deve conter

id_contatos, nome (varchar), idade (crie como varchar), endereço (varchar), telefone (varchar).


Então, faça três inserts () . Depois disso faça o seguinte: 

1 - Altere a coluna idade de varchar para integer

2 - Remova a coluna idade

3 - Adicione a coluna idade



Exercícios:


1 A tabela "funcionaros" de uma empresa (que contem o nome, tipo de documento, valor do documento, endereco) de uma dada empresa precisa ser modificada. 
Há a necessidade de adicionar a coluna "funcao" que será um enum com os tipos de funcões que podem ser exercidas pelos profissionais (farmaceutico, vendedor,
estoquista, seguranca, gerente).

Simule a tabela adicionando 5 inserts (sem a coluna funcao). Depois disso, altere essa tabela adicionado a mesma respectivamente.




2 Crie uma tabela chamada escola, essa por sua vez deve conter as seguintes colunas:

id_escola, nome_estudante, idade_estudante, ano_escolar

A escola entendeu que a idade não é um fator a ser mantido em seu banco de dados, logo ela orientou os devs a removerem a colunqa idade_estudante. Simule essa operação.



3 Um restaurante possui uma tabela chamada "comidas". Essa tabela contem id_comida, nome, data_validade (fazer com DateTime), dia_compra, unidade de medida (qtd, quilograma,
litro, cm^3). Dia de compra deve ser feita com varchar. Então faça 6 inserts. Depois disso, realize a alteração da coluna dia_compra para inteiro e verifique o resultado.


