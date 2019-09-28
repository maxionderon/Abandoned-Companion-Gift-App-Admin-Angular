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

  @Input("affiliationOptions")
  affiliationOptions: Affiliation[];

  @Output()
  eventAddNewAffiliationToCompanion = new EventEmitter();

  formControlAffiliationSelect = new FormControl();

  constructor(private affiliationService: AffiliationService) {
  }

  ngOnInit() {
  }

  addAffiliationToCompanion(): void {

    if (this.formControlAffiliationSelect.valid) {

      this.eventAddNewAffiliationToCompanion.emit(this.formControlAffiliationSelect.value);

      this.formControlAffiliationSelect.reset();

    } else {

      this.formControlAffiliationSelect.markAsTouched();

    }

  }

}
