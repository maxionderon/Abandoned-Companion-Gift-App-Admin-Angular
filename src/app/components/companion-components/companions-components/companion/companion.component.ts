import { Component, OnInit } from '@angular/core';
import { CompanionService } from 'src/app/services/companion-service/companion.service';
import { Companion } from 'src/app/model/companion';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  companions: Companion[] = [];

  constructor(private companionService: CompanionService, private reCaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit() {

    this.getCompanions();

  }

  getCompanions(): void  {

    this.reCaptchaV3Service.execute("getCompanions").subscribe( token => {

      this.companionService.getCompanions(token).subscribe( companions => {

        this.companions = companions
  
      });

    });    

  }

  deleteCompanion(companion: Companion): void {

    this.reCaptchaV3Service.execute("deleteCompanion").subscribe( token => {

      this.companionService.deleteCompanion(companion, token). subscribe( companions => {

        this.companions = companions;
  
      });

    });    

  }

}
