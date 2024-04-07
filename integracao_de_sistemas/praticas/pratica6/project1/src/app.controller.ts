import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { ProdutoMercadoDTO } from './dtos/ProdutoMercadoDTO';
import { BookDTO } from './dtos/BookDTO';
import { ResponseBookDTO } from './dtos/ResponseBookDTO';
import { ResponseCreateBooking } from './dtos/ResponseCreateBooking';
import { ResponseUpdateBooking } from './dtos/ResponseUpdateBooking';
import { ResponseDeleteDTO } from './dtos/ResponseDeleteDTO';
import { AppService } from './app.service';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/Booking';
import { ProdutoMercado } from './models/ProdutoMercado';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking,
    @InjectModel(ProdutoMercado)
    private produtoMercado: typeof ProdutoMercado,
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

  @Delete('/booking')
  async deleteBooking(
    @Query('id') id: number,
  ) : Promise<ResponseDeleteDTO> {
    this.validationIdElement(id);
    this.appService.deleteBooking(id);

    return new ResponseDeleteDTO();
  }

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
}
