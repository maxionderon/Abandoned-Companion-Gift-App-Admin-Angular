import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GiftType } from 'src/app/model/gift-type';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gift-type-element',
  templateUrl: './gift-type-element.component.html',
  styleUrls: ['./gift-type-element.component.css']
})
export class GiftTypeElementComponent implements OnInit {

  @Input('giftType')
  giftType: GiftType;

  @Output()
  eventDeleteGiftType = new EventEmitter();

  @Output()
  eventUpdateGiftType = new EventEmitter();

  @ViewChild("inputGiftTypeName", {static: false})
  inputGiftTypeName: ElementRef;

  formControlGiftTypeName = new FormControl();

  readonly: boolean = true;
  defaultOptionsDisabled: boolean = false;
  showModOptions: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  editModeGiftType(): void {

    this.readonly = false;
    this.defaultOptionsDisabled = true;
    this.showModOptions = true;

    this.inputGiftTypeName.nativeElement.select();

  }

  abortModeGiftType(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

  }

  updateGiftType(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

    this.giftType.type = this.inputGiftTypeName.nativeElement.value;

    this.eventUpdateGiftType.emit(this.giftType);

  }

  deleteGiftType(): void {

    this.eventDeleteGiftType.emit(this.giftType);
    
  }

}
