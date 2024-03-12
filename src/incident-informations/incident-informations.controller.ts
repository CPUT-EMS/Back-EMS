import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentInformationsService } from './incident-informations.service';
import { CreateIncidentInformationDto } from './dto/create-incident-information.dto';
import { UpdateIncidentInformationDto } from './dto/update-incident-information.dto';

@Controller('incident-informations')
export class IncidentInformationsController {
  constructor(private readonly incidentInformationsService: IncidentInformationsService) {}

  @Post()
  create(@Body() createIncidentInformationDto: CreateIncidentInformationDto) {
    return this.incidentInformationsService.create(createIncidentInformationDto);
  }

  @Get()
  findAll() {
    return this.incidentInformationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentInformationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidentInformationDto: UpdateIncidentInformationDto) {
    return this.incidentInformationsService.update(+id, updateIncidentInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentInformationsService.remove(+id);
  }
}
