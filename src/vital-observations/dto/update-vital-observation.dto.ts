import { PartialType } from '@nestjs/mapped-types';
import { CreateVitalObservationDto } from './create-vital-observation.dto';

export class UpdateVitalObservationDto extends PartialType(CreateVitalObservationDto) {}
