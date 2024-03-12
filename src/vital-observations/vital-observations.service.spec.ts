import { Test, TestingModule } from '@nestjs/testing';
import { VitalObservationsService } from './vital-observations.service';

describe('VitalObservationsService', () => {
  let service: VitalObservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VitalObservationsService],
    }).compile();

    service = module.get<VitalObservationsService>(VitalObservationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
