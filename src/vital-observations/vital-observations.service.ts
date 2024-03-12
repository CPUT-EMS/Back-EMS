import { Injectable } from '@nestjs/common';
import { CreateVitalObservationDto } from './dto/create-vital-observation.dto';
import { UpdateVitalObservationDto } from './dto/update-vital-observation.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {VitalObservation} from "./entities/vital-observation.entity";
import {Repository} from "typeorm";

@Injectable()
export class VitalObservationsService {
  constructor(
      @InjectRepository(VitalObservation)
        private usersRepository: Repository<VitalObservation>,
  ) {
  }
  create(createVitalObservationDto: CreateVitalObservationDto) {
    return 'This action adds a new vitalObservation';
  }

  findAll() {
    return `This action returns all vitalObservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vitalObservation`;
  }

  update(id: number, updateVitalObservationDto: UpdateVitalObservationDto) {
    return `This action updates a #${id} vitalObservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} vitalObservation`;
  }
}
