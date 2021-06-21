export class Estate{
    title: string;
    type: string;
    yearsConstruction: number;
    isActive: boolean;

    constructor(eTitle: string, eType: string, eYearsConstruction: number, eIsActive: boolean){
        this.title = eTitle;
        this.type = eType;
        this.yearsConstruction = eYearsConstruction;
        this.isActive = eIsActive;
    }
}