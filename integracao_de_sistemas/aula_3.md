# Aula 3

## Retrospectiva

* Método de Avaliação
* Apresentação do método POST
* Conceito de Models
* Conceito de DTOs
* Insert com POST


## Resolução do Exercício - 5 min

Crie uma tabela que represente os produtos de um mercado. Deve conter informações como nome, empresa, quantidade e preço. Crie, usando models, service e controllers uma rota POST que faz o inser deste objeto



```
drop table ProdutoMercados;
create table ProdutoMercados (
	id int primary key auto_increment,
	nome varchar(100),
	empresa varchar(100),
	quantidade integer,
	preco float,
	createdAt DATETIME, 
	updatedAt DATETIME
);

```

```
export class ProdutoMercadoDTO {
    public nome: string;
    public empresa: string;
    public quantidade: number;
    public preco: number;
}

```


```
import {
  Column,
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
  
@Table
export class ProdutoMercado extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  empresa: string;

  @Column
  quantidade: number;

  @Column
  preco: number;
}
```


```
@Controller()
export class AppController {
  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking,
    @InjectModel(ProdutoMercado)
    private produtoMercado: typeof ProdutoMercado,
    private readonly appService: AppService,
  ) {}
```

```
  @Post("/produto-mercado")
  createProdutoMercado(
    @Body() body :ProdutoMercadoDTO
  ): ProdutoMercadoDTO {
    this.produtoMercado.create({
      nome: body.nome,
      empresa: body.empresa,
      quantidade: body.quantidade,
      preco: body.preco
    })

    return body
  }
```

## Aula de Hoje

* Revisar aula 11/03
* Conceito GET
* Apresentar o conceito de PUT
* Exemplo do conceito de PUT
* Apresentar o conceito de DELETE
* Exemplo do conceito de DELETE



## Executando Gets - 10 min

```
create database testing; 
use testing;

CREATE TABLE Bookings (
	id integer primary key auto_increment,
	title varchar(255),
	authorEmail varchar(255),
	createdAt DATETIME,
	updatedAt DATETIME
);
```

Crie a model em dtos/models

```
import {
  Column,
  Model,
  Table,
2  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Booking extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @Column
  authorEmail: string;
}
```


Se a rota POST não existir, crie uma rota simples rapidinho

## Concebendo uma rota POST
```
import { ... Body, ... } from '@nestjs/common';
```
```

@Post('/insert-object')
  insertObject(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ) {
    const { title, content, authorEmail } = postData;

    return {
      result: {
        title,
        content,
        authorEmail,
      },
    };
  }
```



```
@Get('/booking')
  async getBooking(): Promise<Booking[]> {
    return this.booking.findAll();
  }

  @Get('/booking/:id')
  async getBookingById(@Param('id') id: number): Promise<Booking[]> {
    return this.booking.findAll({
      where: {
        id,
      },
    });
  }

  @Get('/booking-querystring')
  async getBookingByQueryString(@Query('id') id: number): Promise<Booking[]> {
    return this.booking.findAll({
      where: {
        id,
      },
    });
  }
```



## Concebendo uma rota PUT - 20 min

Crie o dto

```
export class BookDTO {
  public title: string;
  public content?: string;
  public authorEmail: string;
}

```


Vamos criar as validações

```
private validation(
    id: number,
    body: BookDTO
  ) {
    this.validationIdElement(id)
    this.validationBody(body)
  }

  private validationIdElement(id: number) {
    if(!id) {
      throw new HttpException(
        'Server Error - id Request not found', 
        HttpStatus.BAD_REQUEST
      )
    }
  }

  private validationBody(body: BookDTO) {
    if (!Object.keys(body).length) {
      throw new HttpException(
        'Server Error - Body Request not found', 
        HttpStatus.BAD_REQUEST
      );
    }
  }
```


Crie a classe de Resposta

```
import { BookDTO } from './BookDTO';

export class ResponseUpdateBooking {
  public message: string;
  public booking: BookDTO;

  public constructor(booking: BookDTO) {
    this.message = "This update of this bookings is success";
    this.booking = booking;
  }
}
```


Dentro do app service, crie: 

```
  async putBooking(
    id: number,
    putData: BookDTO
  ) {
    const booking = await this.booking.findOne({
      where: {
        id,
      }
    });

    if (!booking) {
      throw new HttpException(
        'Not Found booking to this id', 
        HttpStatus.NOT_FOUND
      );
    }

    return await booking.update(putData);
  }
```


Vamos agora conceber a controller


```
  @Put('/booking')
  async putBooking(
    @Query('id') id: number,
    @Body() body: BookDTO,
  ) : Promise<ResponseUpdateBooking> {
    this.validation(id, body);

    return new ResponseUpdateBooking(
      await this.appService.putBooking(id, body)
    ); 
  }
```

## Atividades PUT 40min

Atividade: Crie uma nova controller PUT para que o update não seja feito mediante ao id, mas sim mediante ao authorEmail

Atividade: Em relação a tabela ProdutoMercados crie uma rota PUT que faça o update de um determinado registro, hora por id hora por produto. Considere as validações e tratativas de exceção.

## Delete 10 min

Service

```
  async deleteBooking(id: number) {
    const booking = await this.booking.findOne({
      where: {
        id,
      }
    });

    if (!booking) {
      throw new HttpException(
        'Not Found booking to this id', 
        HttpStatus.NOT_FOUND
      );
    }

    return await booking.destroy();
  }
```


Controller

```
  @Delete('/booking')
  async deleteBooking(
    @Query('id') id: number,
  ) : Promise<ResponseDeleteDTO> {
    this.validationIdElement(id);
    this.appService.deleteBooking(id);

    return new ResponseDeleteDTO();
  }
```

## Atividade Delete 20 min

Crie uma rota delete que executa a remoção de booking tendo como base o title.

Na concepção da tabela ProdutoMercados, execute a remoção do registro tendo como base o nome. Crie toda a camada de validação de inputs.