import { Component, OnInit } from '@angular/core';
import { AffiliationService } from 'src/app/services/affiliation.service';
import { Affiliation } from 'src/app/model/affiliation';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  affiliationName = new FormControl();

  constructor(private affiliationService: AffiliationService) { }

  ngOnInit() {

  }

  createAffiliation(): void {

    if(this.affiliationName.valid) {

      let affiliation = new Affiliation();
      affiliation.id = 0;
      affiliation.name = this.affiliationName.value;

      this.affiliationService.postAffiliation(affiliation).subscribe();

    }

  }

}
