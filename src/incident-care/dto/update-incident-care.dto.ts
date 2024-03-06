import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentCareDto } from './create-incident-care.dto';

export class UpdateIncidentCareDto extends PartialType(CreateIncidentCareDto) {}
