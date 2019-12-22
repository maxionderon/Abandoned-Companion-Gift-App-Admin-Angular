import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service/loading-spinner.service';
import { ApiIsAvailableService } from 'src/app/services/api-is-available/api-is-available.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loadingSpinnerService: LoadingSpinnerService, private apiIsAvailableService: ApiIsAvailableService, private reCaptchaV3Service: ReCaptchaV3Service, private router: Router) { }

  ngOnInit() {

    this.checkIfServiceIsAvailable();

  }

  checkIfServiceIsAvailable(): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute('ApiIsAvailable').subscribe( token => {

      this.apiIsAvailableService.getApiIsAvailable(token).subscribe( () => {

        this.loadingSpinnerService.hideOverlay();
    
      }, () => {

        this.router.navigateByUrl("/service-not-available");

        this.loadingSpinnerService.hideOverlay();
      
      });

    });    

  }

}
