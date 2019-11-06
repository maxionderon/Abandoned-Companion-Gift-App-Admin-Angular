import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GiftType } from 'src/app/model/gift-type';

@Component({
  selector: 'app-gift-type-create-dialog',
  templateUrl: './gift-type-create-dialog.component.html',
  styleUrls: ['./gift-type-create-dialog.component.css']
})
export class GiftTypeCreateDialogComponent implements OnInit {

  giftTypeNameFormControl = new FormControl();

  constructor(private giftTypeCreateDialogRef: MatDialogRef<GiftTypeCreateDialogComponent>) { }

  ngOnInit() {
  }

  getErrorMessage(): string {

    return "please enter a value";

  }

  abortGiftTypeCreation(): void {

    this.giftTypeCreateDialogRef.close();

  }

  createGiftType(): void {

    if( this.giftTypeNameFormControl.valid) {

      let giftType = new GiftType();

      giftType.id = 0;
      giftType.type = this.giftTypeNameFormControl.value;

      this.giftTypeCreateDialogRef.close(giftType);

    } else {

      this.giftTypeNameFormControl.markAsTouched();

    }

  }

}
