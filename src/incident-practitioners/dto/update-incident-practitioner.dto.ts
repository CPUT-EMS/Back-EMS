import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentPractitionerDto } from './create-incident-practitioner.dto';

export class UpdateIncidentPractitionerDto extends PartialType(CreateIncidentPractitionerDto) {}
