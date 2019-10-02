import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Affiliation } from 'src/app/model/affiliation';

@Component({
  selector: 'app-affiliation-create',
  templateUrl: './affiliation-create.component.html',
  styleUrls: ['./affiliation-create.component.css']
})
export class AffiliationCreateComponent implements OnInit {

  @Output()
  eventAbortCreation = new EventEmitter();
  @Output()
  eventCreateAffiliation = new EventEmitter();

  @ViewChild('inputNewAffiliation', {static: false})
  affiliationField: ElementRef;

  affiliationName = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  abortAffiliationCreation(): void {

    this.eventAbortCreation.emit();
    this.affiliationName.reset();

  }

  createAffiliation(): void {

    if(this.affiliationName.valid) {

      let affiliation = new Affiliation();
      affiliation.id = 0;
      affiliation.name = this.affiliationName.value;
      this.affiliationName.reset();

      this.eventCreateAffiliation.emit(affiliation);

    } else {

      this.affiliationName.markAsTouched();

    }    

  }

}
