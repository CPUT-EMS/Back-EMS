import { Injectable } from '@nestjs/common';
import { CreateBaseEntityDto } from './dto/create-base-entity.dto';
import { UpdateBaseEntityDto } from './dto/update-base-entity.dto';

@Injectable()
export class BaseEntityService {
  create(createBaseEntityDto: CreateBaseEntityDto) {
    return 'This action adds a new baseEntity';
  }

  findAll() {
    return `This action returns all baseEntity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} baseEntity`;
  }

  update(id: number, updateBaseEntityDto: UpdateBaseEntityDto) {
    return `This action updates a #${id} baseEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} baseEntity`;
  }
}
