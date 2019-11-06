import { Component, OnInit } from '@angular/core';
import { GiftTypeService } from 'src/app/services/gift-type-service/gift-type.service';
import { GiftType } from 'src/app/model/gift-type';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GiftTypeCreateDialogComponent } from '../gift-type-create-dialog/gift-type-create-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gift-type',
  templateUrl: './gift-type.component.html',
  styleUrls: ['./gift-type.component.css']
})
export class GiftTypeComponent implements OnInit {

  giftTypes: GiftType[];

  constructor(private giftTypeService: GiftTypeService,
    private giftTypeCreateCatalog: MatDialog) { }

  ngOnInit() {

    this.getGiftTypes();

  }

  getGiftTypes(): void {

    this.giftTypeService.getGiftTypes().subscribe( giftTypes => {

      this.giftTypes = giftTypes;
      
    });
    
  }

  createGiftType(giftType: GiftType): void {

    this.giftTypeService.postGiftType(giftType).subscribe( response => {

      this.giftTypes = response;

    });

  }

  updateGiftType(giftType: GiftType): void {

    this.giftTypeService.putGiftType(giftType).subscribe( response => {

      this.giftTypes = response;

    });

  }

  deleteGiftType(giftType: GiftType): void {

    this.giftTypeService.deleteGiftType(giftType.id).subscribe( response => {

      this.giftTypes = response;

    });

  }

  dialogCreateGiftTypes(): void {

    const dialogConfigCreateGiftType = new MatDialogConfig();

    dialogConfigCreateGiftType.width = environment.dialogWidth;

    const dialogRef = this.giftTypeCreateCatalog.open(GiftTypeCreateDialogComponent, dialogConfigCreateGiftType);

    dialogRef.afterClosed().subscribe( giftType => {

      if( giftType instanceof GiftType ) {

        this.createGiftType(giftType);

      }

    });

  }

}
