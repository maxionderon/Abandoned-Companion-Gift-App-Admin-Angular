import { Component, OnInit } from '@angular/core';
import { AffiliationService } from 'src/app/services/affiliation-service/affiliation.service';
import { Affiliation } from 'src/app/model/affiliation';

import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

import { AffiliationCreateDialogComponent } from '../affiliation-create-dialog/affiliation-create-dialog.component';
import { AffiliationCreateComponent } from '../affiliation-create/affiliation-create.component';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  affiliations: Affiliation[];

  createMode: boolean = false;

  constructor(private affiliationService: AffiliationService, private affiliationCreateDialog: MatDialog) { }

  ngOnInit() {

    this.getAffiliations();

  }

  createAffiliation(affiliation: Affiliation): void {    

      this.affiliationService.postAffiliation(affiliation).subscribe( response => {

        this.affiliations = response;

      });    

  }

  getAffiliations(): void {

    this.affiliationService.getAffiliations().subscribe( e => {

      this.affiliations = e;

    });

  }

  updateAffiliation(affiliation: Affiliation):void {

    this.affiliationService.putAffiliation(affiliation).subscribe(response => {

      this.affiliations = response;

    });

  }

  deleteAffiliation(affiliation: Affiliation): void {
    
    this.affiliationService.deleteAffiliation(affiliation.id).subscribe(response => {

      this.affiliations = response;
    
    });
    
  }

  hideAffiliationsAndShowCreate(): void {

    this.createMode = true;

  }

  showAffiliationAndHideCreate(): void {

    this.createMode = false;

  }

  dialogCreateAffiliation(): void {

    const dialogConfigCreateAffiliation = new MatDialogConfig();

    dialogConfigCreateAffiliation.width = "90%";
  
    const dialogRef = this.affiliationCreateDialog.open(AffiliationCreateDialogComponent, dialogConfigCreateAffiliation);

    dialogRef.afterClosed().subscribe(affiliation => {
    
      if( affiliation instanceof Affiliation) {

        this.createAffiliation(affiliation);

      }    
    
    });

  }

}
