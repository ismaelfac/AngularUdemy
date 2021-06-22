export class GeneralDataEstate{
    EstateType: string;
    Municipality: string;
    Stratum: string;
    Bedrooms: string;
    Bathrooms: string;
    EstateDestination: string;
    Exclusiveness: boolean;
    Tracing: boolean;
    newEstate: boolean;

    constructor(eEstateType: string, eType: string, eStratum: string, eBedrooms: string, eBathrooms: string, eEstateDestination: string, eExclusiveness: boolean, eTracing: boolean, eNewEstate: boolean ){
        this.EstateType = eEstateType;
        this.Municipality = eType;
        this.Stratum = eStratum;
        this.Bathrooms = eBedrooms;
        this.Bedrooms = eBathrooms;
        this.EstateDestination = eEstateDestination;
        this.Exclusiveness = eExclusiveness;
        this.Tracing = eTracing;
        this.newEstate = eNewEstate;
    }
}