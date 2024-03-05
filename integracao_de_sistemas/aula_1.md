# Criação de uma API no modelo MVC - Encontro 1

* Abra o powershell
* Verifique se o node está corretamente instalado
* Verifique se o npm está corretamente instalado
* Faça npm i express - verá que uma pasta chamada node_modules foi criada
* Adicione o seguinte bloco de código:

```
const express = require("express")
```

* Para executar o programa, faça: node app1.js
* Vamos ver se o objeto foi criado corretamente, para isso faça:

```
const app = express()

console.log(app)
```

* Execute o programa digitando na linha de comando node app.js


## Criando uma rota get

```
const port = 3000

app.get("/", (req, res) => {
    const message = "this route is used only to show some data"

    res.send(message)
})

app.listen(port, () => console.log("api is up"))
```


## Processando query string


```
app.get("/plus_two_values", (req, res) => {
    let valueOne = parseFloat(req.query.valueOne ? req.query.valueOne : '0') 
    let valueTwo = parseFloat(req.query.valueTwo? req.query.valueTwo : '0')

    const message = `The Result: ${valueOne + valueTwo}`

    res.send(message)
})
```


## Executando um retorno JSON

```
app.get("/find_age_by_list_name", (req, res) => {
    const nameToFind = req.query.name

    const list = [
        {name: 'Jorge', age:20},
        {name: 'Armando', age:10},
        {name:'Fabio', age:24},
        {name:'Alexandre', age:35}
    ]

    const response = {
        result:list.find(e => e.name === nameToFind) 
    }
    
    res.json(response)
})
```


## Definindo o programa em termos de DTO e Controller

```
class CatDTO {
    constructor(
        listOfCats
    ) {
        this.listOfCats = listOfCats
    }

    getListOfCats() {
        return this.listOfCats
    }
}


class CatController {
    constructor(catDTO) {
        this.catDTO = catDTO
    } 

    findAllCats(req, res) {
        if (!req.query.catName) {
            res
                .status(400)
                .json(
                    {
                        message:"define the name of cat in queryString catName, please"
                    }
                )

            return 
        }


        const cats = this.catDTO.getListOfCats()
            .filter(
                e => e.catName === req.query.catName
            )

        cats.length > 0 ? res.json(cats) : res.status(404).json({message:"cat not found"})
    }
}


const cat = new CatController(
    new CatDTO(
        [
            {catName: 'Miau', tutor: "Jorge"},
            {catName: 'Tom', tutor: "Alex"},
            {catName: 'Frajola', tutor: "Witon"},
            {catName: 'Bola de Neve', tutor: "Orlando"},            

        ]
    )
)


app.get("/cat", (req, res) => {
    cat.findAllCats(req, res)
})
```



## Configurando o Nest JS

```
$ npm i -g @nestjs/cli
$ nest new project-name

```

https://docs.nestjs.com/



## Na controller

```
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('my_first_controller')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('doc_information/:name')
  docInfo(@Param('name') name: string) {
    const returnOfClient = [
      { name: 'Joao', doc: '123456789', age: 25 },
      { name: 'Maria', doc: '987654321', age: 30 },
      { name: 'Jose', doc: '456789123', age: 40 },
    ];

    return returnOfClient.find((client) => client.name === name);
  }
}
```



### Exercícios

1 - Crie uma rota get que resolve uma equação do segundo grau mediante a fórmula de bascara - https://brasilescola.uol.com.br/matematica/equacao-2-grau.htm
2 - Crie uma rota get que contem uma lista com 10 livros de objetos na segunda estrutura: 
* nome_livro
* autor
* descricao
Essa rota deve receber um input com a seguinte informação "autor" e deve retornar todos os livros deste
3 - Crie um arquivo em sua máquina, esse arquivo deve conter uma lista de 10 itens, da seguinte forma:

comida:Hamburguer,preco:10,00 <br>
comida:Pizza,preco:15,00

-> os demais intens é liberdade criativa sua.

Depois disso, crie uma rota get recebe o nome da comida e, então, le o arquivo. Por sua vez, retorna o preço da comida em estrutura JSON. Considere fazer a regra de negócio em uma Controller. 
