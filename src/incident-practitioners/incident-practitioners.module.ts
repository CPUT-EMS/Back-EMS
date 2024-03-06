import { Module } from '@nestjs/common';
import { IncidentPractitionersService } from './incident-practitioners.service';
import { IncidentPractitionersController } from './incident-practitioners.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {IncidentCare} from "../incident-care/entities/incident-care.entity";
import {IncidentPractitioner} from "./entities/incident-practitioner.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IncidentPractitioner])],
  controllers: [IncidentPractitionersController],
  providers: [IncidentPractitionersService],
})
export class IncidentPractitionersModule {}
