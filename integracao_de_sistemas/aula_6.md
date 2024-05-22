# Aula 6 - Organização do consumo dos serviços em clients

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
import { Controller, Get, Query, Delete } from '@nestjs/common';
import { ProductClient } from './clients/ProductClient';
import UserClient from './clients/UserClient';

@Controller()
export class AppController {
  private productClient:ProductClient;
  private userClient:UserClient;

  public constructor() {
    this.productClient = ProductClient.getInstance();
    this.userClient = UserClient.getInstance();
  }

  /**
   * Endpoit que recebe o nome de um cliente
   * 
   * Busca a informação de usuário na UserClient
   * Trabalha a informação para isolar o nome e a senha deste cliente
   * 
   * Passa essas informações na ProductClient para autenticar
   * returna o array da product cliente
   */
  @Get('access_products')
  public async accessProduct(@Query('name') name: string) {
    const {email, password} = await this.getUserInformation(name);

    await this.productClient.authenticationProcess(
      email,
      password
    );

    return (await this.productClient.products()).data;
  }


  @Delete('delete_product_price200')
  public async deleteProduct(@Query('name') name: string) {
    let response = [];

    const {email, password} = await this.getUserInformation(name);

    await this.productClient.authenticationProcess(
      email,
      password
    );

    await this.productClient.authenticationProcess(
      email,
      password
    );

    (await this.productClient.products()).data.forEach(async (element) => {
      if (element.price == '200.00') {
        response.push(await this.productClient.destroyer(element.id))
      }
    });

    return response;
  }

  private async getUserInformation(name) {
    const resultOfUserClient = await this.userClient.find(name);

    const conditionToStattThisProces = resultOfUserClient && 
                                        resultOfUserClient.users && 
                                        resultOfUserClient.users.length > 0;

    if (!conditionToStattThisProces) {
      return {
        msg: 'User not found'
      }
    }
    
    const email = resultOfUserClient.users[0].email
    const password = resultOfUserClient.users[0].password

    return {email, password}
  }

}
```

## Fala a respeito da Avaliação 3

https://github.com/joneng2016/ensino/blob/master/integracao_de_sistemas/avaliacao3.md

