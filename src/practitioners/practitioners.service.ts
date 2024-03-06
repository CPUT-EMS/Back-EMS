import { Injectable } from '@nestjs/common';
import { CreatePractitionerDto } from './dto/create-practitioner.dto';
import { UpdatePractitionerDto } from './dto/update-practitioner.dto';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {Practitioner} from "./entities/practitioner.entity";

@Injectable()
export class PractitionersService {
  constructor(
      @InjectRepository(Practitioner)
      private usersRepository: Repository<Practitioner>,
  ) {}
  create(createPractitionerDto: CreatePractitionerDto) {
    return 'This action adds a new practitioner';
  }

  findAll() {
    return `This action returns all practitioners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} practitioner`;
  }

  update(id: number, updatePractitionerDto: UpdatePractitionerDto) {
    return `This action updates a #${id} practitioner`;
  }

  remove(id: number) {
    return `This action removes a #${id} practitioner`;
  }
}
