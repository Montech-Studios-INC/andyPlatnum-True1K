import { Injectable } from '@nestjs/common';
import { CreateFanInteractionDto } from './dto/create-fan_interaction.dto';
import { UpdateFanInteractionDto } from './dto/update-fan_interaction.dto';

@Injectable()
export class FanInteractionsService {
  create(createFanInteractionDto: CreateFanInteractionDto) {
    return 'This action adds a new fanInteraction';
  }

  findAll() {
    return `This action returns all fanInteractions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fanInteraction`;
  }

  update(id: number, updateFanInteractionDto: UpdateFanInteractionDto) {
    return `This action updates a #${id} fanInteraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} fanInteraction`;
  }
}
