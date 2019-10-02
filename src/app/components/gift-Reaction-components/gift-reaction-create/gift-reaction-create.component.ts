import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GiftReaction } from 'src/app/model/gift-reaction';

@Component({
  selector: 'app-gift-reaction-create',
  templateUrl: './gift-reaction-create.component.html',
  styleUrls: ['./gift-reaction-create.component.css']
})
export class GiftReactionCreateComponent implements OnInit {

  @Output()
  eventAbortCreation = new EventEmitter();
  @Output()
  eventCreateGiftReaction = new EventEmitter();

  @ViewChild("inputGiftReactionName", { static: false} )
  inputGiftReactionName: ElementRef;
  @ViewChild("inputGiftReactionGainFactor", { static: false} )
  inputGiftReactionGainFactor: ElementRef;

  formControlGiftReactionName = new FormControl();
  formControlGiftReactionGainFactor = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  abortGiftReactionCreation() {

    this.eventAbortCreation.emit();
    this.formControlGiftReactionName.reset();
    this.formControlGiftReactionGainFactor.reset();

  }

  createGiftReaction(): void {

    if( this.formControlGiftReactionName.valid && this.formControlGiftReactionGainFactor.valid ) {

      let giftReaction = new GiftReaction();
      giftReaction.id = 0;
      giftReaction.name = this.formControlGiftReactionName.value;
      giftReaction.gainFactor = this.formControlGiftReactionGainFactor.value;

      this.eventCreateGiftReaction.emit(giftReaction);

    } else {

      this.formControlGiftReactionName.markAsTouched();
      this.formControlGiftReactionGainFactor.markAsTouched();
      
    }

  }

}
