import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './models/Booking';
import { ProdutoMercado } from './models/ProdutoMercado';
import { AppDesignPatternsController } from './app.designpatternscontroller';
import { AppDesignPatternsService } from './app.designpatternsservice';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'ANSKk08aPEDbFjDO',
      database: 'testing',
      models: [Booking, ProdutoMercado],
    }),
    SequelizeModule.forFeature([Booking, ProdutoMercado]),
  ],
  controllers: [AppController, AppDesignPatternsController],
  providers: [AppService, AppDesignPatternsService],
})
export class AppModule {}
