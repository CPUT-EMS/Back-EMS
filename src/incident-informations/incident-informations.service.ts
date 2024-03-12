import { Injectable } from '@nestjs/common';
import { CreateIncidentInformationDto } from './dto/create-incident-information.dto';
import { UpdateIncidentInformationDto } from './dto/update-incident-information.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {IncidentInformation} from "./entities/incident-information.entity";
import {Repository} from "typeorm";

@Injectable()
export class IncidentInformationsService {
  constructor(
      @InjectRepository(IncidentInformation)
        private usersRepository: Repository<IncidentInformation>,
  ) {
  }
  create(createIncidentInformationDto: CreateIncidentInformationDto) {
    return 'This action adds a new incidentInformation';
  }

  findAll() {
    return `This action returns all incidentInformations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidentInformation`;
  }

  update(id: number, updateIncidentInformationDto: UpdateIncidentInformationDto) {
    return `This action updates a #${id} incidentInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidentInformation`;
  }
}
