import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Affiliation } from 'src/app/model/affiliation';

@Component({
  selector: 'app-affiliation-create-dialog',
  templateUrl: './affiliation-create-dialog.component.html',
  styleUrls: ['./affiliation-create-dialog.component.css']
})
export class AffiliationCreateDialogComponent implements OnInit {

  affiliationName = new FormControl();

  constructor(private affiliationCreateDialogRef: MatDialogRef<AffiliationCreateDialogComponent>) { }

  ngOnInit() {
  }

  getErrorMessage(): string {

    return "please enter a value";

  }

  abortAffiliationCreation(): void {

    this.affiliationCreateDialogRef.close();

  }

  createAffiliation(): void {

    if(this.affiliationName.valid) {

      let affiliation = new Affiliation();
      affiliation.id = 0;
      affiliation.name = this.affiliationName.value;
      //this.affiliationName.reset();

      this.affiliationCreateDialogRef.close(affiliation);

    } else {

      this.affiliationName.markAsTouched();

    }

  }

}
