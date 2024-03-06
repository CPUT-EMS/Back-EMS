import { Module } from '@nestjs/common';
import { PractitionersService } from './practitioners.service';
import { PractitionersController } from './practitioners.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Practitioner} from "./entities/practitioner.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Practitioner])],
  controllers: [PractitionersController],
  providers: [PractitionersService],
})
export class PractitionersModule {}
