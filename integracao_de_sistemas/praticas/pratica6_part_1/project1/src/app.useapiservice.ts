import { Injectable } from '@nestjs/common';
import ProductClient from './client/ProductClient';
import UserClient from './client/UserClient';

@Injectable()
export class AppUseApiService {
  private productClient: ProductClient;
  private userClient: UserClient;

  public constructor() {
    this.productClient = ProductClient.getInstance();
    this.userClient = UserClient.getInstance();
  }

  public async getProducts(name: string) {
    return this.productClient.find(name);
  }

//  public decideIfAccessProductOrUserApi(name: string, type) {
//  }
}
