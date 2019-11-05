import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Affiliation } from 'src/app/model/affiliation';

@Component({
  selector: 'app-affiliation-delete-dialog',
  templateUrl: './affiliation-delete-dialog.component.html',
  styleUrls: ['./affiliation-delete-dialog.component.css']
})
export class AffiliationDeleteDialogComponent implements OnInit {

  affiliation: Affiliation;

  constructor(private affiliationDeleteDialogRef: MatDialogRef<AffiliationDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) affiliation ) { 

      this.affiliation = affiliation;

    }

  ngOnInit() {
  }

  abortDelete(): void {

    this.affiliationDeleteDialogRef.close();

  }

  deleteAffiliation(): void {

    this.affiliationDeleteDialogRef.close(true);

  }

}
