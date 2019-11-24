import { Affiliation } from './affiliation';
import { CompanionGift } from './companion-gift';

export class Companion {

    id: string;
    name: string;
    description: string;
    affiliations: Affiliation[];
    gifts: CompanionGift[];

}