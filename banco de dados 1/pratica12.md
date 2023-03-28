# Prática 12

Uma das vantages de se fazer uso do MySQL é o fato de ser um banco relacional. Isso significa que nós podemos construir relações entre as estruturas. Dentro do MySQL
isso é dado por um _restrição_ chamada _foreign key_ , ou seja "_chave estrangeira_".


Dado isso, execute o seguinte exercício: Uma empresa está construindo um sistema para operacionalizar seus produtos. Esse sistema deve conter duas tabelas, uma tabela
chamada de funcionarios e a outra tabela chamada de cargo. Cada vendedor pode ter um cargo e issso precisa estar definido, de alguma forma, na estrutura de tabelas do
banco de dados da empresa. Logo, para isso podemos definir duas tabelas: 

cargos: id_cargo, nome_cargo, descricao
funcionarios: id_produto, nome_produto, empresa_fabricante, id_cargo

Onde id_cargo é uma maneira de relacionar a tabela cargo com a tabela funcionaros. Logo, crie essas tabelas usando chave estrangeia em id_cargo. Depois disso reproduza
cinco registros em cargos (você pode criar tal como, vendedor, gerente, coordenador, professor, desenvolvedor ...). Em funcionarios, defina 10 registros de possíveis
funcionários (você pode definir como se dá o registro desses funcionários).
