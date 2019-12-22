import { Component, OnInit } from '@angular/core';
import { GiftTypeService } from 'src/app/services/gift-type-service/gift-type.service';
import { GiftType } from 'src/app/model/gift-type';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GiftTypeCreateDialogComponent } from '../gift-type-create-dialog/gift-type-create-dialog.component';
import { environment } from 'src/environments/environment';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service/loading-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-type',
  templateUrl: './gift-type.component.html',
  styleUrls: ['./gift-type.component.css']
})
export class GiftTypeComponent implements OnInit {

  giftTypes: GiftType[];

  constructor(private giftTypeService: GiftTypeService, private reCaptchaV3Service: ReCaptchaV3Service,
    private giftTypeCreateDialog: MatDialog, private loadingSpinnerService: LoadingSpinnerService, private router: Router) { }

  ngOnInit() {

    this.getGiftTypes();

  }

  getGiftTypes(): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("getGiftTypes").subscribe( token => {

      this.giftTypeService.getGiftTypes(token).subscribe( giftTypes => {

        this.giftTypes = giftTypes;

        this.loadingSpinnerService.hideOverlay();
        
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });

  }

  createGiftType(giftType: GiftType): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("createGiftType").subscribe( token => {

      this.giftTypeService.postGiftType(giftType, token).subscribe( response => {

        this.giftTypes = response;

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });

  }

  updateGiftType(giftType: GiftType): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("updateGiftType").subscribe( token => {

      this.giftTypeService.putGiftType(giftType, token).subscribe( response => {

        this.giftTypes = response;

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });

  }

  deleteGiftType(giftType: GiftType): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("deleteGiftType").subscribe( token => {

      this.giftTypeService.deleteGiftType(giftType.id, token).subscribe( response => {

        this.giftTypes = response;

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });    

  }

  dialogCreateGiftTypes(): void {

    const dialogConfigCreateGiftType = new MatDialogConfig();

    dialogConfigCreateGiftType.width = environment.dialogWidth;
    dialogConfigCreateGiftType.position = { top: environment.dialogPositionTop};

    const dialogRef = this.giftTypeCreateDialog.open(GiftTypeCreateDialogComponent, dialogConfigCreateGiftType);

    dialogRef.afterClosed().subscribe( giftType => {

      if( giftType instanceof GiftType ) {

        this.createGiftType(giftType);

      }

    });

  }

  errorRouting(): void {

    this.router.navigateByUrl("/service-not-available");

  }

}
