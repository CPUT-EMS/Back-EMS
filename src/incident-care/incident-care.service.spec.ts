import { Test, TestingModule } from '@nestjs/testing';
import { IncidentCareService } from './incident-care.service';

describe('IncidentCareService', () => {
  let service: IncidentCareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentCareService],
    }).compile();

    service = module.get<IncidentCareService>(IncidentCareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
