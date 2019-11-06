import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GiftReaction } from 'src/app/model/gift-reaction';

@Component({
  selector: 'app-gift-reaction-create-dialog',
  templateUrl: './gift-reaction-create-dialog.component.html',
  styleUrls: ['./gift-reaction-create-dialog.component.css']
})
export class GiftReactionCreateDialogComponent implements OnInit {

  giftReactionNameFormControl = new FormControl();
  giftReactionGainFactorFormControl = new FormControl("", [Validators.min(0)]);

  constructor(private giftReactionCreateDialogRef: MatDialogRef<GiftReactionCreateDialogComponent>) { }

  ngOnInit() {
  }

  getErrorMessageGiftReactionName(): string {

    if( this.giftReactionNameFormControl.hasError("required") ) {

      return "please provide a value";
      
    }   

    return "error";

  }

  getErrorMessageGiftReactionGainFactor(): string {

    if( this.giftReactionGainFactorFormControl.hasError("required") ) {

      return "please provide a value";

    }

    if( this.giftReactionGainFactorFormControl.hasError("min") ) {

      return "just positive values are allowed";

    }

    return "error";

  }

  abortGiftReactionCreation(): void {

    this.giftReactionCreateDialogRef.close();

  }
  
  createGiftReaction(): void {

    if( this.giftReactionNameFormControl.valid && this.giftReactionGainFactorFormControl. valid ) {

      let giftReaction = new GiftReaction();

      giftReaction.id = 0;
      giftReaction.name = this.giftReactionNameFormControl.value;
      giftReaction.gainFactor = this.giftReactionGainFactorFormControl.value;

      this.giftReactionCreateDialogRef.close(giftReaction);

    } else {

      this.giftReactionNameFormControl.markAsTouched();
      this.giftReactionGainFactorFormControl.markAsTouched();

    }

  }

}
