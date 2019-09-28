import { Component, OnInit } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { CompanionGift } from 'src/app/model/companion-gift';
import { AffiliationService } from 'src/app/services/affiliation.service';

@Component({
  selector: 'app-companion-create',
  templateUrl: './companion-create.component.html',
  styleUrls: ['./companion-create.component.css']
})
export class CompanionCreateComponent implements OnInit {

  companionAffiliations: Affiliation[] = [];
  CompanionGifts: CompanionGift[] = [];

  affiliationOptions: Affiliation[] = [];

  constructor(private affiliationService: AffiliationService) { }

  ngOnInit() {

    this.getAffiliationOptions();

  }

  getAffiliationOptions() {

    this.affiliationService.getAffiliations().subscribe( affiliationOptions => {

      this.affiliationOptions = affiliationOptions;

      for(let i = 0; i != this.companionAffiliations.length; i = i + 1) {

        this.removeAffiliationOption( this.companionAffiliations[i]);

      }

    });

  }

  addAffiliationOption(affiliationOption: Affiliation): void {

    this.affiliationOptions.push(affiliationOption);

  }

  removeAffiliationOption(affiliationOption: Affiliation): void {
    
    for( let i = 0; i != this.affiliationOptions.length; i = i + 1 ) {

      if( affiliationOption.id === this.affiliationOptions[i].id ) {

        this.affiliationOptions.splice(i,1);
        break;

      }

    }

  }

  addAffiliationToCompanion(affiliation: Affiliation): void {

    this.companionAffiliations.push(affiliation);
    this.removeAffiliationOption(affiliation);
    
  }

  removeAffiliationFromCompanion(affiliation: Affiliation): void {
    
    this.companionAffiliations.splice(this.companionAffiliations.indexOf(affiliation), 1);
    this.addAffiliationOption(affiliation);

  }

}
