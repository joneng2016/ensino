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

  @Get('products')
  async getProduts() {
    const userClient = (await this.userClient.get('?name=Jonathan')).data;

    await this.productClient.authenticationProcess(
      userClient[0].email,
      userClient[0].password,
    );

    return (await this.productClient.products()).data 
  }
}
