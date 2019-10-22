import { Component, OnInit, Input } from '@angular/core';
import { CompanionGift } from 'src/app/model/companion-gift';

@Component({
  selector: 'app-companion-create-companion-gift-element',
  templateUrl: './companion-create-companion-gift-element.component.html',
  styleUrls: ['./companion-create-companion-gift-element.component.css']
})
export class CompanionCreateCompanionGiftElementComponent implements OnInit {

  @Input()
  companionGift: CompanionGift;

  constructor() { }

  ngOnInit() {
  }

}
