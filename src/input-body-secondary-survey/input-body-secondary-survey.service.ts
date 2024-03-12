import { Injectable } from '@nestjs/common';
import { CreateInputBodySecondarySurveyDto } from './dto/create-input-body-secondary-survey.dto';
import { UpdateInputBodySecondarySurveyDto } from './dto/update-input-body-secondary-survey.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {InputBodySecondarySurvey} from "./entities/input-body-secondary-survey.entity";
import {Repository} from "typeorm";

@Injectable()
export class InputBodySecondarySurveyService {
  constructor(
      @InjectRepository(InputBodySecondarySurvey)
        private usersRepository: Repository<InputBodySecondarySurvey>,
  ) {
  }
  create(createInputBodySecondarySurveyDto: CreateInputBodySecondarySurveyDto) {
    return 'This action adds a new inputBodySecondarySurvey';
  }

  findAll() {
    return `This action returns all inputBodySecondarySurvey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inputBodySecondarySurvey`;
  }

  update(id: number, updateInputBodySecondarySurveyDto: UpdateInputBodySecondarySurveyDto) {
    return `This action updates a #${id} inputBodySecondarySurvey`;
  }

  remove(id: number) {
    return `This action removes a #${id} inputBodySecondarySurvey`;
  }
}
