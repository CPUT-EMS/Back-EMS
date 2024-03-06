import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentCareService } from './incident-care.service';
import { CreateIncidentCareDto } from './dto/create-incident-care.dto';
import { UpdateIncidentCareDto } from './dto/update-incident-care.dto';

@Controller('incident-care')
export class IncidentCareController {
  constructor(private readonly incidentCareService: IncidentCareService) {}

  @Post()
  create(@Body() createIncidentCareDto: CreateIncidentCareDto) {
    return this.incidentCareService.create(createIncidentCareDto);
  }

  @Get()
  findAll() {
    return this.incidentCareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentCareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidentCareDto: UpdateIncidentCareDto) {
    return this.incidentCareService.update(+id, updateIncidentCareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentCareService.remove(+id);
  }
}
