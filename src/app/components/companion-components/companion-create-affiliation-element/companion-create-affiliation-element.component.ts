import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';

@Component({
  selector: 'app-companion-create-affiliation-element',
  templateUrl: './companion-create-affiliation-element.component.html',
  styleUrls: ['./companion-create-affiliation-element.component.css']
})
export class CompanionCreateAffiliationElementComponent implements OnInit{

  @Input()
  affiliation: Affiliation;

  @Output()
  eventRemoveAffiliation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeAffiliationFromCompanion(): void {

    this.eventRemoveAffiliation.emit(this.affiliation);

  }

}
