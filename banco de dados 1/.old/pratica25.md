# Prática 25


## Objetivos da Aula:

Compreender o conceito de INNER JOIN.
Aprender a sintaxe do INNER JOIN no MySQL.
Aplicar o INNER JOIN em consultas de banco de dados.
Introdução:
O INNER JOIN é uma operação comum em banco de dados relacionais, que permite combinar registros de duas ou mais tabelas com base em uma condição especificada. Nesta aula, aprenderemos como usar o INNER JOIN para unir dados de tabelas relacionadas em consultas SQL.

## Conteúdo:

Visão geral do INNER JOIN:

Explicação do conceito de INNER JOIN.
Compreensão da diferença entre INNER JOIN e outros tipos de junção (OUTER JOIN, LEFT JOIN, RIGHT JOIN).
Sintaxe do INNER JOIN:

Apresentação da sintaxe básica do INNER JOIN.
Uso da cláusula ON para especificar a condição de junção.
Exemplos Práticos:

Exemplo 1: INNER JOIN entre duas tabelas.
```
select
	*
from 
	address 
inner join 
	city on address.city_id = city.city_id;
```
  
Exemplo 2: INNER JOIN entre várias tabelas.

```
select
	c2.*,
	c.city_id as city_city_id,
	a.city_id as address_city_id
from 
	address a
inner join 
	city c
	on 
		a.city_id = c.city_id
inner join
	country c2 
	on
		c.country_id = c2.country_id 
where
	c2.country ="Brazil"
;
```
Discussão sobre possíveis problemas e soluções ao usar INNER JOIN.
Considerações Finais:

## Recapitulação dos principais pontos aprendidos.
Destaque para situações em que o INNER JOIN é especialmente útil.
Incentivo aos alunos a praticar e explorar mais sobre INNER JOIN.
Atividades Práticas Sugeridas:

Escrever consultas SQL utilizando INNER JOIN para combinar dados de tabelas relacionadas.

## Documentação oficial do MySQL: https://dev.mysql.com/doc/
Tutoriais online sobre INNER JOIN no MySQL.
Observações Finais:
Certifique-se de fornecer exemplos práticos durante a aula e encoraje a participação ativa dos alunos. Explique os conceitos de forma clara e esteja preparado para responder a perguntas. O INNER JOIN é uma habilidade essencial em SQL, e a prática é fundamental para o domínio dessa técnica.


1) Busque todos os filmes com categoria Action
2) Busque todos os endereços do país South Africa
3) Busque todos os pagamentos de MARY SMITH, limit em 2
4) Busque todos os filmes que foram assistidos por HELEN HARRIS
