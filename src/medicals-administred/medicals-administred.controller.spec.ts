import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsAdministredController } from './medicals-administred.controller';
import { MedicalsAdministredService } from './medicals-administred.service';

describe('MedicalsAdministredController', () => {
  let controller: MedicalsAdministredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalsAdministredController],
      providers: [MedicalsAdministredService],
    }).compile();

    controller = module.get<MedicalsAdministredController>(MedicalsAdministredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
