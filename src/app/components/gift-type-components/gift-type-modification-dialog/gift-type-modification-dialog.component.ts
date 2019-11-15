import { Component, OnInit, Inject } from '@angular/core';
import { GiftType } from 'src/app/model/gift-type';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { sameValueValidator } from 'src/app/shared/modify.validator';

@Component({
  selector: 'app-gift-type-modification-dialog',
  templateUrl: './gift-type-modification-dialog.component.html',
  styleUrls: ['./gift-type-modification-dialog.component.css']
})
export class GiftTypeModificationDialogComponent implements OnInit {

  giftType: GiftType;

  formControlGiftType: FormControl; 

  constructor(private giftTypeModifyDialogRef: MatDialogRef<GiftTypeModificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) giftType: GiftType) { 

      this.giftType = giftType;

      this.formControlGiftType = new FormControl("", [Validators.maxLength(250), sameValueValidator(this.giftType.type)]);

    }

  ngOnInit() {
  }

  getErrorMessage(): string {

    if( this.formControlGiftType.hasError("required") ) {

      return "please provide a value";

    }

    if( this.formControlGiftType.hasError("maxlength") ) {

      this.formControlGiftType.markAsTouched();

      return "just 250 characters allowed";

    }

    if( this.formControlGiftType.hasError("sameValue")) {

      this.formControlGiftType.markAsTouched();

      return this.giftType.type + " is not allowed";

    }

    return "error";

  }

  abortGiftTypeModification(): void {

    this.giftTypeModifyDialogRef.close();

  }

  modifyGiftType(): void {

    if( this.formControlGiftType.valid ) {

      this.giftType.type = this.formControlGiftType.value;

      this.giftTypeModifyDialogRef.close( this.giftType );

    } else {

      this.formControlGiftType.markAllAsTouched();
      
    }

  }

}
