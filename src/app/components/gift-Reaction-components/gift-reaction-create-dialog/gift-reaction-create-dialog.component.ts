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

  formControlGiftReactionName = new FormControl("", Validators.maxLength(250)); 
  formControlGiftReactionGainFactor = new FormControl("", [Validators.min(0), Validators.max(2000000000)] );

  constructor(private giftReactionCreateDialogRef: MatDialogRef<GiftReactionCreateDialogComponent>) { }

  ngOnInit() {
  }

  getErrorMessageGiftReactionName(): string {

    if( this.formControlGiftReactionName.hasError("required") ) {

      return "please provide a value"; 

    }

    if( this.formControlGiftReactionName.hasError("maxlength") ) {

      this.formControlGiftReactionName.markAsTouched();

      return "just 250 characters allowed";

    }

    return "error";

  }

  getErrorMessageGiftReactionGainFactor(): string {
     
    if( this.formControlGiftReactionGainFactor.hasError("required") ) {

      this.formControlGiftReactionGainFactor.markAsTouched();  

      return "please provide a value";

    }

    if( this.formControlGiftReactionGainFactor.hasError("min") ) {

      return "just positive values are allowed";

    }

    if( this.formControlGiftReactionGainFactor.hasError("max")) {

      return "just values till 2.000.000.000 are allowed"
    }

    return "error";

  }

  abortGiftReactionCreation(): void {

    this.giftReactionCreateDialogRef.close();

  }
  
  createGiftReaction(): void {

    if( this.formControlGiftReactionName.valid && this.formControlGiftReactionGainFactor. valid ) {

      let giftReaction = new GiftReaction();

      giftReaction.id = 0;
      giftReaction.name = this.formControlGiftReactionName.value;
      giftReaction.gainFactor = this.formControlGiftReactionGainFactor.value;

      this.giftReactionCreateDialogRef.close(giftReaction);

    } else {

      this.formControlGiftReactionName.markAsTouched();
      this.formControlGiftReactionGainFactor.markAsTouched();

    }

  }

}
