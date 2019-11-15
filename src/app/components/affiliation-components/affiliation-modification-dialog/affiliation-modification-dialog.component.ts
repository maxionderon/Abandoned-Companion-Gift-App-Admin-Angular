import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Affiliation } from 'src/app/model/affiliation';
import { sameValueValidator } from 'src/app/shared/modify.validator';

@Component({
  selector: 'app-affiliation-modification-dialog',
  templateUrl: './affiliation-modification-dialog.component.html',
  styleUrls: ['./affiliation-modification-dialog.component.css']
})
export class AffiliationModificationDialogComponent implements OnInit {

  affiliation: Affiliation;
  
  formControlAffiliationName: FormControl; 

  constructor(private affiliationModifyDialogRef: MatDialogRef<AffiliationModificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) affiliation: Affiliation) { 

      this.affiliation = affiliation;

      this.formControlAffiliationName = new FormControl('', [Validators.maxLength(250), sameValueValidator(this.affiliation.name)]) 

      this.formControlAffiliationName.setValue( this.affiliation.name);
      
    }

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

    if( this.formControlAffiliationName.hasError("sameValue")) {

      this.formControlAffiliationName.markAsTouched();

      return this.affiliation.name + " is not allowed";

    }

    return "error";
  }

  abortAffiliationModification(): void {

    this.affiliationModifyDialogRef.close();

  }

  modifyAffiliation(): void {

    if( this.formControlAffiliationName.valid ) {

      this.affiliation.name = this.formControlAffiliationName.value;

      this.affiliationModifyDialogRef.close( this.affiliation );

    } else {

      this.formControlAffiliationName.markAsTouched();

    }

  }

}
