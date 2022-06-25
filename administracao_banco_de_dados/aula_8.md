# Indexação de Tabelas

Índices são empregados em consultas para encontrar registros com um valor específico em uma consulta de forma rápida - aumenta o desempenho da consulta.

Assim sendo, o banco de dados vai direto para a linha em vez de buscar toda a tabela.


Por padrão o MySQL cria índices automáticos como 

* Chave Primária
* Chave Estrangeira
* Constraing Unique


Existem dois tipos de índices - clusterizados e não clusterizados;

## clusterizados

Os índices alteram a forma como os dados são armazenados em um banco uma vez que ele classifica as linhas conforme a coluna que possui o índice.

Fica na chave primária

As linhas acabam sendo armazenadas em uma estrutura não ordenada chamada heap se ela não tiver índice clusterizado.

## Não clusterizado

Não altera a forma como os dados estão dispostos. Contudo, ocorre a criação de um objeto que aponta onde está o dado.



## Criação do Índices

```
CREATE [UNIQUE] INDEX nome_indice ON nome_tabela (
    coluna [ASC|DESC],
    [cloluna2[ASC|DESC]]...
)
```


ALTER TABLE nome_tabla ADD INDEX nome_indice (
    (colunas)
);



## Crie o banco de dados e a tabela

```
CREATE DATABASE aula8;

USE aula8;

CREATE TABLE IF NOT EXISTS editora (
	editora_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	endereco VARCHAR(255) NOT NULL
);
```


### Faça o Insert dos seguintes dados

```
INSERT INTO 
	editora (nome,endereco) 
VALUES
	('Abril', 'Rua Abcd 111'),
	('Madras','Rua Dcb 222'),
	('Globo', 'Rua Xsg 222');
```

## Verifica índice da editora

```
SHOW INDEX FROM editora;
```


## Execute o comando explain

```
EXPLAIN SELECT * FROM editora WHERE nome = 'Globo';
```


## Inserido o índice na tabela editora

```
CREATE INDEX idx_editora ON editora(nome);
```

## Verificando a evidência de que o índice foi clusterizado

```
SHOW INDEX FROM editora;
```


## Executando comando explain novamente
```
EXPLAIN SELECT * FROM editora WHERE nome = 'Globo';
```


## Exercícios

No db sakila


1 Verifique os índices da tabela ator

2 Faça um select na tabela actor pelo Tom Miranda (com where no first e no last name);

3 Faça um explain no tom miranda e verifique quantas linhas são necessárias percorrer para chegar ali.

4 Faça um select na tabela actor pelo Tom Miranda (com where apenas no first);

5 O que você pode entender desse resultado?

6 Para melhorar a performance do 5, o que você pode fazer?

7 Monte um join entre endereço, cidade e país buscando pelo Brasil.

8 Apresente uma análise de performance da query do exercício 7

9 Ha performance dessa query está otimizada no máximo possível ou há algo que pode ser feito para melhorar a performance dela?

10 Para query 7 acrescente where na cidade de Socoraba

11 repita anállise feita em 9