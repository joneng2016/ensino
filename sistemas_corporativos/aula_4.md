# Aula 4

## Retrospectiva

* 3 Exposição: Semânticas específicas
* 3.1 Gateways inclusivos
* 3.2 Gateways paralelos
* 3.3 Erros e exceções
* 3.4 Cancelamento de atividades


## Hoje

* Get
* Post
* Put
* Delete


## Avaliação 1



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

## Rota POST com entidade

Cria um diretório para os dtos
```
mkdir dtos;
cd dtos;
```

Crie o DTO BookDTO

```
export class BookDTO {
  public title: string;
  public content?: string;
  public authorEmail: string;
}
```

Crie o DTO ResponseBookDTO


```
import { BookDTO } from './BookDTO';

export class ResponseBookDTO {
  result: BookDTO;
}
```

Crie a controller
```
import { BookDTO } from './dtos/BookDTO';
import { ResponseBookDTO } from './dtos/ResponseBookDTO';
```

```
  @Post('/insert-object-with-dto')
  insertObjectWithDTO(@Body() postData: BookDTO): ResponseBookDTO {
    const responseBookDTO = new ResponseBookDTO();

    responseBookDTO.result = postData;

    return responseBookDTO;
  }
```

## Provisionando banco

Se for fazer com docker
```
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```

Se não, abra a ide de Banco de Dados do seu computador e execute diretamente a query que se segue


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


## Instalando os pacotes

```
  npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
  npm install --save-dev @types/sequelize
```

## Criar as models

```
mkdir models;
cd models;
```

Crie um arquivo chamado "Booking.ts"

```
import {
  Column,
  Model,
  Table,
  AutoIncrement,
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

Em dtos, crie o arquivo ResponseCreateBooking.ts

```
import { BookDTO } from './BookDTO';

export class ResponseCreateBooking {
  public message: string;
  public booking: BookDTO;

  public constructor(message, booking: BookDTO) {
    this.message = message;
    this.booking = booking;
  }
}
```


Em app.module, crie: 

```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './models/Booking';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306, // 3306 para o banco rodando local, mas 3307 para o banco rodando no docker
      username: 'root',
      password: 'ANSKk08aPEDbFjDO', // tem que ser a senha definida para o seu banco de dados
      database: 'testing',
      models: [Booking],
    }),
    SequelizeModule.forFeature([Booking]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```


Nas controlles, faça a injeção de dependência da controller

```
import { InjectModel } from '@nestjs/sequelize';
```

```
  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking,
    private readonly appService: AppService,
  ) {}
``` 

Crie a controller

```
  @Post('/booking')
  async createBooking(
    @Body() postData: BookDTO,
  ): Promise<ResponseCreateBooking> {
    this.booking.create({
      title: postData.title,
      content: postData.content,
      authorEmail: postData.authorEmail,
    });

    return new ResponseCreateBooking('the insert was successfulll', postData);
  }
```


## Usando Services

Em app.service.ts

```
import { Injectable } from '@nestjs/common';
import { Booking } from './models/Booking';
import { InjectModel } from '@nestjs/sequelize';
import { BookDTO } from './dtos/BookDTO';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createBooking(postData: BookDTO) {
    this.booking.create({
      title: postData.title,
      content: postData.content,
      authorEmail: postData.authorEmail,
    });
  }
}
```
`

A controller fica:

```
  @Post('/booking-service')
  async createBookingWithService(
    @Body() postData: BookDTO,
  ): Promise<ResponseCreateBooking> {
    this.appService.createBooking(postData);
    return new ResponseCreateBooking('the insert was successfulll', postData);
  }
```


## Executando Gets

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