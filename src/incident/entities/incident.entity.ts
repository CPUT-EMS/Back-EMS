import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany} from "typeorm";
import {IncidentTime} from "../../incident-time/entities/incident-time.entity";
import {IncidentCare} from "../../incident-care/entities/incident-care.entity";
import {IncidentPractitioner} from "../../incident-practitioners/entities/incident-practitioner.entity";

@Entity({name: 'incident'})
export class Incident extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID_INCIDENT: number;

    @Column({length: 100})
    vehiculeCallSign: string;

    @Column({length: 100})
    prfNumber: string;

    @Column({length: 100})
    dispatchedBy: string;

    @Column()
    dateCall: Date;

    @Column({length: 100})
    callCentreNo: string;

    @Column({length: 100})
    incidentLocation: string;

    @Column({length: 100})
    transportedTo: string;

    @Column({length: 100})
    category: string;

    @OneToMany(() => IncidentTime, (incidentTime) => incidentTime.incident)
    incidentTimes: IncidentTime[];

    @OneToMany(() => IncidentCare, (incidentCare) => incidentCare.incident)
    incidentCare: IncidentCare[];

    @OneToMany(() => IncidentPractitioner, (incidentPractitioners) => incidentPractitioners.incident)
    incidentPractitioners: IncidentPractitioner[];
}


