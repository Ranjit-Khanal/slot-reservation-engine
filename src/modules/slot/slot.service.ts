import { Injectable } from '@nestjs/common';

@Injectable()
export class SlotService {
  private slots = ['Slot 1', 'Slot 2', 'Slot 3'];
  getAllSlots(): string[] {
    return this.slots;
  }

  getSlotById(id: number): string {
    return this.slots[id] || 'Slot not found';
  }

  addSlot(name: string): string {
    this.slots.push(name);
    return name;
  }
}
