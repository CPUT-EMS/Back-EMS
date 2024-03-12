import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VitalObservationsService } from './vital-observations.service';
import { CreateVitalObservationDto } from './dto/create-vital-observation.dto';
import { UpdateVitalObservationDto } from './dto/update-vital-observation.dto';

@Controller('vital-observations')
export class VitalObservationsController {
  constructor(private readonly vitalObservationsService: VitalObservationsService) {}

  @Post()
  create(@Body() createVitalObservationDto: CreateVitalObservationDto) {
    return this.vitalObservationsService.create(createVitalObservationDto);
  }

  @Get()
  findAll() {
    return this.vitalObservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vitalObservationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVitalObservationDto: UpdateVitalObservationDto) {
    return this.vitalObservationsService.update(+id, updateVitalObservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vitalObservationsService.remove(+id);
  }
}
