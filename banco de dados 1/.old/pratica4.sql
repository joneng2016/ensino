Na última aula tivemos contato com o comando source, esse comando é utilizado para executa
scripts SQL. Para além disso, usamos esse comando também para carregar backups em arquivos 
.sql. 

Nesta aula vamos praticar um pouco mais o comando source. Para isso vamos fazer um seguinte: crie
um arquivo em seu computador (você pode escolher o diretório, a ide que deseja usar para estruturar
esse arquivo). É necessário que o final do nome do arquivo seja .sql . Outra coisa importante é que
o endereço de acesso a esse arquivo não pode ser muito grande. Isso se deve ao fato de que o comando
source não pode ser executado para endereços muito grande, então segue exemplo de boas práticas:

C:\\meussql\aula24022023.sql


Esse arquivo deve executar as seguintes instruções em sql:

Cria uma base de dados com o seguinte nome: db_food_company
Acessa essa base de dados
Cria uma tabela, dentro dessa base de dados, com a seguinte estrutura: 

nome da tabela é -> empresa
deve conter as seguintes colunas:
id_empresa (deve ser um integer),
nome (deve ser um varchar(255)),
endereco (deve ser um varchar(255))

nome da segunda tabela é -> produto
deve conter as seguintes colunas:
id_produto (iteger)
nome_produto (varchar255)
quantidade_produto (integer) 
peso (float)
id_empresa (deve ter o id da tabela empresa)


Depois disso, leia o seguinte tutorial sobre insert:

https://www.w3schools.com/sql/sql_insert.asp

E então execute o seguinte desafio:

Faça uma inserção de um registro na tabela empresa (pode ser o que você quiser, mas 
se você tiver sem ideia, use Nescau)

Por exemplo, o registro é
1, nescau, (são paulo ... invente)

Como produto:
id_produto -> 1,
nome_produto -> Achocolatado
quantidade_produto -> 30
peso -> 200 (g, mas n precisa especificar o g, pois é subentendido),
id_empresa -> 1


Depois acesso o banco de dados via linha de comando 
e execute o comando source apontando para o script que você acabou de criar 

