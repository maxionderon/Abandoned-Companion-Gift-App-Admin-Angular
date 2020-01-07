import { Component, OnInit } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { GiftReactionService } from 'src/app/services/gift-reaction-service/gift-reaction.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { GiftReactionCreateDialogComponent } from '../gift-reaction-create-dialog/gift-reaction-create-dialog.component';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service/loading-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-reaction',
  templateUrl: './gift-reaction.component.html',
  styleUrls: ['./gift-reaction.component.css']
})
export class GiftReactionComponent implements OnInit {

  giftReactions: GiftReaction[] = [];
  dataIsFetched: boolean = false;

  constructor(private giftReactionService: GiftReactionService, private reCaptchaV3Service: ReCaptchaV3Service,
    private giftReactionCreateDialog: MatDialog, private loadingSpinnerService: LoadingSpinnerService, private router: Router) { }

  ngOnInit() {

    this.getGiftReactions();
        
  }

  createGiftReaction(giftReaction: GiftReaction): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("createGiftReaction").subscribe( token => {

      this.giftReactionService.postGiftReaction(giftReaction, token).subscribe( response =>  {

        this.giftReactions = response;
        
        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });

  }

  getGiftReactions(): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("getGiftReactions").subscribe( token => {

      this.giftReactionService.getGiftReactions(token).subscribe( response => {

        this.giftReactions = response;

        this.dataIsFetched = true;
        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.dataIsFetched = true;
        this.loadingSpinnerService.hideOverlay();
        
      });

    });    

  }

  updateGiftReaction(giftReaction: GiftReaction): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("updateGiftReaction").subscribe( token => {

      this.giftReactionService.putGiftReaction(giftReaction, token).subscribe( response => {

        this.giftReactions = response;

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });

  }

  deleteGiftReaction(giftReaction: GiftReaction): void {

    this.loadingSpinnerService.showOverlay();

    this.reCaptchaV3Service.execute("deleteGiftReaction").subscribe( token => {

      this.giftReactionService.deleteGiftReaction(giftReaction.id, token).subscribe( response => {

        this.giftReactions = response;

        this.loadingSpinnerService.hideOverlay();
  
      }, () => {

        this.errorRouting();

        this.loadingSpinnerService.hideOverlay();
        
      });

    });
    
  }
  
  dialogCreateGiftReaction(): void {

    const dialogConfigCreateGiftType = new MatDialogConfig();

    dialogConfigCreateGiftType.width = environment.dialogWidth;
    dialogConfigCreateGiftType.position = { top: environment.dialogPositionTop};

    const dialogRef = this.giftReactionCreateDialog.open(GiftReactionCreateDialogComponent, dialogConfigCreateGiftType);

    dialogRef.afterClosed().subscribe( giftReaction => {

      if( giftReaction instanceof GiftReaction ) {

        this.createGiftReaction(giftReaction);

      }

    });

  }

  errorRouting(): void {

    this.router.navigateByUrl("/service-not-available");

  }

}
