import { Component, OnInit } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { CompanionGift } from 'src/app/model/companion-gift';
import { AffiliationService } from 'src/app/services/affiliation-service/affiliation.service';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { GiftType } from 'src/app/model/gift-type';
import { GiftReactionService } from 'src/app/services/gift-reaction-service/gift-reaction.service';
import { GiftTypeService } from 'src/app/services/gift-type-service/gift-type.service';
import { Companion } from 'src/app/model/companion';
import { FormControl, Validators } from '@angular/forms';
import { CompanionService } from 'src/app/services/companion-service/companion.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddAffiliationToCompanionDialogComponent } from '../add-affiliation-to-companion-dialog/add-affiliation-to-companion-dialog.component';
import { AddCompanionGiftToCompanionDialogComponent } from '../add-companion-gift-to-companion-dialog/add-companion-gift-to-companion-dialog.component';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-companion-create',
  templateUrl: './companion-create.component.html',
  styleUrls: ['./companion-create.component.css']
})
export class CompanionCreateComponent implements OnInit {

  companionAffiliations: Affiliation[] = [];
  companionGifts: CompanionGift[] = [];

  affiliationOptions: Affiliation[] = [];
  giftReactionOptions: GiftReaction[] = [];
  giftTypeOptions: GiftType[] = [];

  formControlCompanionName = new FormControl( '', Validators.maxLength(250));
  formControlCompanionDescription = new FormControl('', Validators.maxLength(65000));

  constructor(private affiliationService: AffiliationService, private giftReactionService: GiftReactionService, private giftTypeService: GiftTypeService, private companionService: CompanionService, private reCaptchaV3Service: ReCaptchaV3Service, private router: Router, private addAffiliationDialog: MatDialog, private addCompanionGiftsDialog: MatDialog) { }

  ngOnInit() {

    this.getAffiliationOptions();
    this.getGiftReactionOptions();
    this.getGiftTypeOptions();

  }

  getErrorMessageCompanionName(): string {

    if( this.formControlCompanionName.hasError("required") ) {

      return "please provide a value"; 

    }

    if( this.formControlCompanionName.hasError("maxlength") ) {

      this.formControlCompanionName.markAsTouched();

      return "just 250 characters allowed"
    
    }

    return "error";

  }

  getErrorMessageCompanionDescription(): string {

    if( this.formControlCompanionDescription.hasError("required") ) {

      return "please provide a value";

    }

    if( this.formControlCompanionDescription.hasError("maxlength") ) {

      this.formControlCompanionDescription.markAsTouched();

      return "just 65000 characters allowed"

    }

    return "error";

  }

  getAffiliationOptions() {

    this.reCaptchaV3Service.execute('getAffiliations').subscribe( token  => {

      this.affiliationService.getAffiliations(token).subscribe(affiliationOptions => {

        this.affiliationOptions = affiliationOptions;
  
        for (let i = 0; i !== this.companionAffiliations.length; i = i + 1) {
  
          this.removeAffiliationOption(this.companionAffiliations[i]);
  
        }
  
      });

    }); 

  }

  addAffiliationOption(affiliationOption: Affiliation): void {

    this.affiliationOptions.push(affiliationOption);

  }

  removeAffiliationOption(affiliationOption: Affiliation): void {

    for (let i = 0; i != this.affiliationOptions.length; i = i + 1) {

      if (affiliationOption.id === this.affiliationOptions[i].id) {

        this.affiliationOptions.splice(i, 1);
        break;

      }

    }

  }

  addAffiliationToCompanion(affiliation: Affiliation): void {

    this.companionAffiliations.push(affiliation);
    this.removeAffiliationOption(affiliation);

  }

  removeAffiliationFromCompanion(affiliation: Affiliation): void {

    this.companionAffiliations.splice(this.companionAffiliations.indexOf(affiliation), 1);
    this.addAffiliationOption(affiliation);

  }

  getGiftReactionOptions(): void {

    this.reCaptchaV3Service.execute("getGiftReactions").subscribe( token => {

      this.giftReactionService.getGiftReactions( token ).subscribe(giftReactions => {

        this.giftReactionOptions = giftReactions;
  
      });

    });

  }

  getGiftTypeOptions(): void {

    this.reCaptchaV3Service.execute("getGiftTypes").subscribe( token => {

      this.giftTypeService.getGiftTypes(token).subscribe(giftTypes => {

        this.giftTypeOptions = giftTypes;
  
        for( let i = 0; i !== this.companionGifts.length; i = i + 1 ) {
  
          this.removeGiftTypeOption(this.companionGifts[i].giftType);
  
        }

      });

    });

  }

  addGiftTypeOption(giftType: GiftType): void {

    this.giftTypeOptions.push(giftType);

  }

  removeGiftTypeOption(giftType: GiftType): void {

    console.log( giftType);

    for( let i = 0; i !== this.giftTypeOptions.length; i = i + 1 ) {

      if( giftType.id === this.giftTypeOptions[i].id ) {

        this.giftTypeOptions.splice(i, 1);
        break;

      }

    }

  }

  addCompanionGiftToCompanion(companionGift: CompanionGift): void {

    this.companionGifts.push(companionGift);
    this.removeGiftTypeOption(companionGift.giftType);

  }

  removeCompanionGiftFromCompanion(companionGift: CompanionGift): void {

    this.companionGifts.splice(this.companionGifts.indexOf(companionGift), 1);
    this.addGiftTypeOption(companionGift.giftType);

  }

  dialogAddAffiliation(): void {

    const dialogConfigAddAffiliation = new MatDialogConfig();

    dialogConfigAddAffiliation.width = environment.dialogWidth;
    dialogConfigAddAffiliation.data = this.affiliationOptions;

    const dialogRef = this.addAffiliationDialog.open(AddAffiliationToCompanionDialogComponent, dialogConfigAddAffiliation);

    dialogRef.afterClosed().subscribe( (affiliations: Affiliation[]) => {

      if( affiliations !== undefined  ) {

        for(let i = 0; i !== affiliations.length; i = i +1 ) {

          this.addAffiliationToCompanion(affiliations[i]);
  
        }

      }

    });

  }

  dialogAddCompanionGiftsToCompanion(): void {

    const dialogConfidAddCompanionGiftsToCompanion = new MatDialogConfig()

    dialogConfidAddCompanionGiftsToCompanion.width = environment.dialogWidth;
    dialogConfidAddCompanionGiftsToCompanion.data = { giftReaction: this.giftReactionOptions, giftTypes: this.giftTypeOptions }
    
    const dialogRef = this.addCompanionGiftsDialog.open( AddCompanionGiftToCompanionDialogComponent, dialogConfidAddCompanionGiftsToCompanion);

    dialogRef.afterClosed().subscribe( (companionGift: CompanionGift) => {

      if( companionGift instanceof CompanionGift ) {

        this.addCompanionGiftToCompanion(companionGift);

      }

    } );

  }

  createCompanion(): void {

    if (this.formControlCompanionName.valid && this.formControlCompanionDescription.valid) {

      let companion = new Companion();

      companion.id = 0;
      companion.name = this.formControlCompanionName.value;
      companion.description = this.formControlCompanionDescription.value;
      companion.affiliations = this.companionAffiliations;
      companion.gifts = this.companionGifts;

      this.companionService.postCompanion(companion).subscribe();

      this.companionAffiliations = [];
      this.companionGifts = [];
      this.formControlCompanionName.reset();
      this.formControlCompanionDescription.reset();

      this.router.navigateByUrl("/companion");

    } else {
      
      this.formControlCompanionName.markAsTouched();
      this.formControlCompanionDescription.markAsTouched();

    }

  }

}
