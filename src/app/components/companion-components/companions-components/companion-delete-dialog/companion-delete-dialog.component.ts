import { Component, OnInit, Inject } from '@angular/core';
import { Companion } from 'src/app/model/companion';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-companion-delete-dialog',
  templateUrl: './companion-delete-dialog.component.html',
  styleUrls: ['./companion-delete-dialog.component.css']
})
export class CompanionDeleteDialogComponent implements OnInit {

  companion: Companion;

  constructor(private companionDeleteDialogRef: MatDialogRef<CompanionDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) companion: Companion) {

    this.companion = companion;

  }

  ngOnInit() {
  }

  abortDelete(): void {

    this.companionDeleteDialogRef.close();

  }

  deleteCompanion(): void {

    this.companionDeleteDialogRef.close(true);

  }

}
