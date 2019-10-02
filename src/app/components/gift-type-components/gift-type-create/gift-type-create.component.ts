import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GiftType } from 'src/app/model/gift-type';

@Component({
  selector: 'app-gift-type-create',
  templateUrl: './gift-type-create.component.html',
  styleUrls: ['./gift-type-create.component.css']
})
export class GiftTypeCreateComponent implements OnInit {

  @Output()
  eventAbortCreation = new EventEmitter();
  @Output()
  eventCreateGiftType = new EventEmitter();

  formControlGiftTypeName = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  abortGiftTypeCreation(): void {

    this.eventAbortCreation.emit();
    this.formControlGiftTypeName.reset();

  }

  createGiftType(): void {

    if( this.formControlGiftTypeName.valid ) {

      let giftType = new GiftType();
      giftType.id = 0;
      giftType.type = this.formControlGiftTypeName.value;
      this.formControlGiftTypeName.reset();

      this.eventCreateGiftType.emit(giftType);

    } else {

      this.formControlGiftTypeName.markAsTouched();

    }

  }

}
