import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Companion } from 'src/app/model/companion';

@Component({
  selector: 'app-companion-details',
  templateUrl: './companion-details.component.html',
  styleUrls: ['./companion-details.component.css']
})
export class CompanionDetailsComponent implements OnInit {

  @Input()
  companion: Companion;

  @Output()
  eventDeleteCompanion = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteCompanion(): void {

    this.eventDeleteCompanion.emit(this.companion);

  }
  
}
