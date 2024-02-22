import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'incident'})
export class Incident {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehiculeCallSign: string;

    @Column()
    prfNumber: string;

    @Column()
    DispatchedBy: string;

    @Column()
    dateCall: Date;

    @Column()
    callCentreNo: string;

    @Column()
    timeArrival: Date;

    @Column()
    timeDispatched: Date;

    @Column()
    timeArrivalOnScene: Date;

    @Column()
    timeMobileToHosp: Date;

    @Column()
    triagePriority: string;

    @Column()
    levelOfCare: string;

    @Column()
    timeAvailable: Date;

    @Column()
    incidentLocation: string;

    @Column()
    transportedTo: string;

    @Column()
    category: string;

    @Column()
    practitioner1Surname: string;

    @Column()
    practitioner2Surname: string;

    @Column()
    practitioner3Surname: string;

    @Column()
    practitioner4Surname: string;

    @Column()
    HPCSA1: string;

    @Column()
    HPCSA2: string;

    @Column()
    HPCSA3: string;

    @Column()
    HPCSA4: string;
}
