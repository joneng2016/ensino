import { BookDTO } from './BookDTO';

export class ResponseUpdateBooking {
  public message: string;
  public booking: BookDTO;

  public constructor(booking: BookDTO) {
    this.message = 'This update of this bookings is success';
    this.booking = booking;
  }
}