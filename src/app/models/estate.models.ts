export class Estate{
    id: string;
    title: string;
    type: string;
    yearsConstruction: number;
    isRent: boolean;
    isSale: boolean;
    isBarter: boolean;
    isActive: boolean;

    constructor(eId: string, eTitle: string, eType: string, eYearsConstruction: number, eIsRent: boolean, eIsSale: boolean, eIsBarter: boolean, eIsActive: boolean){
        this.id = eId;
        this.title = eTitle;
        this.type = eType;
        this.yearsConstruction = eYearsConstruction;
        this.isRent = eIsRent;
        this.isSale = eIsSale;
        this.isBarter = eIsBarter;
        this.isActive = eIsActive;
    }
}