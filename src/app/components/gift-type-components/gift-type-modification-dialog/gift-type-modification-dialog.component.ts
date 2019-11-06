import { Component, OnInit, Inject } from '@angular/core';
import { GiftType } from 'src/app/model/gift-type';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gift-type-modification-dialog',
  templateUrl: './gift-type-modification-dialog.component.html',
  styleUrls: ['./gift-type-modification-dialog.component.css']
})
export class GiftTypeModificationDialogComponent implements OnInit {

  giftType: GiftType;

  giftTypeTypeFormControl = new FormControl();

  constructor(private giftTypeModifyDialogRef: MatDialogRef<GiftTypeModificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) giftType: GiftType) { 

      this.giftType = giftType;

    }

  ngOnInit() {
  }

  getErrorMessage(): string {

    if( this.giftTypeTypeFormControl.hasError("required") ) {

      return "please provide a value";

    }

    return "error"

  }

  abortGiftTypeModification(): void {

    this.giftTypeModifyDialogRef.close();

  }

  modifyGiftType(): void {

    if( this.giftTypeTypeFormControl.valid ) {

      this.giftType.type = this.giftTypeTypeFormControl.value;

      this.giftTypeModifyDialogRef.close( this.giftType );

    } else {

      this.giftTypeTypeFormControl.markAllAsTouched();
      
    }

  }

}
