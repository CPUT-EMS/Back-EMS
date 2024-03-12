import { Module } from '@nestjs/common';
import { MedicalsAdministredService } from './medicals-administred.service';
import { MedicalsAdministredController } from './medicals-administred.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MedicalsAdministred} from "./entities/medicals-administred.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MedicalsAdministred])],
  controllers: [MedicalsAdministredController],
  providers: [MedicalsAdministredService],
})
export class MedicalsAdministredModule {}
