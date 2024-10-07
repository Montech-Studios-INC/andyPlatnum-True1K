import { Module } from '@nestjs/common';
import { FanInteractionsService } from './fan_interactions.service';
import { FanInteractionsController } from './fan_interactions.controller';

@Module({
  controllers: [FanInteractionsController],
  providers: [FanInteractionsService],
})
export class FanInteractionsModule {}
