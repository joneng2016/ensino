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

### Processo 1 - Compra coletiva

Leia atentamente o texto abaixo e faça a modelagem do(s) processo(s) usando a notação BPMN.

Em um site de compra coletiva, são publicadas ofertas de diversos estabelecimentos com um super desconto.

Toda oferta possui título, descrição, regulamento, valor real do produto/serviço, valor da oferta, quantidade mínima de compradores, quantidade máxima de compradores, quantidade máxima de compras por usuário, data/hora de início e data/hora de término.

As ofertas podem ser publicadas para uma ou mais cidades e sempre estão vinculadas a um único estabelecimento. Os estabelecimentos possuem nome, razão social, telefone, CNPJ, e-mail e responsável. As cidades possuem um nome e uma informação que marca se serão exibidas no site ou não.

Para comprar, os visitantes do site de compra coletiva devem se cadastrar informando nome, e-mail e as cidades das quais querem receber ofertas. No ato da compra, o usuário deve informar a quantidade de ofertas que deseja comprar, além de ser necessário armazenar a data/hora da compra.

Todo usuário pode indicar o site para outras pessoas, a fim de ganhar crédito de um determinado valor quando estas realizarem a primeira compra. Assim, os créditos podem ser utilizados na realização da compra.

Sempre que um novo crédito é atribuído a um usuário, é necessário saber o valor creditado, a compra e o usuário que deram origem ao crédito.

Após o encerramento da oferta, são gerados cupons para cada compra realizada, caso o número de compras da oferta tenha ultrapassado a quantidade mínima de compradores. Cada cupom possui identificação única, data de início da validade, data de fim da validade e data/hora em que foi gerado. É essencial saber de qual compra o cupom foi gerado.

De: https://www.leandroguarino.com.br/modelagem-processos-negocios-bpmn/exercicio-de-modelagem-de-processos-de-negocios-04/


### Processo 2 - Feira de Aparecida

Leia atentamente o texto abaixo e faça a modelagem do(s) processo(s) usando a notação BPMN.

Um comerciante da feira de Aparecida trabalha aos finais de semana e feriados e vende brinquedos e aparelhos eletrônicos.

Toda sexta-feira ou um dia antes de um feriado, ele carrega sua barraca, leva-a para o local da feira, monta-a, posiciona seus produtos e fecha-a com uma lona.

Nos dias de venda (sábado, domingo ou feriado), por volta das 5h da manhã, ele vai até o local da barraca e retira a lona para começar as atividades.

Quando um cliente chega, ele o aborda perguntando se está procurando algum produto específico. Se a conversa com o cliente for convertida em venda, ele testa o(s) produto(s) comprado(s) na frente do cliente e, se estiverem funcionando perfeitamente, coloca-o(s) na caixa específica, coloca as caixas em uma sacola, recebe o pagamento do cliente (em dinheiro), dá o troco (se necessário) e entrega a sacola ao cliente.

Caso algum produto testado dê problema, o comerciante separa-o para tentar arrumar posteriormente e pega outra unidade do mesmo produto para o cliente.

Ao final de cada dia de vendas, o comerciante organiza novamente os produtos e fecha a barraca com a lona.

Se for o último dia, ele guarda os produtos, desmonta a barraca e transporta-a para sua residência.


### Critérios Avaliativos

* 0,125 - Conter tarefas e atividades
* 0,125 - Conter eventos eventos de início, eventos intermediários, eventos de fim.
* 0,125 - Apresentar fluxos convergentes e divergentes
* 0,125 - Ter pelo menos um dos seguintes gateways: inclusivos, Paralelo, Exclusivo, Baseados em Eventos.
* 0,125 - Apresentar Erros e exceções
* 0,125 - Conseguir explicar todo o fluxo
* 0,125 - Respeitar o tempo da apresentação com uma ordem de erro de +/- 2 minutos (Do processo 1 e do processo 2 dentro do tempo total)
* 0,125 - Conseguir responder com exatidão todas as perguntas feitas pelo professor e pelos colegas ao término da apresentação

É válido para os dois processos.

-> Valendo 1 ponto

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
    @Body() postData,
  ) {
    this.booking.create({
      title: postData.title,
      content: postData.content,
      authorEmail: postData.authorEmail,
    });

    return {msg: "Response is success"}
  }
```


## Executando Gets

```
@Get('/booking')
  async getBooking() {
    return this.booking.findAll();
  }

  @Get('/booking/:id')
  async getBookingById(@Param('id') id: number) {
    return this.booking.findAll({
      where: {
        id,
      },
    });
  }

  @Get('/booking-querystring')
  async getBookingByQueryString(@Query('id') id: number) {
    return this.booking.findAll({
      where: {
        id,
      },
    });
  }
```

##  PUT 
```
  @Put('/booking')
  async putBooking(
    @Query('id') id: number,
    @Body() body,
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

    await booking.update(body);

    return {msg:'success'}
  }
```
## Delete


Controller

```
  @Delete('/booking')
  async deleteBooking(
    @Query('id') id: number,
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

    await booking.destroy();

    return {
  	msg: "success"
    }
  }
```
