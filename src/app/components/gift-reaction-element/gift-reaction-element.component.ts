import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';

@Component({
  selector: 'app-gift-reaction-element',
  templateUrl: './gift-reaction-element.component.html',
  styleUrls: ['./gift-reaction-element.component.css']
})
export class GiftReactionElementComponent implements OnInit {

  @Input("giftReaction")
  giftReaction: GiftReaction;

  @Output()
  eventDeleteGiftReaction = new EventEmitter();

  @Output()
  eventUpdateGiftReaction = new EventEmitter();

  @ViewChild("inputGiftReactionName", { static: false })
  inputGiftReactionName: ElementRef;

  @ViewChild("inputGiftReactionGainFactor", { static: false })
  inputGiftReactionGainFactor: ElementRef;

  readonly: boolean = true;
  defaultOptionsDisabled: boolean = false;
  showModOptions: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editModeGiftReaction(): void {

    this.readonly = false;
    this.defaultOptionsDisabled = true;
    this.showModOptions = true;

    this.inputGiftReactionName.nativeElement.select();

  }

  abortModeGiftReaction(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

  }

  updateGiftReaction(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

    this.giftReaction.name = this.inputGiftReactionName.nativeElement.value;
    this.giftReaction.gainFactor = this.inputGiftReactionGainFactor.nativeElement.value;

    this.eventUpdateGiftReaction.emit( this.giftReaction );

  }

  deleteGiftReaction(): void {

    this.eventDeleteGiftReaction.emit(this.giftReaction);
    
  }

}
