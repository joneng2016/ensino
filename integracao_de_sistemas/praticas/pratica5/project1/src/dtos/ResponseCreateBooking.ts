import { BookDTO } from './BookDTO';

export class ResponseCreateBooking {
  public message: string;
  public booking: BookDTO;

  public constructor(message, booking: BookDTO) {
    this.message = message;
    this.booking = booking;
  }
}
