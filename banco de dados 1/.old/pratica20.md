# Prática 20

Os parentes `( ` são estruturas de sintaxe muito importantes na contrução de uma query. Elas permitem verificar qual é a
sequência correta de execução de uma estrutura lógica. Vamos supor que você queira fazer o select na tabela `payment`
e para isso você quer trazer todos os registros que estão com `customer_id` entre 2 e 4, `amount`entre 6 e 7 e `payment_date`
entre 15-05-2005 e 17-06-2005. Talvez você pense em montar a query assim:

```
SELECT
  *
FROM
  payment
WHERE
  customer_id <= 2 or customer >= 4 and amount >= 6 and amount <= 7 and payment_date >= "2005-05-15" 
  and payment_date <= "2005-06-17"
```


Contudo não é bom estruturar esse `query` assim, a maneira mais correta é: 

```
SELECT
  *
FROM
  payment
WHERE
  (customer_id <= 2 or customer >= 4) and 
  (amount >= 6 and amount <= 7) and 
  (payment_date >= "2005-05-15" and payment_date <= "2005-06-17")
```

Exercícios

1) Busque todos os pagamenetos com customer_id entre 0 e 6 amount entre 2 e 8 e payment_date entre 15-05-2005 16-08-2005
2) Busque por todos os registros, em category, que possuiem `category_id` entre 2 e 10, que name contenha "Cl" no início, que contenha "ama" no final da string ou que contenha "umen" no meio do name.
3) Busque todos os registros em `customer` que contenha os seguintes emails: 
```
LISA.ANDERSON@sakilacustomer.org  
NANCY.THOMAS@sakilacustomer.org   
KAREN.JACKSON@sakilacustomer.org  
BETTY.WHITE@sakilacustomer.org    
HELEN.HARRIS@sakilacustomer.org   
SANDRA.MARTIN@sakilacustomer.org  
DONNA.THOMPSON@sakilacustomer.org 
CAROL.GARCIA@sakilacustomer.org   
```
e que contenha os seguintes first_names
```
MARY   
PATRICI
LINDA  
BARBARA
ELIZABE
JENNIFE
MARIA  
SUSAN  
MARGARE
DOROTHY
LISA   
```

ou 
que tenha `customer_id` entre 19 e 41 ou e tenha `address_id` entre 71 e 83

