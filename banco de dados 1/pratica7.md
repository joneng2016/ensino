# Prática 7

Agora que temos o conhecimento de como criar tabela, de como realizar inserts e de como realizar o uso de diferentes formas possíveis do banco de dados,
vamos ver como podemos melhorar os "SELECTS" de nossa tabela. Para essa finalizade nós usamos algo chamado PRIMARY KEY (chave primária da tabela). Ela
tem a responsabilidade de ordenar os registros em uma "key".

Para isso, crie uma tabela com o nome mercadoria. Essa tabela deve conter as seguintes colunas, nome (varchar), empresa_origem (varchar), quantidade (integer),
comprador (varchar), data_registro (DateTime). Contudo, na criação dessa tabela você deve também adicionar uma coluna chamada id_mercadoria. A estrutura dessa coluna - dentro do 
contexto de create table - é:

```
id_mercadoria AUTO INT NOT NULL PRIMARY KEY AUTO_INCREMENT
```


Depois disso faça o insert de cinco produtos. Como a coluna id_mercadoria é uma PRIMARY KEY AUTO INCREMENT, você não precisa adicionar ela no INSERT. Automaticamente
o número será gerado e incrementado em 1.
