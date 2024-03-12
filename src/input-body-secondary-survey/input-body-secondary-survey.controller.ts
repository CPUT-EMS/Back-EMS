import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InputBodySecondarySurveyService } from './input-body-secondary-survey.service';
import { CreateInputBodySecondarySurveyDto } from './dto/create-input-body-secondary-survey.dto';
import { UpdateInputBodySecondarySurveyDto } from './dto/update-input-body-secondary-survey.dto';

@Controller('input-body-secondary-survey')
export class InputBodySecondarySurveyController {
  constructor(private readonly inputBodySecondarySurveyService: InputBodySecondarySurveyService) {}

  @Post()
  create(@Body() createInputBodySecondarySurveyDto: CreateInputBodySecondarySurveyDto) {
    return this.inputBodySecondarySurveyService.create(createInputBodySecondarySurveyDto);
  }

  @Get()
  findAll() {
    return this.inputBodySecondarySurveyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inputBodySecondarySurveyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInputBodySecondarySurveyDto: UpdateInputBodySecondarySurveyDto) {
    return this.inputBodySecondarySurveyService.update(+id, updateInputBodySecondarySurveyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inputBodySecondarySurveyService.remove(+id);
  }
}
