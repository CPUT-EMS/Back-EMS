import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {DatabaseModule} from "./shared/database/database.module";
import { IncidentTimeModule } from './incident-time/incident-time.module';
import { BaseEntityModule } from './base-entity/base-entity.module';
import { IncidentCareModule } from './incident-care/incident-care.module';
import { IncidentPractitionersModule } from './incident-practitioners/incident-practitioners.module';
import { PractitionersModule } from './practitioners/practitioners.module';

@Module({
  imports: [
      DatabaseModule,
      ConfigModule.forRoot(),
      IncidentTimeModule,
      BaseEntityModule,
      IncidentCareModule,
      IncidentPractitionersModule,
      PractitionersModule,

  ],
})
export class AppModule {}
