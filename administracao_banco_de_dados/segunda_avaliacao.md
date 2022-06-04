# Segunda Avaliação


## Consturção do Banco de Dados


Criar um banco de dados que será utilizado por um sistema de registro de estoque - esse banco deve ter as seguintes tabelas
* usuários
* cargos
* usuarios_produtos
* produtos
* empresa
* clientes
* clientes_produtos
*Os nomes não precisam ser esses especificamente*


A tabela *usuários* faz referência aos usuários do sistema (os usuários que podem acessar o sistema). Essa tabela deve conter informações como nome, endereço, cargo do usuário.
A tabela de "cargos" indica os possíveis cargos da empresa (estoquista, vendedor, secretário). Essa tabela deve guardar relação com a tabela usuários. Pense bem na natureza dessa relação porque 1 cargo pode ser atribuído a mais de um usuário (João é vendedor, Fábio é vendedor). Isso vai te dar um norte de como se dá relação de chave estrangeira.


A tabela de "produto" deve conter o nome do produto, o preço de compra, o preço de venda e a quantidade.


A tabela empresa contém a empresa que fabrica um determinado produto. Para exemplificar, vamos supor que o nosso sistema é usado por um mercado - este vende os seguintes produtos:


* Achocolatado -> Nescau
* Chocolate -> Nescau
* Café -> Caboclo
*Água -> Ouro Fino


Então nós temos quatro produtos que são fornecidos por três empresas. Por conta disso, a tabela empresa terá o registro de Nescau, Caboclo e Ouro Fino. Já a tabela de produtos terá registros de Achocolatado, Chocolate, Café e Água.
Deve haver uma uma tabela de "clientes" que contém o registro dos cliente que compram determinado produto. Essa tabela deve conter informações básicas do cliente como nome, cpf/cnpj, endereço. Como o interesse é descobrir qual cliente compra qual produto - deve haver uma relacionamento entre ambos. Contudo 1 cliente pode comprar mais de um produto e um produto pode ser comprado por mais de 1 cliente. Em banco de dados esse tipo de situação é resolvida com uma terceira tabela chamada de clientes_produtos que contém o id_cliente, id_produto


Assim sendo, os registros ficam da seguinte espécie


cliente 1
cliente 2
cliente 3
produto 1
produto 2
cliente 1 compra produto 1 e produto 2
cliente 2 compra produto 2 e produto 3
cliente 3 compra produto 1


Assim sendo, a tabela clientes_produtos fica aproximadamente dessa forma:


```
cliente_id | produto_id
1          | 1
1          | 2
2          | 2
2          | 3
3          | 1
```


Os usuários do nosso sistema são funcionários da empresa. Precisamos saber quais desses usuários podem vender os produtos. Esse tipo de relação tem a mesma natureza da cliente_produto uma vez que 1 usuário pode vender 1 produto ou mais e um produto pode ser vendido por um usuário ou mais. Por isso vamos usar a mesma solução do problema anterior.


## Registros


Registre pelo menos cinco usuários (os inserts devem estar no .sql).
Deve haver quatro cargos - secretário, vendedor, gerente e diretor.
Registre pelo menos 6 produtos de pelo menos três empresas diferentes.
Registre pelo menos 2 clientes. Escolha do seu interesse como esses clientes estabelecem vínculos com os produtos.
Os usuários que têm relação com os produtos são de todos os cargos menos o de secretário.
Todos os registros precisam ser feitos da forma mais eficiente possível


## Consturção das Queries


1 - Query traz o nome do cargo, o nome do usuário, o nome do produto - trazer todos.
2 - Query traz o nome do cargo, o nome do usuário, o nome do produto - trazer para o nome de um produto específico.
3 - Query traz o nome do cliente, a empresa do cliente, o nome do produto que o cliente consome, o telefone do cliente e a quantidade do produto em estoque - trazer todos.
3 - Query traz o nome do cliente, a empresa do cliente, o nome do produto que o cliente consumo, o telefone do cliente e a quantidade do produto em estoque - trazer para o nome de um cliente específico (pelo nome).
4 - Query traz o nome do cliente, a empresa do cliente, o nome do produto que o cliente consome, o telefone do cliente e a quantidade do produto em estoque - trazer para um conjunto de clientes (veja in) pelo nome - adicione 2.
5 - Query traz o nome do cliente, a empresa do cliente, o nome do produto que o cliente consumo, o telefone do cliente e a quantidade do produto em estoque - trazer para um conjunto de clientes (veja in) pelo nome - adicione 2 com limite de 3 registros
6 - Query traz o nome do cliente, a empresa do cliente, o nome do produto que o cliente consumo, o telefone do cliente e a quantidade do produto em estoque - trazer para um conjunto de clientes (veja in) pelo nome - adicione 2 com a ordenação orientada pela quantidade de produtos sendo essa descendente.
7 - Query traz o nome do cliente, a empresa do cliente, o nome do produto que o cliente consumo, o telefone do cliente e a quantidade do produto em estoque - trazer para um conjunto de clientes (veja in) pelo nome - adicione 2 com a ordenação orientada pelo preço de compra (do maior para o menor).
 
 
## Conteúdos que serão avaliados e medidos.


* Criação de Base de Dados/Tabelas
* Insert
* Constraints e Foreign Key
* Select
* Joins
* Order
* Limit
 
 

