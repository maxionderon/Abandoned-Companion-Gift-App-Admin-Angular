import { Component, OnInit } from '@angular/core';
import { GiftTypeService } from 'src/app/services/gift-type-service/gift-type.service';
import { GiftType } from 'src/app/model/gift-type';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GiftTypeCreateDialogComponent } from '../gift-type-create-dialog/gift-type-create-dialog.component';
import { environment } from 'src/environments/environment';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-gift-type',
  templateUrl: './gift-type.component.html',
  styleUrls: ['./gift-type.component.css']
})
export class GiftTypeComponent implements OnInit {

  giftTypes: GiftType[];

  constructor(private giftTypeService: GiftTypeService, private reCaptchaV3Service: ReCaptchaV3Service,
    private giftTypeCreateDialog: MatDialog) { }

  ngOnInit() {

    this.getGiftTypes();

  }

  getGiftTypes(): void {

    this.reCaptchaV3Service.execute("getGiftTypes").subscribe( token => {

      this.giftTypeService.getGiftTypes(token).subscribe( giftTypes => {

        this.giftTypes = giftTypes;
        
      });

    });

  }

  createGiftType(giftType: GiftType): void {

    this.reCaptchaV3Service.execute("createGiftType").subscribe( token => {

      this.giftTypeService.postGiftType(giftType, token).subscribe( response => {

        this.giftTypes = response;
  
      });

    });

  }

  updateGiftType(giftType: GiftType): void {

    this.reCaptchaV3Service.execute("updateGiftType").subscribe( token => {

      this.giftTypeService.putGiftType(giftType, token).subscribe( response => {

        this.giftTypes = response;
  
      });

    });

  }

  deleteGiftType(giftType: GiftType): void {

    this.reCaptchaV3Service.execute("deleteGiftType").subscribe( token => {

      this.giftTypeService.deleteGiftType(giftType.id, token).subscribe( response => {

        this.giftTypes = response;
  
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

}
