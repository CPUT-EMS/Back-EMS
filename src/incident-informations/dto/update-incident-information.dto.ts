import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentInformationDto } from './create-incident-information.dto';

export class UpdateIncidentInformationDto extends PartialType(CreateIncidentInformationDto) {}
