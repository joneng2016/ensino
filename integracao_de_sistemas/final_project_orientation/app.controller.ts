import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('message')
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Post()
  public sendMessage(@Body() body: object) {
    return this.appService.sendMessage(body)
  }
  ;
  public sleep(ms) {
    new Promise(r => setTimeout(r, ms))
  }
  @Get()
  public getMessage(@Query('userId') userId: number) {
    const response =  this.appService.getMessage(userId)
    this.sleep(10000)
    console.log(response)
    return response;
  }
}
