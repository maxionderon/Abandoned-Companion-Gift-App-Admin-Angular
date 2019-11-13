import { Component, OnInit, Inject } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { GiftType } from 'src/app/model/gift-type';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { CompanionGift } from 'src/app/model/companion-gift';

@Component({
  selector: 'app-add-companion-gift-to-companion-dialog',
  templateUrl: './add-companion-gift-to-companion-dialog.component.html',
  styleUrls: ['./add-companion-gift-to-companion-dialog.component.css']
})
export class AddCompanionGiftToCompanionDialogComponent implements OnInit {

  giftReactions: GiftReaction[];
  giftTypes: GiftType[];

  giftTypeFormControl = new FormControl();
  giftReactionFormControl = new FormControl();
  
  constructor(private addCompanionGiftsToCompanionDialogRef: MatDialogRef<AddCompanionGiftToCompanionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.giftReactions = data.giftReaction;
      this.giftTypes = data.giftTypes;

     }

  ngOnInit() {
  }

  getErrorMessageGiftType(): string {

    return "select a gift type";

  }

  getErrorMessageGiftReaction(): string {

    return "select a gift reaction";

  }

  abortAddCompanionGift(): void {

    this.addCompanionGiftsToCompanionDialogRef.close();

  }

  addCompanionGiftToCompanion(): void {

    if( this.giftReactionFormControl.valid && this.giftTypeFormControl.valid ) {

      let companionGift = new CompanionGift();

      companionGift.giftReaction = this.giftReactionFormControl.value;
      companionGift.giftType = this.giftTypeFormControl.value;
      
      this.addCompanionGiftsToCompanionDialogRef.close( companionGift);

    } else {

      this.giftReactionFormControl.markAsTouched();
      this.giftTypeFormControl.markAsTouched();

    }

  }

}
