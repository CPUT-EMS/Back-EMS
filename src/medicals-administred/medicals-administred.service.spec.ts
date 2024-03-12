import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsAdministredService } from './medicals-administred.service';

describe('MedicalsAdministredService', () => {
  let service: MedicalsAdministredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalsAdministredService],
    }).compile();

    service = module.get<MedicalsAdministredService>(MedicalsAdministredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
