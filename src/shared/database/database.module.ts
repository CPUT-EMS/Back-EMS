import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './database.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import {IncidentInformation} from "../../incident-informations/entities/incident-information.entity";
import {InputBodySecondarySurvey} from "../../input-body-secondary-survey/entities/input-body-secondary-survey.entity";
import {MedicalsAdministred} from "../../medicals-administred/entities/medicals-administred.entity";
import {VitalObservation} from "../../vital-observations/entities/vital-observation.entity";


@Module({
    imports: [
        ConfigModule.forFeature(databaseConfig),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            imports: [ConfigModule, ConfigModule.forFeature(databaseConfig)],
            useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
                type: 'postgres',
                url: configService.get('database.url'),
                autoLoadEntities: true,
                synchronize: true, // Use migration instead
                namingStrategy: new SnakeNamingStrategy(),
                logging: ['error'],
                entities:[IncidentInformation, InputBodySecondarySurvey, MedicalsAdministred, VitalObservation]
            }),
        }),
    ],
})
export class DatabaseModule {}