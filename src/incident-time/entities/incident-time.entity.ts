import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Incident } from '../../incident/entities/incident.entity';
import { BaseEntity } from '../../base-entity/entities/base-entity.entity';
@Entity({name: 'incident_time'})
export class IncidentTime extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID_INCIDENT: number;

    @Column('time')
    timeArrival: String;

    @Column('time')
    timeDispatched: String;

    @Column('time')
    timeArrivalOnScene: string;

    @Column('time')
    timeMobileToHosp: string;

    @Column('time')
    timeAvailable: string;

    @ManyToOne(() => Incident, (incident) => incident.incidentTimes)
    incident: Incident;
}
