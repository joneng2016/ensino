# Aula 5

## Prova

__Semana do  09/05__

* API REST GET,POST,PUT,DELETE
* JWT

* Defesa de código ou questões?

## JWT

* Autenticação via JWT

## Criando a API

* Crie uma API nova: https://docs.nestjs.com/

```
git clone https://github.com/nestjs/typescript-starter.git project
cd project
npm install
npm run start
npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
npm install --save-dev @types/sequelize
npm install --save @nestjs/jwt
```

## Abra o banco de dados e execute o seguinte sql

https://github.com/joneng2016/learning-api/blob/master/db/scripts.sql



## Crie a Model da tabela Product

* Em src, faça o diretório ./src/models
* Crie o arquivo Product.ts

```
import {
  Column,
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  company: string;

  @Column
  price: number;

  @Column
  amount: number;
}
```

## Crie a Model da tabela User

* Em src, faça o diretório ./src/models
* Crie o arquivo User.ts

```
import {
  Column,
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  document: string;

  @Column
  phone: string;

  @Column
  address: string;
}
```
## Configurando a Model
```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/Product';
import { User } from './models/User';
import { JwtModule } from '@nestjs/jwt';

 @Module({
  imports: [
    JwtModule.register({
      secret: 'MySecresstKey',
      signOptions: { expiresIn: '1000s' },
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306, // 3306 para o banco rodando local, mas 3307 para o banco rodando no docker
      username: 'root',
      password: 'positivo', // tem que ser a senha definida para o seu banco de dados
      database: 'generaldbs',
      models: [Product, User],
    }),
    SequelizeModule.forFeature([Product, User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

## Dentro da Controller

* Faça a injeção das duas models no construtor

```
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Query,
  HttpCode,
  HttpStatus,
  Delete,
  Headers,
  HttpException
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './models/User';
import { Product } from './models/Product';
import { InjectModel } from '@nestjs/sequelize';

@Controller('products')
public constructor(
  @InjectModel(Product),
  private readonly product: typeof Product,         
  @InjectModel(User) 
  private readonly user: typeof User,
  private readonly appService: AppService,
  private readonly jwtService: JwtService,
) {}
```


## Vamos montar uma rota get

```
@Get()
  @HttpCode(HttpStatus.OK)
  public async getProducts(
    @Query('name') name,
  ) {
    return name
      ? this.product.findAll({
          where: {
            name,
          },
        })
      : this.product.findAll();
  }
```


## Vamos montar uma rota post

```
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public createProduct(@Body() body): object {
    this.product.create(body);
    return { message: 'Product created', body };
  }
```

## Agora vamos fazer o seguinte, no banco de dados - vamos rodar um insert na tabela user:


```
INSERT INTO Users
	(name, email, password, document, phone, address)
	VALUES
	('Nome nome','email@email.com','senha123','zzzz-zzz','0800 000 000', '123');

```


## Vamos fazer a injenção do JWT no construtor

```
import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './models/User';
import { InjectModel } from '@nestjs/sequelize';

@Controller('auth')
export class AppJwtController {
  public constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}
}
```


## Vamos montar a rota de login


```
  @Get('login')
  public async login(
    @Query('email') email,
    @Query('password') password,
  ): Promise<object> {
    const user = await this.user.findOne({
      where: {
        email,
        password
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
      token: await this.jwtService.signAsync({
        name: user.dataValues.name,
        email: user.dataValues.email,
        password: user.dataValues.password,
      }),
    };
  }
```

## Vamos realizar uma adaptação na rota GET

```
  @Get()
  @HttpCode(HttpStatus.OK)
  public async getProducts(
    @Query('name') name,
    @Headers('authorization') authorization
  ) {
    let user = this.jwtService.verify(authorization);

    user =  this.user.findOne({
      where: {
        email: user.email,
        password: user.password,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.appService.selectProduct(name);
  }
```


## Protegendo rota POST 

```
@Post() 
  @HttpCode(HttpStatus.CREATED)
  public createProduct(
    @Body() body,
    @Headers('authorization') authorization
  ): object {
    const userOfAuthorization = this.jwtService.verify(authorization)

    const user = this.user.findOne(
      {
        where: {
          email: userOfAuthorization.email,
          password: userOfAuthorization.password
        }
      }
    )

    if (!user) {
      throw new HttpException('User no found', HttpStatus.UNAUTHORIZED);
    }

    this.product.create(body)
    return {message: 'Product created', body}
  }
```
