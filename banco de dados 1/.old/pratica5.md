Na aula de hoje vamos praticar um pouco mais o conceito de Insert. Nós usamos insert para inserir informações em uma 
tabela. A esturtura básica do comando 

```
INSERT INTO
  tabela (coluna1, coluna2, coluna3)
VALUES
  ("valor1", "valor2", "valor3");

```


Para isso vamos realizar a seguinte prática. Em um .sql (fazendo execução via comando source) execute a sequência como se define:

* Crie um banco de dados com o seguinte: dia_28_02 (verifique o comando CREATE DATABASE)
* Faça o acesso a base de dados (comando USE)
* Crie uma tabela com nome, coisas_antes_morrer;
* Essa tabela deve ter as seguintes colunas: nome (VARCHAR(50)), descricao (TEXT), esta_feito (TINYINT -> equivalente ao boolean)
* Para finalizar, adicione no final do script .sql uma seleção de toda a base de dados, para isso você pode usar o comando SELEC.
A estrutura do comando é da seguinte forma: 

``
SELECT
  *
FROM (nome da tabela)
``
