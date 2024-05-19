# Aula 6

## Organização do consumo dos serviços em clients

## Suba a Product-api/ User-api

https://github.com/joneng2016/learning-api/blob/master/start.md

## Criando uma nova api

* Crie uma API nova: https://docs.nestjs.com/

```
git clone https://github.com/joneng2016/learning-api
cp -r /learning-api/framework_of_class/nest_node183_framework/ name_of_my_project
npm install
npm run start:dev
```

## Suba a UserApi e a ProductApi

* Execute o seguinte tutorial: https://github.com/joneng2016/learning-api/blob/master/start.md


## Montando o client da UserCLient

* Crie o diretório 'src/client'
* Crie o diretório, dentro de client, user
* Crie o arquivo UserClient.ts

```
import axios from 'axios';

export default class UserClient {
  private static instance: UserClient;
  private client: any;

  private constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3004',
      timeout: 5000,
    });
  }

  public static getInstance() {
    if (UserClient.instance === undefined) {
      UserClient.instance = new UserClient();
    }

    return UserClient.instance;
  }

  public async find(name: string) {
    const queryString = name ? `?name=${name}` : '';
    const response = await this.client.get(`/users${queryString}`);

    return response.data.length === 0 
      ? { msg: 'No products found' }
      : {
          msg: 'User found',
          users: response.data.map((user: any) => {
            delete user.createdAt;
            delete user.updatedAt;

            return user;
        }
      )
    };
  }
}

```



## Agora vamos criar um serviço de consumo com JWT

* Crie o diretório, dentro de client, product
* Crie o arquivo ProductClient.ts

```
import axios from 'axios';

export class ProductClient {
  private static instance: ProductClient;
  private url: string;
  private token: string;

  private constructor() {
    this.url = 'http://localhost:3005/';
  }

  public static getInstance() {
    if (!ProductClient.instance) {
      ProductClient.instance = new ProductClient();
    }

    return ProductClient.instance;
  }

  public async authenticationProcess(email, password) {
    this.token = (
      await axios.get(
        `${this.url}auth/login?email=${email}&password=${password}`,
      )
    ).data.token;
  }

  public async products() {
    return await axios.get(`${this.url}products`, {
      headers: {
        Authorization: this.token,
      },
    });
  }
}
```

## Retomando o último encontro

Clone o projeto
```
https://github.com/joneng2016/learning-api
```
Acesse o diretório
```
cd part_of_class/aula6_part1_completed
```
Realize a instalação das dependências
```
npm i
```
Inicie o projeto
```
npm run start:dev
```

## Vamos criar a nossa controller

```
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserClient } from './clients/user/UserClient';
import { ProductClient } from './clients/product/ProductClient';

@Controller()
export class AppController {
  private userClient: UserClient;
  private productClient: ProductClient;

  constructor(private readonly appService: AppService) {
    this.userClient = UserClient.getInstance();
    this.productClient = ProductClient.getInstance();
  }

  @Get('access_products')
  async getProduts() {
    const userClient = (await this.userClient.get('?name=Jonathan')).data;

    await this.productClient.authenticationProcess(
      userClient[0].email,
      userClient[0].password,
    );

    return (await this.productClient.products()).data 
  }
}
```
