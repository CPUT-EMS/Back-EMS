import { Test, TestingModule } from '@nestjs/testing';
import { IncidentPractitionersService } from './incident-practitioners.service';

describe('IncidentPractitionersService', () => {
  let service: IncidentPractitionersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentPractitionersService],
    }).compile();

    service = module.get<IncidentPractitionersService>(IncidentPractitionersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
