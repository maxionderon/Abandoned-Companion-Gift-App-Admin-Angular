import { Component, OnInit, Inject } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-affiliation-to-companion-dialog',
  templateUrl: './add-affiliation-to-companion-dialog.component.html',
  styleUrls: ['./add-affiliation-to-companion-dialog.component.css']
})
export class AddAffiliationToCompanionDialogComponent implements OnInit {

  affiliationsOptions: Affiliation[];

  affiliationSelectFormControl = new FormControl();

  constructor(private addAffiliationToCompanionDialogRef: MatDialogRef<AddAffiliationToCompanionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) affiliationOptions: Affiliation[]) {

      this.affiliationsOptions = affiliationOptions;

     }

  ngOnInit() {
  }

  getErrorMessage(): string {

    return "select at least one affiliation"

  }

  abortAddAffiliationToCompanion(): void {

    this.addAffiliationToCompanionDialogRef.close();

  }

  addAffiliationToCompanion(): void {

    if( this.affiliationSelectFormControl.valid ) {

      this.addAffiliationToCompanionDialogRef.close( this.affiliationSelectFormControl.value );

    } else {

      this.affiliationSelectFormControl.markAsTouched();

    }

  }

}
