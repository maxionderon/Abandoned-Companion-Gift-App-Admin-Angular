import { Component, OnInit } from '@angular/core';
import { AffiliationService } from 'src/app/services/affiliation-service/affiliation.service';
import { Affiliation } from 'src/app/model/affiliation';

import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

import { AffiliationCreateDialogComponent } from '../affiliation-create-dialog/affiliation-create-dialog.component';
import { environment } from 'src/environments/environment';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service/loading-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  affiliations: Affiliation[] = [];
  dataIsFetched: boolean = false;

  constructor(private affiliationService: AffiliationService, private reCaptchaV3Service: ReCaptchaV3Service , private affiliationCreateDialog: MatDialog, private loadingSpinnerService: LoadingSpinnerService, private router: Router) { }

  ngOnInit() {

    this.getAffiliations();

  }

  createAffiliation(affiliation: Affiliation): void {
    
    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute('createAffiliation').subscribe( token => {

      this.affiliationService.postAffiliation(affiliation, token).subscribe( response => {

        this.affiliations = response;
        
        this.loadingSpinnerService.hideOverlay();

      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();

      });   

    });     

  }

  getAffiliations(): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute('getAffiliations').subscribe( token => {

      this.affiliationService.getAffiliations(token).subscribe( affiliations => {

        this.affiliations = affiliations;

        this.dataIsFetched = true;
        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.dataIsFetched = true;
        this.loadingSpinnerService.hideOverlay();
        
      });   

    });

  }

  updateAffiliation(affiliation: Affiliation):void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("updateAffiliation").subscribe( token => {

      this.affiliationService.putAffiliation(affiliation, token).subscribe(response => {

        this.affiliations = response;

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });

  }

  deleteAffiliation(affiliation: Affiliation): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("deleteAffiliation").subscribe( token => {

      this.affiliationService.deleteAffiliation(affiliation.id, token).subscribe(response => {

        this.affiliations = response;

        this.loadingSpinnerService.hideOverlay();
      
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });
       
  }
  
  dialogCreateAffiliation(): void {

    const dialogConfigCreateAffiliation = new MatDialogConfig();

    dialogConfigCreateAffiliation.width = environment.dialogWidth;
    dialogConfigCreateAffiliation.position = { top: environment.dialogPositionTop};
  
    const dialogRef = this.affiliationCreateDialog.open(AffiliationCreateDialogComponent, dialogConfigCreateAffiliation);

    dialogRef.afterClosed().subscribe(affiliation => {
    
      if( affiliation instanceof Affiliation) {

        this.createAffiliation(affiliation);

      }    
    
    });

  }

  errorRouting(): void {

    this.router.navigateByUrl("/service-not-available");

  }

}
