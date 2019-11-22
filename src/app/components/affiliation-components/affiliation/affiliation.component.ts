import { Component, OnInit } from '@angular/core';
import { AffiliationService } from 'src/app/services/affiliation-service/affiliation.service';
import { Affiliation } from 'src/app/model/affiliation';

import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

import { AffiliationCreateDialogComponent } from '../affiliation-create-dialog/affiliation-create-dialog.component';
import { environment } from 'src/environments/environment';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  affiliations: Affiliation[];

  constructor(private affiliationService: AffiliationService,private reCaptchaV3Service: ReCaptchaV3Service , private affiliationCreateDialog: MatDialog) { }

  ngOnInit() {

    this.getAffiliations();

  }

  createAffiliation(affiliation: Affiliation): void {    

    this.reCaptchaV3Service.execute('createAffiliation').subscribe( token => {

      this.affiliationService.postAffiliation(affiliation, token).subscribe( response => {

        this.affiliations = response;

      });   

    });     

  }

  getAffiliations(): void {

    this.reCaptchaV3Service.execute('getAffiliations').subscribe( token => {

      this.affiliationService.getAffiliations(token).subscribe( e => {

        this.affiliations = e;
  
      });

    });

  }

  updateAffiliation(affiliation: Affiliation):void {

    this.reCaptchaV3Service.execute("updateAffiliation").subscribe( token => {

      this.affiliationService.putAffiliation(affiliation, token).subscribe(response => {

        this.affiliations = response;
  
      });

    });

  }

  deleteAffiliation(affiliation: Affiliation): void {

    this.reCaptchaV3Service.execute("deleteAffiliation").subscribe( token => {

      this.affiliationService.deleteAffiliation(affiliation.id, token).subscribe(response => {

        this.affiliations = response;
      
      });

    });
       
  }
  
  dialogCreateAffiliation(): void {

    const dialogConfigCreateAffiliation = new MatDialogConfig();

    dialogConfigCreateAffiliation.width = environment.dialogWidth;
  
    const dialogRef = this.affiliationCreateDialog.open(AffiliationCreateDialogComponent, dialogConfigCreateAffiliation);

    dialogRef.afterClosed().subscribe(affiliation => {
    
      if( affiliation instanceof Affiliation) {

        this.createAffiliation(affiliation);

      }    
    
    });

  }

}
