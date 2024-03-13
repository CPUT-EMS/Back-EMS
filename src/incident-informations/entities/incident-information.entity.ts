import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'incident_information'})
export class IncidentInformation {
    @PrimaryGeneratedColumn()
    ID_NUMBER: number;

    @Column({length: 100})
    vehiculeCallSign: string;

    @Column({length: 100})
    prfNumber: string;

    @Column({length: 100})
    dispatchedBy: string;

    @Column()
    dateOfCall: Date;

    @Column({length: 100})
    callCentreCaseNo: string;

    @Column('time')
    timeArrivedAtPatient: Date;

    @Column()
    timeDispatched: Date;

    @Column('time')
    timeArrivedOnScene: Date;

    @Column('time')
    timeMobileToHosp: Date;

    @Column({length: 100})
    triagePriority: string;

    @Column({length: 100})
    levelOfCare: string;

    @Column({length: 100})
    timeAvailable: string;

    @Column({length: 100})
    incidentLocation: string;

    @Column({length: 100})
    transportMode: string;

    @Column({length: 100})
    category: string;

    @Column({length: 100})
    practitionerSurname1: string;

    @Column({length: 100})
        HPCSA1: string;

    @Column({length: 100})
    practitionerSurname2: string;

    @Column({length: 100})
    HPCSA2: string;

    @Column({length: 100})
    practitionerSurname3: string;

    @Column({length: 100})
    HPCSA3: string;

    @Column({length: 100})
    practitionerSurname4: string;

    @Column({length: 100})
    HPCSA4: string;

    @Column({length: 100})
    firstName: string;

    @Column({length: 100})
    lastName: string;

    @Column()
    age: number;

    @Column({length: 100})
    raceGroup: string;

    @Column({length: 100})
    sex: string;

    @Column()
    weight: number;

    @Column({length: 100})
    contactNo: string;

    @Column()
    nextOfKin: number;

    @Column()
    nextOfKinContactNo: number;

    @Column()
    abdoPain: boolean;

    @Column()
    dizzness: boolean;

    @Column()
    overdose: boolean;

    @Column()
    GSW: boolean;

    @Column()
    anxiety: boolean;

    @Column()
    entrapment: boolean;

    @Column()
    poisoning: boolean;

    @Column()
    stabWound: boolean;

    @Column()
    bleeding: boolean;

    @Column()
    envenomation: boolean;

    @Column()
    respDistress: boolean;

    @Column()
    submersion: boolean;

    @Column()
    burns: boolean;

    @Column()
    fallHeight: boolean;

    @Column()
    seizures: boolean;

    @Column()
    chemicalExpo: boolean;

    @Column()
    chestPain: boolean;

    @Column()
    heatColdExp: boolean;

    @Column()
    selfHarm: boolean;

    @Column()
    bluntTrauma: boolean;

    @Column()
    chocking: boolean;

    @Column()
    mentIllness: boolean;

    @Column()
    penTrauma: boolean;

    @Column()
    bikeCrash: boolean;

    @Column()
    diarrVomit: boolean;

    @Column()
    MVCOccup: boolean;

    @Column()
    MVCPedest: boolean;

    @Column({length: 100})
    complaintInput: string;

    @Column()
    allergyNillKnown: boolean;

    @Column()
    allergyNsaids: boolean;

    @Column()
    allergyShellfish: boolean;

    @Column()
    allergyBeeSting: boolean;

    @Column()
    allergyNuts: boolean;

    @Column()
    allergyPollen: boolean;

    @Column()
    allergyPenincillin: boolean;

    @Column()
    allergySulfonamides: boolean;

    @Column()
    allergyOpioids: boolean;

    @Column()
    allergySulfurs: boolean;

    @Column({length: 100})
    currentMedication1: string;

    @Column({length: 100})
    currentMedication2: string;

    @Column({length: 100})
    currentMedication3: string;

    @Column({length: 100})
    currentMedication4: string;

    @Column({length: 100})
    currentMedication5: string;

    @Column({length: 100})
    currentMedication6: string;

    @Column({length: 100})
    currentMedication7: string;

    @Column({length: 100})
    currentMedication8: string;

    @Column({length: 100})
    currentMedication9: string;

    @Column({length: 100})
    currentMedication10: string;

    @Column()
    hypertension: boolean;

    @Column()
    niddm: boolean;

    @Column()
    immunoComp: boolean;

    @Column()
    asthma: boolean;

    @Column()
    iddm: boolean;

    @Column()
    liverDisease: boolean;

    @Column()
    ischHeartDis: boolean;

    @Column()
    ccf: boolean;

    @Column()
    epilepsy: boolean;

    @Column()
    renalFailure: boolean;

    @Column()
    stroke: boolean;

    @Column()
    psychDisord: boolean;

    @Column()
    copd: boolean;

    @Column()
    PTB: boolean;

    @Column({length: 100})
    pmhInput1: string;

    @Column({length: 100})
    pmhInput2: string;

    @Column({length: 100})
    pmhInput3: string;

    @Column({length: 100})
    pmhInput4: string;

    @Column({length: 100})
    pmhInput5: string;

    @Column({length: 100})
    pmhInput6: string;

    @Column()
    meal: boolean;

    @Column()
    snack: boolean;

    @Column()
    drink: boolean;

    @Column({length: 100})
    hoursAgo: string;

    @Column({length: 2000})
    findings: string;

    @Column({length: 100})
    consciousness: string;

    @Column()
    clearSelfMaintened: boolean;

    @Column()
    oedema: boolean;

    @Column()
    FBAO: boolean;

    @Column()
    blood: boolean;

    @Column()
    vomitus: boolean;

    @Column({length: 100})
    breathingRate: string;

    @Column({length: 100})
    breathingQuality: string;

    @Column({length: 100})
    capillaryRefill: string;

    @Column()
    trecheaCentral: boolean;

    @Column()
    deviatedR: boolean;

    @Column()
    deviatedL: boolean;

    @Column({length: 100})
    secondarySurveyInput1: string;

    @Column({length: 100})
    secondarySurveyInput2: string;

    @Column()
    spinalClearanceYes: boolean;

    @Column()
    spinalClearanceNo: boolean;

    @Column({length: 100})
    oxygen: string;

    @Column()
    LPM: boolean;

    @Column()
    nonRebreathMask: boolean;

    @Column()
    venturiMask: boolean;

    @Column()
    nasalCannula: boolean;

    @Column()
    suctionUnit: boolean;

    @Column()
    oropharyngAirway: boolean;

    @Column()
    nasopharyngAirway: boolean;

    @Column()
    bagValveMaskReservoir: boolean;

    @Column()
    scoopStretcher: boolean;

    @Column()
    lonBackBoard: boolean;

    @Column()
    kendrickExtricDev: boolean;

    @Column()
    vacuumMatress: boolean;

    @Column()
    chestCompress: boolean;

    @Column()
    pelvicSplint: boolean;

    @Column()
    tractionSplint: boolean;

    @Column()
    armLegSplint: boolean;

    @Column()
    collarCollar: boolean;

    @Column()
    stabilizingHeadBlocks: boolean;

    @Column()
    traumaDressings: boolean;

    @Column()
    haemostaticDressing: boolean;

    @Column()
    arterialTourniquet: boolean;

    @Column({length: 100})
    inputCareInterventions1: string;

    @Column({length: 100})
    inputCareInterventions2: string;

    @Column({length: 100})
    inputCareInterventions3: string;

    @Column({length: 100})
    periphIVCan1: string;

    @Column({length: 100})
    intraossCan1: string;

    @Column({length: 100})
    nebulization: string;

    @Column()
    occlusiveChestSeal: boolean;

    @Column()
    intercostalNeedleDrain: boolean;

    @Column({length: 100})
    glotticAirway: string;

    @Column()
    debif: boolean;

    @Column()
    LeadEgg3: boolean;

    @Column()
    trachealIntubation: boolean;

    @Column()
    surgicalAirway: boolean;

    @Column()
    extJugularCannula: boolean;

    @Column()
    umbilicalVeinCannula: boolean;

    @Column()
    synchronCardioves: boolean;

    @Column()
    transcutanPacing: boolean;

    @Column()
    leadEgg12: boolean;

    @Column()
    capnograph: boolean;

    @Column()
    mechanicalVentilator: boolean;

    @Column()
    videoScope: boolean;

    @Column()
    oroNasogastTube: boolean;

    @Column()
    cpapMask: boolean;

    @Column({length: 100})
    periphIVCan2: string;

    @Column({length: 100})
    inputCareInterventions4: string;

    @Column({length: 100})
    inputCareInterventions5: string;

    @Column({length: 100})
    inputCareInterventions6: string;

    @Column({length: 100})
    predictedDiffAirway: string;

    @Column({length: 100})
    firstPassSuccess: string;

    @Column({length: 100})
    etTubeSize: string;

    @Column({length: 100})
    etiSuccessful: string;

    @Column({length: 100})
    clGlade: string;

    @Column({length: 100})
    noOfAttempts: string;

    @Column({length: 100})
    intubatorHPCSANo: string;

    @Column({length: 100})
    ettDeptAtTeeth: string;

    @Column({length: 100})
    ettPlacementWithETCO2: string;

    @Column()
    criticalDesaturation: boolean;

    @Column()
    cardiacArrest: boolean;

    @Column()
    bloodVomit: boolean;

    @Column()
    equipmentFailure: boolean;

    @Column()
    oesophagealIntubation: boolean;

    @Column()
    inadequatAnesthesia: boolean;

    @Column({length: 100})
    supraglotticAirwayPlaced: string;

    @Column({length: 100})
    surgicalAirwayAttempted: string;

    @Column({length: 100})
    surgicalAirwaySuccessful: string;

    @Column({length: 100})
    mode: string;

    @Column({length: 100})
    tvMl: string;

    @Column({length: 100})
    rateMin: string;

    @Column({length: 100})
    ratioI: string;

    @Column({length: 100})
    ratioE: string;

    @Column({length: 100})
    peep: string;

    @Column({length: 100})
    pmax: string;

    @Column({length: 100})
    fio2: string;

    @Column({length: 1000})
    provisionalDiagnosis1: string;

    @Column({length: 2000})
    provisionalDiagnosis2: string;

    @Column({length: 100})
    nameOfReceivingPractitioner: string;

    @Column({length:100})
    qualification: string;

    @Column({length: 100})
    practiceNo: string;

    @Column({length: 100})
    receingWardUnit: string;

    @Column({length: 100})
    nameOfPatient: string;

    @Column({length: 100})
    nameOfWitness: string;

    @Column({length: 100})
    dateSignature: string;

    @Column({length: 100})
    locationSignature: string;











}
