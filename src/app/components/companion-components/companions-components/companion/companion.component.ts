import { Component, OnInit } from '@angular/core';
import { CompanionService } from 'src/app/services/companion-service/companion.service';
import { Companion } from 'src/app/model/companion';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service/loading-spinner.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  companions: Companion[] = [];

  diplayedCompanions: Companion[] = [];

  formControlSearchByCompanionName = new FormControl();

  constructor(private companionService: CompanionService, private reCaptchaV3Service: ReCaptchaV3Service, private loadingSpinnerService: LoadingSpinnerService, private router: Router) { }

  ngOnInit() {

    this.getCompanions();
    
  }

  getCompanions(): void  {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("getCompanions").subscribe( token => {

      this.companionService.getCompanions(token).subscribe( companions => {

        this.companions = companions

        this.setDisplayedCompanions(companions);

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });    

  }

  deleteCompanion(companion: Companion): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("deleteCompanion").subscribe( token => {

      this.companionService.deleteCompanion(companion, token). subscribe( companions => {

        this.companions = companions;

        if( this.formControlSearchByCompanionName.value === "") {

          this.setDisplayedCompanions(companions);

        } else {

          this.filterCompanionByName();

        }        

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });    

  }

  filterCompanionByName(): void {

    this.diplayedCompanions = this.companions.filter( companion => {

      return companion.name.toLowerCase().includes( this.formControlSearchByCompanionName.value.toLowerCase() );

    });

  }

  setDisplayedCompanions(displayedCompanions: Companion[]): void {

    this.diplayedCompanions = displayedCompanions;

  }

  errorRouting(): void {

    this.router.navigateByUrl("/service-not-available");

  }

}
