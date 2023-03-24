# Prática 10

1 Crie uma tabela com o nome de clientes, essa tabela deve ter id_clientes, nome, sobrenome, tipo de documento (enum para cpf, rg, passaporte), valor_documento,
produto_consumido, valor_pago, created_at (pode ser DateTime). A tipagem fica por sua definição, apenas lembrando id_clientes deve ser Primary Key auto_increment. 
Observe o seguinte, cada cidadão possui o seu documento, por conta disso nós precisamos criar uma "trava" para que não haja dois registros com o mesmo documento.
Isso é feito utilizando a restrição "unique", segue um exemplo:

```
  nome_da_coluna VARCHAR(11) UNIQUE, 
```


Ao criar a tabela relacionada a este enunciado, considere essa informação. Outra coisa importante a ser considerada na construção dessa tabela é que a coluna "created_at"
deve ter sempre a exata data e hora de quando o insert acontecer. Para isso, você precisa definir um default - como já foi apresentado em práticas anteriores. Contudo
em vez de passar um valor, será passada uma função - que é a NOW().

```
  nome_da_coluna DateTime default NOW()
```


Uma vez criada a tabela, efetue 10 registros. Observe que você não vai precisar passar um valor para "created_at". Ao longo da inserção dos 10 registros, você sempre
vai precisar passar registro com valor_documento diferente. No décimo primeiro registro, insira uma linha com valor igual a um dos registros anteriores para você
ver o que acontece. Ocoreu um erro? Esse é o comportamento esperado.
