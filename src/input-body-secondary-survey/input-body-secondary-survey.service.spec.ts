import { Test, TestingModule } from '@nestjs/testing';
import { InputBodySecondarySurveyService } from './input-body-secondary-survey.service';

describe('InputBodySecondarySurveyService', () => {
  let service: InputBodySecondarySurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputBodySecondarySurveyService],
    }).compile();

    service = module.get<InputBodySecondarySurveyService>(InputBodySecondarySurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
