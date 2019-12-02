import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Companion } from 'src/app/model/companion';
import { Affiliation } from 'src/app/model/affiliation';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CompanionDeleteDialogComponent } from '../companion-delete-dialog/companion-delete-dialog.component';

@Component({
  selector: 'app-companion-details',
  templateUrl: './companion-details.component.html',
  styleUrls: ['./companion-details.component.css']
})
export class CompanionDetailsComponent implements OnInit {

  @Input()
  companion: Companion;

  @Output()
  eventDeleteCompanion = new EventEmitter();

  constructor(private companionDeleteDialog: MatDialog) { }

  ngOnInit() {
  }

  getAffiliationsSubHeader(): string {

    const affiliations: Affiliation[] = this.companion.affiliations;

    let string: string = "";

    for( let i = 0; i != affiliations.length; i = i + 1 ) {

      string = string + affiliations[i].name;

      if( i < affiliations.length - 1) {

        string = string + ", ";

      }

    }

    return string;

  }

  deleteCompanion(): void {

    this.eventDeleteCompanion.emit(this.companion);

  }

  dialogDeleteCompanion(): void {

    const dialogConfigDeleteCompanion = new MatDialogConfig();

    dialogConfigDeleteCompanion.width = environment.dialogWidth;
    dialogConfigDeleteCompanion.position = { top: environment.dialogPositionTop };
    dialogConfigDeleteCompanion.data = this.companion;

    const dialogRef = this.companionDeleteDialog.open(CompanionDeleteDialogComponent, dialogConfigDeleteCompanion);

    dialogRef.afterClosed().subscribe( (deleteFlag: Boolean) => {

      if( deleteFlag === true ) {

        this.deleteCompanion();

      }

    });

  }
  
}
