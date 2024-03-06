import {BaseEntity, Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IncidentPractitioner} from "../../incident-practitioners/entities/incident-practitioner.entity";

export class Practitioner extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID_PRACTITIONER: number;

    @Column({ length: 50 })
    surname: string;

    @Column({ length: 50 })
    HPCSA_Number: string;

    @OneToMany(() => IncidentPractitioner, (incidentPractitioners) => incidentPractitioners.practitioner)
    incidentPractitioners: IncidentPractitioner[];
}
