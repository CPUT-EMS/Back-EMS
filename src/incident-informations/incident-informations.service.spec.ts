import { Test, TestingModule } from '@nestjs/testing';
import { IncidentInformationsService } from './incident-informations.service';

describe('IncidentInformationsService', () => {
  let service: IncidentInformationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentInformationsService],
    }).compile();

    service = module.get<IncidentInformationsService>(IncidentInformationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
