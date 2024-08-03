# Prática 17

Vamos verificar o comando `SELECT` junto ao `AND`, `BETWEEN` e `<`. Para essa prática vamos a um exemplo na tabela `film`. Vamos supor que há 
o interesse de fazer o SELECT de todos os registros de payment_date entre 29/07/2005 e  17/08/2005 da tabela payment. Isso pode ser feito da
seguinte forma

```
SELECT * FROM payment WHERE payment_date between '2005-07-29' AND '2005-08-17';
```

O termo "BETWEEN" significa "entre". Ou seja, será pego todos os registros entre 2005-07-29 e 2005-08-17.
Uma outra forma de fazer o mesmo select é da seguinte maneira

```
SELECT * FROM payment WHERE payment_date >= '2005-07-29' AND payment_date <= '2005-08-17';
```

Ou seja, todos os pagamentos `payment_date` que são maioers do que 29-07-2005 e menores do que 17-08-2005.



1) Faça um select usando between em payment pegando todos os registros maiores do que 2005-08-01 03:22:23.000 e menore do que 2005-08-01 22:53:40.000
2) Faça o mesmo select usando > e <
3) Dentro da mesma tabela, faça um select com amount maior do que 3.55 (você que decide se é com > < ou between)
4) Na mesma tabela, fala um select que busque todos os registros com rental_id maior do que 9571 e menor do que 11367
5) Refaça o cinco usando between
6) Desafio: Faça um SELECT que busque todos os registros maior do que 2005-07-30 00:00:00 e menor do que 2005-07-31 12:00:00 e maior do que
2005-08-01 00:00:00 e menor do que 2005-08-02 00:00:00
