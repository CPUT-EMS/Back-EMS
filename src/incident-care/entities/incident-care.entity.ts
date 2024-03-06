import {BaseEntity} from "../../base-entity/entities/base-entity.entity";
import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Incident} from "../../incident/entities/incident.entity";

export class IncidentCare extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID_INCIDENT_CARE: number;

    @Column({ length: 50 })
    triagePriority: string;

    @Column({ length: 50 })
    levelOfCare: string;

    @ManyToOne(() => Incident, (incident) => incident.incidentCare)
    incident: Incident;
}
