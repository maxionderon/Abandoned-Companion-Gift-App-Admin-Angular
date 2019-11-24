import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GiftType } from 'src/app/model/gift-type';

@Component({
  selector: 'app-gift-type-create-dialog',
  templateUrl: './gift-type-create-dialog.component.html',
  styleUrls: ['./gift-type-create-dialog.component.css']
})
export class GiftTypeCreateDialogComponent implements OnInit {

  formControlGiftTypeName = new FormControl('', Validators.maxLength(250));

  constructor(private giftTypeCreateDialogRef: MatDialogRef<GiftTypeCreateDialogComponent>) { }

  ngOnInit() {
  }

  getErrorMessage(): string {

    if( this.formControlGiftTypeName.hasError("required") ) {

      return "please provide a value"; 

    }

    if( this.formControlGiftTypeName.hasError("maxlength") ) {

      this.formControlGiftTypeName.markAsTouched();

      return "just 250 characters allowed"
    
    }

    return "error";

  }
  

  abortGiftTypeCreation(): void {

    this.giftTypeCreateDialogRef.close();

  }

  createGiftType(): void {

    if( this.formControlGiftTypeName.valid) {

      let giftType = new GiftType();

      giftType.id = "";
      giftType.type = this.formControlGiftTypeName.value;

      this.giftTypeCreateDialogRef.close(giftType);

    } else {

      this.formControlGiftTypeName.markAsTouched();

    }

  }

}
