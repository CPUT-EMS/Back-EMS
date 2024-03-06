import { Injectable } from '@nestjs/common';
import { CreateIncidentPractitionerDto } from './dto/create-incident-practitioner.dto';
import { UpdateIncidentPractitionerDto } from './dto/update-incident-practitioner.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {IncidentCare} from "../incident-care/entities/incident-care.entity";
import {Repository} from "typeorm";
import {IncidentPractitioner} from "./entities/incident-practitioner.entity";

@Injectable()
export class IncidentPractitionersService {
  constructor(
      @InjectRepository(IncidentPractitioner)
      private usersRepository: Repository<IncidentPractitioner>,
  ) {}
  create(createIncidentPractitionerDto: CreateIncidentPractitionerDto) {
    return 'This action adds a new incidentPractitioner';
  }

  findAll() {
    return `This action returns all incidentPractitioners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidentPractitioner`;
  }

  update(id: number, updateIncidentPractitionerDto: UpdateIncidentPractitionerDto) {
    return `This action updates a #${id} incidentPractitioner`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidentPractitioner`;
  }
}
