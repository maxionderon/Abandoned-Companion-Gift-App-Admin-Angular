import { Component, OnInit } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { CompanionGift } from 'src/app/model/companion-gift';

@Component({
  selector: 'app-companion-create',
  templateUrl: './companion-create.component.html',
  styleUrls: ['./companion-create.component.css']
})
export class CompanionCreateComponent implements OnInit {

  affiliations: Affiliation[] = [{"id":42,"name":"Empire"},{"id":44,"name":"Republic"}];
  gifts: CompanionGift[];

  constructor() { }

  ngOnInit() {
  }

  addAffiliationToCompanion(affiliation: Affiliation): void {

    this.affiliations.push(affiliation);
    
  }

}
