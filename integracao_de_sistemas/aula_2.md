# Aula 2

## Descrição da Avaliação 1 - 02/04 ou 03/04

1 - Uma loja que vende produtos eletrônicos.

2 - Esses produtos são organizados mediante a uma tabela com a seguinte natureza: nome (nome do produto), empresa (empresa do produto), descrição (descrição do produto), quantidade (quantidade do produto), marca (marca do produto), valor (valor do produto)

3 - Crie uma rota get que exibe todos os produtos

4 - Crie uma rota get que exibe apenas os produtos especificados por meio do nome, mediante querystring

5 - Crie uma rota post que faz o insert de produtos novos

6 - Crie uma rota put que faz update dos produtos

7 - Crie uma rota delete que faz a remoção dos produtos

Pode fazer na linguagem/framework que se sentir mais confortável.

Critérios de avaliação:

1 -  NOTA: 0,31 - Funcionamento da rota get/3
2 -  NOTA: 0,31 - Funcionamento da rota get/4
3 -  NOTA: 0,31 - Funcionamento da rota post/5
4 -  NOTA: 0,31 - Funcionamento da rota put/6
5 -  NOTA: 0,31 - Funcionamento da rota delete/7
6 -  NOTA: 0,31 - Defender corretamente o funcionamento da rota get/3
7 -  NOTA: 0,31 - Defender corretamente o funcionamento da rota get/4
8 -  NOTA: 0,31 - Defender corretamente o funcionamento da rota post/5
9 -  NOTA: 0,31 - Defender corretamente o funcionamento da rota put/6
10 - NOTA: 0,31 - Defender corretamente o funcionamento da rota delete/7
11 - NOTA: 0,31 - Todos os integrantes do grupo devem apresentar
12 - NOTA: 0,31 - O tempo da apresentação deve ser respeitado

## Resolver o exercício da aula anterior

3 - Crie um arquivo em sua máquina, esse arquivo deve conter uma lista de 10 itens, da seguinte forma:

comida:Hamburguer,preco:10,00
comida:Pizza,preco:15,00

-> os demais intens é liberdade criativa sua.

Depois disso, crie uma rota get recebe o nome da comida e, então, le o arquivo. Por sua vez, retorna o preço da comida em estrutura JSON. Considere fazer a regra de negócio em uma Controller.

```
@Get('/food/:nameFood')
  readFileFood(@Param('nameFood') nameFood: string) {
    const content = fs.readFileSync('./file/f.txt', 'utf8');

    const lineObjects = content.split('\n').map((line) => {
      const parts = line.split(',');
      const nameValueFirst = parts[0].split(':');
      const nameValueSecond = parts[1].split(':');

      const toReturn = { comida: '', preco: '' };

      toReturn[nameValueFirst[0]] = nameValueFirst[1];
      toReturn[nameValueSecond[0]] = nameValueSecond[1];

      return toReturn;
    });

    return lineObjects.find((item) => item.comida === nameFood);
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

```
mkdir /tmp/mysql-data
```

```
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```


```
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
      port: 3307,
      username: 'root',
      password: 'ANSKk08aPEDbFjDO',
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

## Exercício

Crie uma tabela que represente os produtos de um mercado. Deve conter informações como nome, empresa, quantidade e preço. Crie, usando models, service e controllers uma rota POST que faz o inser deste objeto