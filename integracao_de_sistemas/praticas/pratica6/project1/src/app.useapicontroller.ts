import { Get, Query, Controller, Body } from '@nestjs/common';
import { AppUseApiService } from './app.useapiservice';

@Controller('/useapi')
export class AppUseApiController {
  public constructor(private readonly appUseService: AppUseApiService) {}

  @Get('/products')
  public async getProducts(@Query('name') name: string) {
    return this.appUseService.getProducts(name);
  }
}
