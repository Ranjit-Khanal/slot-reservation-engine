import { Controller, Get, Post } from '@nestjs/common';

@Controller('bookings')
export class BookingController {
  @Get()
  getBookings() {
    return 'This action returns all bookings';
  }

  @Get('my')
  getMyBookings() {
    return 'This action returns my bookings';
  }

  @Post('reserve')
  createBooking() {
    return 'This action creates a new booking';
  }

  @Post(':id/confirm')
  confirmBooking() {
    return 'This action confirms a booking';
  }

  @Post(':id/cancel')
  cancelBooking() {
    return 'This action cancels a booking';
  }
}
