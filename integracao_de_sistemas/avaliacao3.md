# Avaliacao 3

Crie uma api que faça as seguintes operações:

* Faça a chamada para a product-api que se faz disponível no repositório learning-api, deste mesmo git por meio de uma classe de Client conforme descrito na aula 6. 

* * Execute o seguinte tutorial: https://github.com/joneng2016/learning-api/blob/master/start.md

* Contem uma rota tipo post que passa o seguinte payload:
```
{
    user: __usuário conforme a base de dados__,
    password: __password conforma base de dados__,
    products: [
        {
            name: 'Produto 7',
            description: 'Description 7',
            company: 'Company 7',
            price: 10.00,
            amount: 4
        },
        {
            name: 'Produto 8',
            description: 'Description 8',
            company: 'Company 8',
            price: 10.00,
            amount: 4
        },
        {
            name: 'Produto 9',
            description: 'Description 9',
            company: 'Company 9',
            price: 10.00,
            amount: 4
        }
    ]
}
```

* Essa rota deve autenticar o login da product-api, deve escrever os três produtos e também deve retornar todos os produtos registrados na base inclusive os que são referenciados no sql do seguinte tutorial:  https://github.com/joneng2016/learning-api/blob/master/start.md em https://github.com/joneng2016/learning-api/blob/master/db/scripts.sql.


* O trabalho será apresentando mediante defesa de código. O tempo da defesa levará 5 min. Para alem da defesa, o aluno deverá apresentar o serviço funcionando.

* Entrega para o dia 28/05/2024 - para a turma de terça-feira
* Entrega para o dia 29/05/2024 - para a turma de quarta-feira