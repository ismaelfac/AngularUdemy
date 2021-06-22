export class Estate{
    id: string;
    title: string;
    type: string;
    yearsConstruction: number;
    isActive: boolean;

    constructor(eId: string, eTitle: string, eType: string, eYearsConstruction: number, eIsActive: boolean){
        this.id = eId;
        this.title = eTitle;
        this.type = eType;
        this.yearsConstruction = eYearsConstruction;
        this.isActive = eIsActive;
    }
}