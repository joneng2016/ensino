# Aula 6

## Organização do consumo dos serviços em clients


## Criando uma nova api


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

## Suba a UserApi e a ProductApi

* Clone o rep learning-api ou então de um pull
* Neste powershell, acesse a user-api e digite npm run start
* Em um novo powershell acesse o product-api e digite npm run start
* Execute: https://github.com/joneng2016/learning-api/blob/master/db/scripts.sql



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
      baseURL: 'http://localhost:3005',
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
