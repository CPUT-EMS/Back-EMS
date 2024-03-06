import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentTimeService } from './incident-time.service';
import { CreateIncidentTimeDto } from './dto/create-incident-time.dto';
import { UpdateIncidentTimeDto } from './dto/update-incident-time.dto';

@Controller('incident-time')
export class IncidentTimeController {
  constructor(private readonly incidentTimeService: IncidentTimeService) {}

  @Post()
  create(@Body() createIncidentTimeDto: CreateIncidentTimeDto) {
    return this.incidentTimeService.create(createIncidentTimeDto);
  }

  @Get()
  findAll() {
    return this.incidentTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidentTimeDto: UpdateIncidentTimeDto) {
    return this.incidentTimeService.update(+id, updateIncidentTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentTimeService.remove(+id);
  }
}
