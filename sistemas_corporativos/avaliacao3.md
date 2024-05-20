# Avaliação 3

* Usando react (nos moldes da aula 6) crie uma tela que tenha os seguintes inputs:

* * Um formulário para receber os dados de nome, usuário e dados de produto
<img src="fig/aval31.png">

* * Se autenticação funcionar, então deve ser exibido informações conforme a seguinte tela:
<img src="fig/aval32.png">

* * Se a autenticação falhar, exibir uma mensage de erro.


* O front deve submeter as informações do input para a product-api: https://github.com/joneng2016/learning-api/tree/master/product-api

* Tutorial para executar a product-api está em: https://github.com/joneng2016/learning-api/blob/master/start.md

Lembre-se que no momento do submite, duas operações serão executados para a product-api. Uma é de autenticação, na rota login/auth (usar um dos usuários descritos em https://github.com/joneng2016/learning-api/blob/master/db/scripts.sql), e a outra é a post que escreve os dados no banco POST localhost:3005/products  com header do token e com o payload {name, description, company, price, amount}

* A exibição do trabalho será feita mediante defesa de código.
* Será feita no dia 06/06/2024
* Individual
* Aluno terá 10 min para apresentar