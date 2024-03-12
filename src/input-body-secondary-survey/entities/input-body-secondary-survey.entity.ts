import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'input_body_secondary_survey'})
export class InputBodySecondarySurvey {
    @PrimaryGeneratedColumn()
    ID_INPUT: number;

    @Column({length: 100})
    information: string;
}
