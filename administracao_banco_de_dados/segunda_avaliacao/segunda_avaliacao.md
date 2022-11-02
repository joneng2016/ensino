# Segunda Avaliação - Segundo Semestre 2022

Nome da primeira tabela: Seu primeiro nome (exp, meu nome é Jonathan Morris Samara, logo o nome da primeira tabela deve ser jonathan)

Nome da segunda tabela: Seu último nome (exp, meu nome é Jonathan Morris Samara, logo o nome da segunda tabela deve deve ser samara)

A primeira tabela deve ter um campo id_(nome da primeira tabela), deve ser primary_key e auto_increment. Não apenas isso como essa tabela também deve ter o campo rg (pode ser tipo string 255)

A segunda tabela deve ter um campo id_(nome da segunda tabela), deve ser primary_key e auto_increment. Não apenas isso como essa tabela também deve ter o campo cpf (pode ser tipo string 255). Essa segunda tabela deve ter um id_(primeira tabela) que é foring key em relação a primeira tabela.

Você deve fazer quatro registros na primeira tabela (podem ser todos artificiais). Você deve fazer quatro registros na segunda tabela (podem ser todos artificiais). Você decide como os registros da segunda tabela se relacionam com os registros da primeira tabela, contudo esse relacionamento deve ocorrer necessariamente.

Faça a remoção de um registro da segunda tabela por meio de transaction.

Crie uma trigger nas seguintes situações:
1 - Gatilho: Insert na primeira tabela
2 - Execução: Insere na segunda tabela o seguinte: '088.000.999-99' como cpf e 1 como id_(nome da segunda tabela)

Crie um insert em ambas as tabelas (você está livre para definir os dados de insert tanto da primeira tabela como da segunda tabela). Esse insert deve ser feito mediante a transaction / commit. Faça dois cenários

1 - Execução nesta sequência: transaction -> rollback (deve estar no .sql)
2 - Execução nesta sequência: transaction -> commit (deve estar no .sql)

Criar uma procedure que traz um left join entre as duas tabelas.

Criar uma function que recebe como argumento o primeiro nome e retorna o segundo nome do indivídulo

Você deve entregar um arquivo .sql que apresenta os comandos relacionados as instruções trasmitidas nesse texto.

Scripts identicos serão zerados.

Data de Entrega: 02/12/2022 as 23:59

Análise do código será feita, logo códigos identicos serão zerados