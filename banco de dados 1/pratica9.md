# Prática 9

Uma __constraints__ (ou restrição) bastante famosa é a _DEFAULT_. O Conceito de _Default_ consiste em um valor "padrão" que deve ser usado quando não especificado.
Para entender melhor o conceito de default vamos para um exemplo, que é o seguinte: Vamos criar uma tabela com o seguinte nome: comida. Ela deve ter a seguinte
estrutura:

id_comida,
nome (varchar)
unidade_de_medida enum (qtd, kg, g, L, ou nenhum)
valor_da_medida DOUBLE, ou um FLOAT


A coluna valor_da_medida deve ter um valor default de 0, e a unidade de medida deve ter um valor default "nenhum".  O valor default pode ser 
feito da seguinte forma, em termos de SQL,

```
CREATE TABLE comida (
  id_com....
  ...
  ...
  unidade_de_medida enum (qtd, kg, g, L, ou nenhum) DEFAULT "nenhum",
  valor_da_medida FLOAT DEFAULT 0
  
);
```


Depois faça 10 inserts (invente). Sendo que 5 desses inserts contem valores para unidade_de_medida, contudo os outros cinco não. Avalie o que ocorre com as
colunas unidade_de_medida e valor_da_medida.
