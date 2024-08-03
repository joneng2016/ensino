# Avaliação do Primeiro Bimestre

Forneça um arquivo .sql com o seguinte:

1 Crie uma base de dados com nome hotel.


2 Crie três tabelas com a seguinte estrutura: 

reservas

id_reserva -> integer, primary_key e autoincrement,
data_entrada -> DateTime,
data_saida -> DatTime,
data_registro -> DateTime, default sendo sempre a data do instante do registro,
observacao -> text,
id_cliente -> integer (é chave estrangeira em relação a tabela cliente)


cliente

id_cliente -> integer, primary_key e autoincrement,
nome -> varchar, não pode ser null,
sobrenome -> varchar, não pode ser null
tipo_documento -> enum(cpf, rg, passaporte) -> default cpf
valor_documento -> não pode ser null,
endereco -> varchar e não pode ser null,
data_registro -> DateTime, default sendo sempre a data do instante do registro.



3 Altere a tabela reservas, remova a coluna observacao. Adicione a coluna "comentario_clientes" sendo varchar.


4 Faça insert de três clientes e de cinco reservas.


5 Faça um update do nome de três registros de clientes.


6 Monte os SELECT(s) se consegue obter o nome do cliente tendo como base o id_reserva.