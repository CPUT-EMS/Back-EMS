import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseEntityService } from './base-entity.service';
import { CreateBaseEntityDto } from './dto/create-base-entity.dto';
import { UpdateBaseEntityDto } from './dto/update-base-entity.dto';

@Controller('base-entity')
export class BaseEntityController {
  constructor(private readonly baseEntityService: BaseEntityService) {}

  @Post()
  create(@Body() createBaseEntityDto: CreateBaseEntityDto) {
    return this.baseEntityService.create(createBaseEntityDto);
  }

  @Get()
  findAll() {
    return this.baseEntityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseEntityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseEntityDto: UpdateBaseEntityDto) {
    return this.baseEntityService.update(+id, updateBaseEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseEntityService.remove(+id);
  }
}
