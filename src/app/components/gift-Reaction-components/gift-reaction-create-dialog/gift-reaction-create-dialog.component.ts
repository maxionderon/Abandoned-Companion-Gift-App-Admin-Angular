import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GiftReaction } from 'src/app/model/gift-reaction';

@Component({
  selector: 'app-gift-reaction-create-dialog',
  templateUrl: './gift-reaction-create-dialog.component.html',
  styleUrls: ['./gift-reaction-create-dialog.component.css']
})
export class GiftReactionCreateDialogComponent implements OnInit {

  giftReactionNameFormControl = new FormControl();
  giftReactionGainFactorFormControl = new FormControl();

  constructor(private giftReactionCreateDialogRef: MatDialogRef<GiftReactionCreateDialogComponent>) { }

  ngOnInit() {
  }

  getErrorMessage(): string {

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
