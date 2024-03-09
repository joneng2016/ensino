import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { BookDTO } from './dtos/BookDTO';
import { ResponseBookDTO } from './dtos/ResponseBookDTO';
import { ResponseCreateBooking } from './dtos/ResponseCreateBooking';
import { AppService } from './app.service';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/Booking';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

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


  // criar um diretório para os dtos
  // Criar as entidades
  // Definindo o body
  // Enquadrando retorno com base em uma 'entidade
  @Post('/insert-object-with-dto')
  insertObjectWithDTO(@Body() postData: BookDTO): ResponseBookDTO {
    const responseBookDTO = new ResponseBookDTO();

    responseBookDTO.result = postData;

    return responseBookDTO;
  }

  //
  // mkdir /tmp/mysql-data
  // docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
  //

  //npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
  //npm install --save-dev @types/sequelize
  // criar as models
  // digitar npm install sequelize-typescript
  // adicionar o Booking aos modules
  // conceber a controller de insert
  // adiciona a injeção de dependência

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

  @Post('/booking-service')
  async createBookingWithService(
    @Body() postData: BookDTO,
  ): Promise<ResponseCreateBooking> {
    this.appService.createBooking(postData);
    return new ResponseCreateBooking('the insert was successfulll', postData);
  } 

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
}
