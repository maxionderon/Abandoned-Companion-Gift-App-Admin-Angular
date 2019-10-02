import { Component, OnInit } from '@angular/core';
import { AffiliationService } from 'src/app/services/affiliation-service/affiliation.service';
import { Affiliation } from 'src/app/model/affiliation';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  affiliations: Affiliation[];

  createMode: boolean = false;

  constructor(private affiliationService: AffiliationService) { }

  ngOnInit() {

    this.getAffiliations();

  }

  createAffiliation(affiliation: Affiliation): void {    

      this.affiliationService.postAffiliation(affiliation).subscribe( response => {

        this.affiliations = response;

      });    

  }

  getAffiliations(): void {

    this.affiliationService.getAffiliations().subscribe( e => {

      this.affiliations = e;

    });

  }

  updateAffiliation(affiliation: Affiliation):void {

    this.affiliationService.putAffiliation(affiliation).subscribe(response => {

      this.affiliations = response;

    });

  }

  deleteAffiliation(affiliation: Affiliation): void {
    
    this.affiliationService.deleteAffiliation(affiliation.id).subscribe(response => {

      this.affiliations = response;
    
    });
    
  }

  hideAffiliationsAndShowCreate(): void {

    this.createMode = true;

  }

  showAffiliationAndHideCreate(): void {

    this.createMode = false;

  }

}
