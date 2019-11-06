import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Affiliation } from 'src/app/model/affiliation';

@Component({
  selector: 'app-affiliation-modification-dialog',
  templateUrl: './affiliation-modification-dialog.component.html',
  styleUrls: ['./affiliation-modification-dialog.component.css']
})
export class AffiliationModificationDialogComponent implements OnInit {

  affiliation: Affiliation;
  
  affiliationNameFormControl = new FormControl();

  constructor(private affiliationModifyDialogRef: MatDialogRef<AffiliationModificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) affiliation: Affiliation) { 

      this.affiliation = affiliation;

    }

  ngOnInit() {
  }
  
  getErrorMessage(): string {

    if( this.affiliationNameFormControl.hasError("required") ) {

      return "please provide a value";

    }

    return "error";
  }

  abortAffiliationModification(): void {

    this.affiliationModifyDialogRef.close();

  }

  modifyAffiliation(): void {

    if( this.affiliationNameFormControl.valid ) {

      this.affiliation.name = this.affiliationNameFormControl.value;

      this.affiliationModifyDialogRef.close( this.affiliation );

    } else {

      this.affiliationNameFormControl.markAsTouched();

    }

  }

}
