import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {DatabaseModule} from "./shared/database/database.module";
import { IncidentInformationsModule } from './incident-informations/incident-informations.module';
import { InputBodySecondarySurveyModule } from './input-body-secondary-survey/input-body-secondary-survey.module';
import { VitalObservationsModule } from './vital-observations/vital-observations.module';
import { MedicalsAdministredModule } from './medicals-administred/medicals-administred.module';


@Module({
  imports: [
      DatabaseModule,
      ConfigModule.forRoot(),
      IncidentInformationsModule,
      InputBodySecondarySurveyModule,
      VitalObservationsModule,
      MedicalsAdministredModule,


  ],
})
export class AppModule {}
