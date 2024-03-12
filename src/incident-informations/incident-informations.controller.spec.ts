import { Test, TestingModule } from '@nestjs/testing';
import { IncidentInformationsController } from './incident-informations.controller';
import { IncidentInformationsService } from './incident-informations.service';

describe('IncidentInformationsController', () => {
  let controller: IncidentInformationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentInformationsController],
      providers: [IncidentInformationsService],
    }).compile();

    controller = module.get<IncidentInformationsController>(IncidentInformationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
