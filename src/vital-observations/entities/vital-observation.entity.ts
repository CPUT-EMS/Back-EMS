import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'vital_observation'})
export class VitalObservation {
    @PrimaryGeneratedColumn()
    ID_VITAL_OBSERVATIONS: number;

    @Column({length: 100})
    time: string;

    @Column({length: 100})
    pusleRate: string;

    @Column()
    pulseRegularityReg: boolean;

    @Column()
    pulseRegularityIrreg: boolean;

    @Column({length: 100})
    ecgRate: string;

    @Column({length: 100})
    ecgRhythm: string;

    @Column({length: 100})
    respRate: string;

    @Column({length: 100})
    respQuality: string;

    @Column({length: 100})
    spo2: string;

    @Column({length: 100})
    etCO2: string;

    @Column({length: 100})
    bpSysDias1: string;

    @Column({length: 100})
    bpSysDias2: string;

    @Column({length: 100})
    leftPupilMm: string;

    @Column({length: 100})
    leftPupil: string;

    @Column({length: 100})
    rightPupilMm: string;

    @Column({length: 100})
    rightPupil: string;

    @Column()
    gcsEye: number;

    @Column()
    gcsVerbal: number;

    @Column()
    gcsMotor: number;

    @Column()
    gcs15: number;

    @Column({length: 100})
    avpu: string;

    @Column({length: 100})
    bloodSugar: string;

    @Column({length: 100})
    skinTemperture: string;

    @Column({length: 100})
    auscultationRightLung: string;

    @Column({length: 100})
    auscultationLeftLung: string;

    @Column({length: 100})
    painScore: string;


}
