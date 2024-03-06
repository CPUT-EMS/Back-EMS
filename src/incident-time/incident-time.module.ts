import { Module } from '@nestjs/common';
import { IncidentTimeService } from './incident-time.service';
import { IncidentTimeController } from './incident-time.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Incident} from "../incident/entities/incident.entity";
import {IncidentTime} from "./entities/incident-time.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IncidentTime])],
  controllers: [IncidentTimeController],
  providers: [IncidentTimeService],
})
export class IncidentTimeModule {}
