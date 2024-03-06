import { Module } from '@nestjs/common';
import { IncidentCareService } from './incident-care.service';
import { IncidentCareController } from './incident-care.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Incident} from "../incident/entities/incident.entity";
import {IncidentCare} from "./entities/incident-care.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IncidentCare])],
  controllers: [IncidentCareController],
  providers: [IncidentCareService],
})
export class IncidentCareModule {}
