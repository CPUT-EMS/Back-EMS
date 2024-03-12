import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalsAdministredService } from './medicals-administred.service';
import { CreateMedicalsAdministredDto } from './dto/create-medicals-administred.dto';
import { UpdateMedicalsAdministredDto } from './dto/update-medicals-administred.dto';

@Controller('medicals-administred')
export class MedicalsAdministredController {
  constructor(private readonly medicalsAdministredService: MedicalsAdministredService) {}

  @Post()
  create(@Body() createMedicalsAdministredDto: CreateMedicalsAdministredDto) {
    return this.medicalsAdministredService.create(createMedicalsAdministredDto);
  }

  @Get()
  findAll() {
    return this.medicalsAdministredService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalsAdministredService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalsAdministredDto: UpdateMedicalsAdministredDto) {
    return this.medicalsAdministredService.update(+id, updateMedicalsAdministredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalsAdministredService.remove(+id);
  }
}
