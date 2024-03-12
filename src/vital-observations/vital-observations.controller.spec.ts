import { Test, TestingModule } from '@nestjs/testing';
import { VitalObservationsController } from './vital-observations.controller';
import { VitalObservationsService } from './vital-observations.service';

describe('VitalObservationsController', () => {
  let controller: VitalObservationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VitalObservationsController],
      providers: [VitalObservationsService],
    }).compile();

    controller = module.get<VitalObservationsController>(VitalObservationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
