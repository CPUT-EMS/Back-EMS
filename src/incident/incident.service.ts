import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import {Incident} from "./entities/incident.entity";
import {Repository} from "typeorm";

@Injectable()
export class IncidentService {
  constructor(
      @InjectRepository(Incident)
      private usersRepository: Repository<Incident>,
  ) {}
  create(createIncidentDto: CreateIncidentDto) {
    return 'This action adds a new incident';
  }

  findAll() {
    return `This action returns all incident`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incident`;
  }

  update(id: number, updateIncidentDto: UpdateIncidentDto) {
    return `This action updates a #${id} incident`;
  }

  remove(id: number) {
    return `This action removes a #${id} incident`;
  }
}
