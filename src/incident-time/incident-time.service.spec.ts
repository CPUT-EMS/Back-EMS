import { Test, TestingModule } from '@nestjs/testing';
import { IncidentTimeService } from './incident-time.service';

describe('IncidentTimeService', () => {
  let service: IncidentTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentTimeService],
    }).compile();

    service = module.get<IncidentTimeService>(IncidentTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
