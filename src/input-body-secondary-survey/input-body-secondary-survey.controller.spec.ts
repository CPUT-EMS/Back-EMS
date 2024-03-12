import { Test, TestingModule } from '@nestjs/testing';
import { InputBodySecondarySurveyController } from './input-body-secondary-survey.controller';
import { InputBodySecondarySurveyService } from './input-body-secondary-survey.service';

describe('InputBodySecondarySurveyController', () => {
  let controller: InputBodySecondarySurveyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InputBodySecondarySurveyController],
      providers: [InputBodySecondarySurveyService],
    }).compile();

    controller = module.get<InputBodySecondarySurveyController>(InputBodySecondarySurveyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
