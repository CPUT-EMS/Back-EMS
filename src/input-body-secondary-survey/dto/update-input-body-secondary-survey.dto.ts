import { PartialType } from '@nestjs/mapped-types';
import { CreateInputBodySecondarySurveyDto } from './create-input-body-secondary-survey.dto';

export class UpdateInputBodySecondarySurveyDto extends PartialType(CreateInputBodySecondarySurveyDto) {}
