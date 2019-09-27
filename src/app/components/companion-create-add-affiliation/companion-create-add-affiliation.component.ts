import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { AffiliationService } from 'src/app/services/affiliation.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-companion-create-add-affiliation',
  templateUrl: './companion-create-add-affiliation.component.html',
  styleUrls: ['./companion-create-add-affiliation.component.css']
})
export class CompanionCreateAddAffiliationComponent implements OnInit {

  affiliationOptions: Affiliation[];

  @Input("affiliations")
  compAffiliations: Affiliation[];

  @Output()
  eventAddNewAffiliationToCompanion = new EventEmitter();

  formControlAffiliationSelect = new FormControl();

  constructor(private affiliationService: AffiliationService) { 
  }

  ngOnInit() {
    
    this.getAffiliationOptions(); 
        
  }

  updateAffiliationOptions(affiliation: Affiliation): void {

    let indexOfAffiliation = this.affiliationOptions.indexOf(affiliation);

    this.affiliationOptions.splice(indexOfAffiliation, 1);    

  }

  getAffiliationOptions(): void {

    this.affiliationService.getAffiliations().subscribe( allAffiliations => {
      
      let bob = [];
      
      for(let i = 0; i != allAffiliations.length; i = i + 1) {

        for(let k = 0; k != this.compAffiliations.length; k = k + 1) {

          if( allAffiliations[i].id === this.compAffiliations[k].id ) {

            bob.push(allAffiliations[i]);

          }

        }

      }

      this.affiliationOptions = allAffiliations;

      for(let i = 0; i != bob.length ; i = i + 1) {

        this.updateAffiliationOptions(bob[i]);

      }

    });

  }

  addAffiliationToCompanion(): void {

    if( this.formControlAffiliationSelect.valid ) {

      this.eventAddNewAffiliationToCompanion.emit(this.formControlAffiliationSelect.value);
      
      this.updateAffiliationOptions(this.formControlAffiliationSelect.value);

      this.formControlAffiliationSelect.reset();

    } else {

      this.formControlAffiliationSelect.markAsTouched();

    }

  }

}
