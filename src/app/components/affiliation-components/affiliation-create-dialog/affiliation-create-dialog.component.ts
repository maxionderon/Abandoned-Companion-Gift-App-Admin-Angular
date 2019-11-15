import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Affiliation } from 'src/app/model/affiliation';

@Component({
  selector: 'app-affiliation-create-dialog',
  templateUrl: './affiliation-create-dialog.component.html',
  styleUrls: ['./affiliation-create-dialog.component.css']
})
export class AffiliationCreateDialogComponent implements OnInit {

  formControlAffiliationName = new FormControl('', Validators.maxLength(250));

  constructor(private affiliationCreateDialogRef: MatDialogRef<AffiliationCreateDialogComponent>) { }

  ngOnInit() {
  }

  getErrorMessage(): string {

    if( this.formControlAffiliationName.hasError("required") ) {

      return "please provide a value"; 

    }

    if( this.formControlAffiliationName.hasError("maxlength") ) {

      this.formControlAffiliationName.markAsTouched();

      return "just 250 characters allowed";

    }

    return "error";

  }

  abortAffiliationCreation(): void {

    this.affiliationCreateDialogRef.close();

  }

  createAffiliation(): void {

    if(this.formControlAffiliationName.valid) {

      let affiliation = new Affiliation();
      affiliation.id = 0;
      affiliation.name = this.formControlAffiliationName.value;
      //this.affiliationName.reset();

      this.affiliationCreateDialogRef.close(affiliation);

    } else {

      this.formControlAffiliationName.markAsTouched();

    }

  }

}
