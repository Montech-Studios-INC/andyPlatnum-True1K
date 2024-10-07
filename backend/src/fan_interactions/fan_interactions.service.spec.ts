import { Test, TestingModule } from '@nestjs/testing';
import { FanInteractionsService } from './fan_interactions.service';

describe('FanInteractionsService', () => {
  let service: FanInteractionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FanInteractionsService],
    }).compile();

    service = module.get<FanInteractionsService>(FanInteractionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
