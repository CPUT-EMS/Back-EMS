import { Test, TestingModule } from '@nestjs/testing';
import { IncidentPractitionersController } from './incident-practitioners.controller';
import { IncidentPractitionersService } from './incident-practitioners.service';

describe('IncidentPractitionersController', () => {
  let controller: IncidentPractitionersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentPractitionersController],
      providers: [IncidentPractitionersService],
    }).compile();

    controller = module.get<IncidentPractitionersController>(IncidentPractitionersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
