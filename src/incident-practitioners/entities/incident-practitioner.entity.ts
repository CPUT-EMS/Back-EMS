import {BaseEntity} from "../../base-entity/entities/base-entity.entity";
import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Incident} from "../../incident/entities/incident.entity";
import {Practitioner} from "../../practitioners/entities/practitioner.entity";

export class IncidentPractitioner extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID_INCIDENT_PRACTITIONERS: number;

    @Column()
    ID_PRACTITIONER: number;

    @ManyToOne(() => Incident, (incident) => incident.incidentPractitioners)
    incident: Incident;

    @ManyToOne(() => Practitioner, (practitioner) => practitioner.incidentPractitioners)
    practitioner: Practitioner;
}
