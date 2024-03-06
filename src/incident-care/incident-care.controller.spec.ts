import { Test, TestingModule } from '@nestjs/testing';
import { IncidentCareController } from './incident-care.controller';
import { IncidentCareService } from './incident-care.service';

describe('IncidentCareController', () => {
  let controller: IncidentCareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentCareController],
      providers: [IncidentCareService],
    }).compile();

    controller = module.get<IncidentCareController>(IncidentCareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
