import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './models/Booking';
import { ProdutoMercado } from './models/ProdutoMercado'

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
    SequelizeModule.forFeature([
      Booking, ProdutoMercado
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
