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
