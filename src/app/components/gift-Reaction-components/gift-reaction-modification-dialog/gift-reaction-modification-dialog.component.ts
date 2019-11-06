import { Component, OnInit, Inject } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gift-reaction-modification-dialog',
  templateUrl: './gift-reaction-modification-dialog.component.html',
  styleUrls: ['./gift-reaction-modification-dialog.component.css']
})
export class GiftReactionModificationDialogComponent implements OnInit {

  giftReaction: GiftReaction;

  giftReactionNameFormControl = new FormControl();
  giftReactionGainFactorFormControl = new FormControl();

  constructor(private giftReactionModifyDialogRef: MatDialogRef<GiftReactionModificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) giftReaction: GiftReaction) { 

      this.giftReaction = giftReaction;

    }

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

  abortGiftReactionModification(): void {

    this.giftReactionModifyDialogRef.close();

  }

  modifyGiftReaction(): void {

    if( this.giftReactionNameFormControl.valid && this.giftReactionGainFactorFormControl.valid ) {

      this.giftReaction.name = this.giftReactionNameFormControl.value;
      this.giftReaction.gainFactor = this.giftReactionGainFactorFormControl.value;

      this.giftReactionModifyDialogRef.close( this.giftReaction );

    } else {

      this.giftReactionNameFormControl.markAsTouched();
      this.giftReactionGainFactorFormControl.markAsTouched();

    }

  }

}
