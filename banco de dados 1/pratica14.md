# Prática 14

Muitas vezes realizamos registros errados na tabela. Em outra situações se faz necessário atualizar o registro por conta da estrutura do negócio mesmo.
Para isso nós precisamos fazer uso do comando "update". A documentação https://www.w3schools.com/mysql/mysql_update.asp, o comando _update_ possui a seguinte
estrutura: 

```
UPDATE 
  nome_da_tabela
SET 
  coluna1 = novo_valor_1, coluna2 = novo_valor_2 ....
WHERE
  condition;
```


Tendo em vista isso, segue a prática de hoje: 

* Crie uma tabela com o nome "alunos", essa tabela deve ter nome, sobrenome, tipo_documento, valor_documento, data_nascimento e data_registro
* Faça o insert de 5 registros (você define os valores).
* Faça o update do terceiro registro (você define o novo valor).
