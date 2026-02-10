import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SlotService } from './slot.service';

@Controller('admin/slots')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}
  @Get()
  getSlots() {
    return this.slotService.getAllSlots();
  }

  @Post()
  createSlot() {
    return 'This action creates a new slot';
  }

  @Patch(':id')
  updateSlot() {
    return 'This action updates a slot';
  }

  @Delete(':id')
  deleteSlot() {
    return 'This action deletes a slot';
  }
}
