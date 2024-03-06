import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentTimeDto } from './create-incident-time.dto';

export class UpdateIncidentTimeDto extends PartialType(CreateIncidentTimeDto) {}
