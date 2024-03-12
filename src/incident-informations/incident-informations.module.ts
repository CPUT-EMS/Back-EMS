import { Module } from '@nestjs/common';
import { IncidentInformationsService } from './incident-informations.service';
import { IncidentInformationsController } from './incident-informations.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {IncidentInformation} from "./entities/incident-information.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IncidentInformation])],
  controllers: [IncidentInformationsController],
  providers: [IncidentInformationsService],
})
export class IncidentInformationsModule {}
