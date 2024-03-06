import { Test, TestingModule } from '@nestjs/testing';
import { IncidentTimeController } from './incident-time.controller';
import { IncidentTimeService } from './incident-time.service';

describe('IncidentTimeController', () => {
  let controller: IncidentTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentTimeController],
      providers: [IncidentTimeService],
    }).compile();

    controller = module.get<IncidentTimeController>(IncidentTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
