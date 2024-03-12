import { Injectable } from '@nestjs/common';
import { CreateMedicalsAdministredDto } from './dto/create-medicals-administred.dto';
import { UpdateMedicalsAdministredDto } from './dto/update-medicals-administred.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {MedicalsAdministred} from "./entities/medicals-administred.entity";
import {Repository} from "typeorm";

@Injectable()
export class MedicalsAdministredService {
  constructor(
      @InjectRepository(MedicalsAdministred)
        private usersRepository: Repository<MedicalsAdministred>,
  ) {
  }
  create(createMedicalsAdministredDto: CreateMedicalsAdministredDto) {
    return 'This action adds a new medicalsAdministred';
  }

  findAll() {
    return `This action returns all medicalsAdministred`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalsAdministred`;
  }

  update(id: number, updateMedicalsAdministredDto: UpdateMedicalsAdministredDto) {
    return `This action updates a #${id} medicalsAdministred`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalsAdministred`;
  }
}
