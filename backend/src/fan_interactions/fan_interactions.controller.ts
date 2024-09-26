import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FanInteractionsService } from './fan_interactions.service';
import { CreateFanInteractionDto } from './dto/create-fan_interaction.dto';
import { UpdateFanInteractionDto } from './dto/update-fan_interaction.dto';

@Controller('fan-interactions')
export class FanInteractionsController {
  constructor(private readonly fanInteractionsService: FanInteractionsService) {}

  @Post()
  create(@Body() createFanInteractionDto: CreateFanInteractionDto) {
    return this.fanInteractionsService.create(createFanInteractionDto);
  }

  @Get()
  findAll() {
    return this.fanInteractionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fanInteractionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFanInteractionDto: UpdateFanInteractionDto) {
    return this.fanInteractionsService.update(+id, updateFanInteractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fanInteractionsService.remove(+id);
  }
}
