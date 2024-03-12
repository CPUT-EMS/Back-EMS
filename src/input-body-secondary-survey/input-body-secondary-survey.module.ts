import { Module } from '@nestjs/common';
import { InputBodySecondarySurveyService } from './input-body-secondary-survey.service';
import { InputBodySecondarySurveyController } from './input-body-secondary-survey.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {InputBodySecondarySurvey} from "./entities/input-body-secondary-survey.entity";

@Module({
  imports: [TypeOrmModule.forFeature([InputBodySecondarySurvey])],
  controllers: [InputBodySecondarySurveyController],
  providers: [InputBodySecondarySurveyService],
})
export class InputBodySecondarySurveyModule {}
