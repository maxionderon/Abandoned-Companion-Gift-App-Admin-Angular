import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AffiliationDeleteDialogComponent } from '../affiliation-delete-dialog/affiliation-delete-dialog.component';

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

  @ViewChild('inputAffiliationName', {static: false})
  inputAffiliationName: ElementRef;

  readonly: boolean = true;
  defaultOptionsDisabled: boolean = false;
  showModOptions: boolean = false;

  constructor(private affiliationDeleteDialog: MatDialog) { }

  ngOnInit() {
  }

  
  editModeAffiliation(): void {

    this.readonly = false;
    this.defaultOptionsDisabled = true;
    this.showModOptions = true;

    this.inputAffiliationName.nativeElement.select();

  }

  abortModeAffiliation(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

  }

  updateAffiliation(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

    this.affiliation.name = this.inputAffiliationName.nativeElement.value;

    this.eventUpdateAffiliation.emit(this.affiliation );

  }

  deleteAffiliation(): void {

    this.eventDeleteAffiliation.emit(this.affiliation);

  }

  dialogDeleteAffiliation(): void {

    const dialogConfigDeleteAffiliation = new MatDialogConfig();

    dialogConfigDeleteAffiliation.data = this.affiliation;

    const dialogRef = this.affiliationDeleteDialog.open(AffiliationDeleteDialogComponent, dialogConfigDeleteAffiliation);

    dialogRef.afterClosed().subscribe( deleteFlag => {

      if( deleteFlag === true ) {

        this.deleteAffiliation();

      }

    });

  }
  

}
