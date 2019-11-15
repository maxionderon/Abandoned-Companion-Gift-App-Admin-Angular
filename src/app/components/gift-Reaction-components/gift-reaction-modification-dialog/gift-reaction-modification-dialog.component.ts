import { Component, OnInit, Inject } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { sameValueValidator } from 'src/app/shared/modify.validator';

@Component({
  selector: 'app-gift-reaction-modification-dialog',
  templateUrl: './gift-reaction-modification-dialog.component.html',
  styleUrls: ['./gift-reaction-modification-dialog.component.css']
})
export class GiftReactionModificationDialogComponent implements OnInit {

  giftReaction: GiftReaction;

  formControlGiftReactionName: FormControl; 
  formControlGiftReactionGainFactor: FormControl;

  constructor(private giftReactionModifyDialogRef: MatDialogRef<GiftReactionModificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) giftReaction: GiftReaction) { 

      this.giftReaction = giftReaction;

      this.formControlGiftReactionName = new FormControl("", [Validators.maxLength(250), sameValueValidator(this.giftReaction.name)]);
      this.formControlGiftReactionName.setValue(this.giftReaction.name);
      this.formControlGiftReactionGainFactor = new FormControl("", [Validators.min(0), Validators.max(2000000000), sameValueValidator(this.giftReaction.gainFactor.toString())]);
      this.formControlGiftReactionGainFactor.setValue(this.giftReaction.gainFactor);

    }

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

    if( this.formControlGiftReactionName.hasError("sameValue")) {

      this.formControlGiftReactionName.markAsTouched();

      return this.giftReaction.name + " is not allowed";

    }

    return "error";

  }

  getErrorMessageGiftReactionGainFactor(): string {

    if( this.formControlGiftReactionGainFactor.hasError("required") ) {

      return "please provide a value";

    }

    if( this.formControlGiftReactionGainFactor.hasError("min") ) {

      return "just positive values are allowed";

    }

    if( this.formControlGiftReactionGainFactor.hasError("max")) {

      return "just values till 2.000.000.000 are allowed"
    
    }

    if( this.formControlGiftReactionGainFactor.hasError("sameValue")) {

      this.formControlGiftReactionGainFactor.markAsTouched();

      return this.giftReaction.gainFactor + " is not allowed";

    }

    return "error";

  }

  abortGiftReactionModification(): void {

    this.giftReactionModifyDialogRef.close();

  }

  modifyGiftReaction(): void {

    if( this.formControlGiftReactionName.valid && this.formControlGiftReactionGainFactor.valid ) {

      this.giftReaction.name = this.formControlGiftReactionName.value;
      this.giftReaction.gainFactor = this.formControlGiftReactionGainFactor.value;

      this.giftReactionModifyDialogRef.close( this.giftReaction );

    } else {

      this.formControlGiftReactionName.markAsTouched();
      this.formControlGiftReactionGainFactor.markAsTouched();

    }

  }

}
