import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './database.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Incident } from '../../incident/entities/incident.entity';
import {IncidentTime} from "../../incident-time/entities/incident-time.entity";
import {IncidentCare} from "../../incident-care/entities/incident-care.entity";
import {IncidentPractitioner} from "../../incident-practitioners/entities/incident-practitioner.entity";
import {Practitioner} from "../../practitioners/entities/practitioner.entity";

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
                entities:[Incident, IncidentTime, IncidentCare, IncidentPractitioner, Practitioner]
            }),
        }),
    ],
})
export class DatabaseModule {}