import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GiftType } from 'src/app/model/gift-type';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { CompanionGift } from 'src/app/model/companion-gift';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-companion-create-add-companion-gift',
  templateUrl: './companion-create-add-companion-gift.component.html',
  styleUrls: ['./companion-create-add-companion-gift.component.css']
})
export class CompanionCreateAddCompanionGiftComponent implements OnInit {

  @Input()
  giftTypes: GiftType[] = [];
  @Input()
  giftReactions: GiftReaction[] = [];

  @Output()
  eventAddCompanionGiftToCompanion = new EventEmitter();

  formControlGiftType = new FormControl();
  formControlGiftReaction = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  addCompanionGiftToCompanion(): void {

    if (this.formControlGiftReaction.valid && this.formControlGiftType.valid) {

      let companionGift = new CompanionGift();

      //companionGift.id = 0;
      companionGift.giftReaction = this.formControlGiftReaction.value;
      companionGift.giftType = this.formControlGiftType.value;

      this.eventAddCompanionGiftToCompanion.emit(companionGift);

      this.formControlGiftReaction.reset();
      this.formControlGiftType.reset();

    } else {

      this.formControlGiftReaction.markAsTouched();
      this.formControlGiftType.markAsTouched();

    }

  }

}
