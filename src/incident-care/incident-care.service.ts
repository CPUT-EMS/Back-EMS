import { Injectable } from '@nestjs/common';
import { CreateIncidentCareDto } from './dto/create-incident-care.dto';
import { UpdateIncidentCareDto } from './dto/update-incident-care.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Incident} from "../incident/entities/incident.entity";
import {Repository} from "typeorm";
import {IncidentCare} from "./entities/incident-care.entity";

@Injectable()
export class IncidentCareService {
  constructor(
      @InjectRepository(IncidentCare)
      private usersRepository: Repository<IncidentCare>,
  ) {}
  create(createIncidentCareDto: CreateIncidentCareDto) {
    return 'This action adds a new incidentCare';
  }

  findAll() {
    return `This action returns all incidentCare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidentCare`;
  }

  update(id: number, updateIncidentCareDto: UpdateIncidentCareDto) {
    return `This action updates a #${id} incidentCare`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidentCare`;
  }
}
