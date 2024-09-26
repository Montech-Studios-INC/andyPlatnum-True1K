import { Test, TestingModule } from '@nestjs/testing';
import { FanInteractionsController } from './fan_interactions.controller';
import { FanInteractionsService } from './fan_interactions.service';

describe('FanInteractionsController', () => {
  let controller: FanInteractionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FanInteractionsController],
      providers: [FanInteractionsService],
    }).compile();

    controller = module.get<FanInteractionsController>(FanInteractionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
