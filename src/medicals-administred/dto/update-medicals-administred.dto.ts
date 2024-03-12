import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalsAdministredDto } from './create-medicals-administred.dto';

export class UpdateMedicalsAdministredDto extends PartialType(CreateMedicalsAdministredDto) {}
