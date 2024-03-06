import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentPractitionersService } from './incident-practitioners.service';
import { CreateIncidentPractitionerDto } from './dto/create-incident-practitioner.dto';
import { UpdateIncidentPractitionerDto } from './dto/update-incident-practitioner.dto';

@Controller('incident-practitioners')
export class IncidentPractitionersController {
  constructor(private readonly incidentPractitionersService: IncidentPractitionersService) {}

  @Post()
  create(@Body() createIncidentPractitionerDto: CreateIncidentPractitionerDto) {
    return this.incidentPractitionersService.create(createIncidentPractitionerDto);
  }

  @Get()
  findAll() {
    return this.incidentPractitionersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentPractitionersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidentPractitionerDto: UpdateIncidentPractitionerDto) {
    return this.incidentPractitionersService.update(+id, updateIncidentPractitionerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentPractitionersService.remove(+id);
  }
}
