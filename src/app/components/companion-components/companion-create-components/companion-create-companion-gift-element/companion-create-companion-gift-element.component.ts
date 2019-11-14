import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompanionGift } from 'src/app/model/companion-gift';

@Component({
  selector: 'app-companion-create-companion-gift-element',
  templateUrl: './companion-create-companion-gift-element.component.html',
  styleUrls: ['./companion-create-companion-gift-element.component.css']
})
export class CompanionCreateCompanionGiftElementComponent implements OnInit {

  @Input()
  companionGift: CompanionGift;

  @Output()
  eventRemoveCompanionGiftFromCompanion = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeCompanionGiftFromCompanion(): void {

    this.eventRemoveCompanionGiftFromCompanion.emit(this.companionGift);

  }

}
