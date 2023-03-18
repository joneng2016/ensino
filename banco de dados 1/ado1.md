# ADO1

1 Crie uma tabela com nome pet. Essa tabela deve ter quatro colunas: nome, idade, 
raça. Faça insert de três registros (fica a teu critério quais).

2 Crie uma tabela chamada registro_ponto. Essa tabela deve ter data (DateTime), nome_do_funcionario, horario_entrada, horario_saida_almoco, horario_entrada_almoco,
horario_saida_fim_expediente. Realize dez registros.

3 Crie uma tabela chamada refrigerantes. Dessa vez id_refrigerantes é algo essencial (deve ser primary key auto_increment). As demais colunas são: regrigerante (se é coca, pepsi - pode ser enum), volume_L (pode ser um double), quantidade (pode ser integer), data de registro. Faça cinco registros.

4 Veja os requisitos de uma empresa:

Uma empresa deseja um sistema que contenha o seguinte formulário para registro de
suas mercadorias:

nome, quantidade, vendedor_autorizado, tipo de medida (L, g, kg, quantidade), data_registro, data_atualizacao.


Você é um dev backend e chegou o momento de realizar o sql de criação dessa tabela. Para além disso, você tem que fazer 15 inserts para garantir que tudo há de funcionar bem.

Não se esqueça que nenhuma coluna pode ser NULL. Se o nome da mercadoria não for escrita, o default deve ser "não consta". Se o tipo de medida não for especificado - quantidade deve ser o default. A data de hoje, em data_registro e data_atualizacao devem ser default também