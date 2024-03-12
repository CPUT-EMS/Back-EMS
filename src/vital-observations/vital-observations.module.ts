import { Module } from '@nestjs/common';
import { VitalObservationsService } from './vital-observations.service';
import { VitalObservationsController } from './vital-observations.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {VitalObservation} from "./entities/vital-observation.entity";

@Module({
  imports: [TypeOrmModule.forFeature([VitalObservation])],
  controllers: [VitalObservationsController],
  providers: [VitalObservationsService],
})
export class VitalObservationsModule {}
