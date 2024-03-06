import { Injectable } from '@nestjs/common';
import { CreateIncidentTimeDto } from './dto/create-incident-time.dto';
import { UpdateIncidentTimeDto } from './dto/update-incident-time.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Incident} from "../incident/entities/incident.entity";
import {Repository} from "typeorm";
import {IncidentTime} from "./entities/incident-time.entity";


@Injectable()
export class IncidentTimeService {
  constructor(
      @InjectRepository(IncidentTime)
      private usersRepository: Repository<IncidentTime>,
  ) {}
  create(createIncidentTimeDto: CreateIncidentTimeDto) {
    return 'This action adds a new incidentTime';
  }

  findAll() {
    return `This action returns all incidentTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidentTime`;
  }

  update(id: number, updateIncidentTimeDto: UpdateIncidentTimeDto) {
    return `This action updates a #${id} incidentTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidentTime`;
  }
}
