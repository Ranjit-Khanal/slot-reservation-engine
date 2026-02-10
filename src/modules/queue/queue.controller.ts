import { Controller, Post, Delete, Get, Param, Req } from '@nestjs/common';

@Controller('slots')
export class QueueController {
  // Join the queue for a slot
  @Post(':id/queue')
  joinQueue(@Param('id') slotId: string, @Req() req: any) {
    // assuming you have auth
    // call your service to join queue
    return ``;
  }

  // Leave the queue
  @Delete(':id/queue')
  leaveQueue(@Param('id') slotId: string, @Req() req: any) {
    // call your service to leave queue
    return '';
  }

  // Get current position in queue
  @Get(':id/queue/position')
  getQueuePosition(@Param('id') slotId: string, @Req() req: any) {
    // call your service to get position
    return '';
  }
}
