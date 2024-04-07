import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './models/Booking';
import { ProdutoMercado } from './models/ProdutoMercado';
import { AppDesignPatternsController } from './app.designpatternscontroller';
import { AppDesignPatternsService } from './app.designpatternsservice';
import { AppUserController } from './app.usercontroller';
import { AppUseApiController } from './app.useapicontroller';
import { AppUseApiService } from './app.useapiservice';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'positivo',
      database: 'testing',
      models: [Booking, ProdutoMercado],
    }),
    SequelizeModule.forFeature([Booking, ProdutoMercado]),
  ],
  // Adicione a classe AppUserController para que o framework saiba que ela existe
  controllers: [
    AppController,
    AppDesignPatternsController,
    AppUserController,
    AppUseApiController,
  ],
  providers: [AppService, AppDesignPatternsService, AppUseApiService],
})
export class AppModule {}
