import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'medicals_administred'})
export class MedicalsAdministred {
    @PrimaryGeneratedColumn()
    ID_MEDICALS_ADMINISTRED: number;

    @Column({length: 100})
    medicationIVFluid: string;

    @Column({length: 100})
    timeMedication: string;

    @Column({length: 100})
    route: string;

    @Column({length: 100})
    dose: string;

    @Column({length: 100})
    units: string;

    @Column({length: 100})
    period: string;
}
