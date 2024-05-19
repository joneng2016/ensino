import { Injectable } from '@nestjs/common';
import { Booking } from './models/Booking';
import { InjectModel } from '@nestjs/sequelize';
import { BookDTO } from './dtos/BookDTO';
import { HttpStatus, HttpException } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createBooking(postData: BookDTO) {
    this.booking.create({
      title: postData.title,
      content: postData.content,
      authorEmail: postData.authorEmail,
    });
  }

  async putBooking(
    id: number,
    putData: BookDTO
  ) {
    const booking = await this.booking.findOne({
      where: {
        id,
      }
    });

    if (!booking) {
      throw new HttpException(
        'Not Found booking to this id', 
        HttpStatus.NOT_FOUND
      );
    }

    return await booking.update(putData);
  }

  async deleteBooking(id: number) {
    const booking = await this.booking.findOne({
      where: {
        id,
      }
    });

    if (!booking) {
      throw new HttpException(
        'Not Found booking to this id', 
        HttpStatus.NOT_FOUND
      );
    }

    return await booking.destroy();
  }
}
