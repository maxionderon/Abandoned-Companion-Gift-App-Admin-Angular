import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AffiliationDeleteDialogComponent } from '../affiliation-delete-dialog/affiliation-delete-dialog.component';
import { AffiliationModificationDialogComponent } from '../affiliation-modification-dialog/affiliation-modification-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-affiliation-element',
  templateUrl: './affiliation-element.component.html',
  styleUrls: ['./affiliation-element.component.css']
})
export class AffiliationElementComponent implements OnInit {

  @Input('affiliation')
  affiliation: Affiliation;

  @Output()
  eventDeleteAffiliation = new EventEmitter();

  @Output()
  eventUpdateAffiliation = new EventEmitter();

  constructor(private affiliationDeleteDialog: MatDialog, private affiliationModifyDialog: MatDialog) { }

  ngOnInit() {
  }
  
  updateAffiliation(affiliation: Affiliation): void {

    this.affiliation.name = affiliation.name;

    this.eventUpdateAffiliation.emit(this.affiliation);

  }

  deleteAffiliation(): void {

    this.eventDeleteAffiliation.emit(this.affiliation);

  }

  dialogModifyAffiliation(): void {

    const dialogConfigModifyAffiliation = new MatDialogConfig();

    dialogConfigModifyAffiliation.width = environment.dialogWidth;
    dialogConfigModifyAffiliation.position = { top: environment.dialogPositionTop};
    dialogConfigModifyAffiliation.data = this.affiliation;

    const dialogRef = this.affiliationModifyDialog.open(AffiliationModificationDialogComponent, dialogConfigModifyAffiliation);

    dialogRef.afterClosed().subscribe( affiliation => {

      if( affiliation !== undefined ) {

        this.updateAffiliation(affiliation);

      }

    });

  }

  dialogDeleteAffiliation(): void {

    const dialogConfigDeleteAffiliation = new MatDialogConfig();

    dialogConfigDeleteAffiliation.width = environment.dialogWidth;
    dialogConfigDeleteAffiliation.position = { top: environment.dialogPositionTop};
    dialogConfigDeleteAffiliation.data = this.affiliation;

    const dialogRef = this.affiliationDeleteDialog.open(AffiliationDeleteDialogComponent, dialogConfigDeleteAffiliation);

    dialogRef.afterClosed().subscribe( deleteFlag => {

      if( deleteFlag === true ) {

        this.deleteAffiliation();

      }

    });

  }
  
}
