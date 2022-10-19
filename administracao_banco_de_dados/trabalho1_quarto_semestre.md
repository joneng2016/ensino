# Trabalho 1/Quarto Semestre

## Criação das Tabelas

### Criar duas tabelas.

Nome da primeira tabela: Seu primeiro nome (exp, meu nome é Jonathan Morris Samara, logo o nome da primeira tabela deve ser jonathan)

Nome da segunda tabela: Seu último nome (exp, meu nome é Jonathan Morris Samara, logo o nome da segunda tabela deve deve ser samara)


### Estrutura das tabelas

A primeira tabela deve ter um campo id_(nome da primeira tabela), deve ser primary_key e auto_increment. Não apenas isso como essa tabela também deve ter o campo rg (pode ser tipo string 255)

A segunda tabela deve ter um campo id_(nome da segunda tabela), deve ser primary_key e auto_increment. Não apenas isso como essa tabela também deve ter o campo cpf (pode ser tipo string 255). Essa segunda tabela deve ter um id_(primeira tabela) que é foring key em relação a primeira tabela.


Você deve fazer quatro registros na primeira tabela (podem ser todos artificiais). Você deve fazer quatro registros na segunda tabela (podem ser todos artificiais). Você decide como os registros da segunda tabela se relacionam com os registros da primeira tabela, contudo esse relacionamento deve ocorrer necessariamente.

Faça a remoção de um registro da segunda tabela por meio de transaction.F
Crie uma trigger nas seguintes situações:
1 - Gatilho: Insert na primeira tabela
2 - Execução: Insere na segunda tabela o seguinte: '088.000.999-99' como cpf e 1 como id_(nome da segunda tabela)

Você deve entregar um arquivo .sql que apresenta os comandos relacionados as instruções trasmitidas nesse texto.