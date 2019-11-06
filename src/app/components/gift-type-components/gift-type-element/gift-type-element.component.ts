import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GiftType } from 'src/app/model/gift-type';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GiftTypeDeleteDialogComponent } from '../gift-type-delete-dialog/gift-type-delete-dialog.component';
import { environment } from 'src/environments/environment';
import { GiftTypeModificationDialogComponent } from '../gift-type-modification-dialog/gift-type-modification-dialog.component';

@Component({
  selector: 'app-gift-type-element',
  templateUrl: './gift-type-element.component.html',
  styleUrls: ['./gift-type-element.component.css']
})
export class GiftTypeElementComponent implements OnInit {

  @Input('giftType')
  giftType: GiftType;

  @Output()
  eventDeleteGiftType = new EventEmitter();

  @Output()
  eventUpdateGiftType = new EventEmitter();

  constructor(private giftTypeDeleteDialog: MatDialog, private giftTypeModificationDialog: MatDialog) { }

  ngOnInit() {
  }

  updateGiftType(giftType: GiftType) {

    this.giftType.type = giftType.type;

    this.eventUpdateGiftType.emit(this.giftType);

  }

  deleteGiftType(): void {

    this.eventDeleteGiftType.emit(this.giftType);
    
  }

  dialogModifyGiftType(): void {

    const dialogConfigModifyGiftType = new MatDialogConfig();

    dialogConfigModifyGiftType.width = environment.dialogWidth;
    dialogConfigModifyGiftType.data = this.giftType;

    const dialogRef = this.giftTypeModificationDialog.open(GiftTypeModificationDialogComponent, dialogConfigModifyGiftType);
    
    dialogRef.afterClosed().subscribe( giftType => {

      if( giftType !== undefined ) {

        this.updateGiftType(giftType);

      }

    });

  }

  dialogDeleteGiftType(): void {

    const dialogConfigDeleteGiftType = new MatDialogConfig();

    dialogConfigDeleteGiftType.width = environment.dialogWidth;
    dialogConfigDeleteGiftType.data = this.giftType;

    const dialogRef = this.giftTypeDeleteDialog.open(GiftTypeDeleteDialogComponent, dialogConfigDeleteGiftType);

    dialogRef.afterClosed().subscribe( deleteFlag => {

      if( deleteFlag === true ) {

        this.deleteGiftType();

      }

    }); 

  }

}
