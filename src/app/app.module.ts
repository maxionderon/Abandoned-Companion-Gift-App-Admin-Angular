import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDialogModule} from '@angular/material/dialog';

import { AffiliationComponent } from './components/affiliation-components/affiliation/affiliation.component';
import { AffiliationElementComponent } from './components/affiliation-components/affiliation-element/affiliation-element.component';
import { GiftTypeComponent } from './components/gift-type-components/gift-type/gift-type.component';
import { GiftTypeElementComponent } from './components/gift-type-components/gift-type-element/gift-type-element.component';
import { GiftReactionComponent } from './components/gift-Reaction-components/gift-reaction/gift-reaction.component';
import { GiftReactionElementComponent } from './components/gift-Reaction-components/gift-reaction-element/gift-reaction-element.component';
import { CompanionCreateComponent } from './components/companion-components/companion-create-components/companion-create/companion-create.component';
import { CompanionCreateAffiliationElementComponent } from './components/companion-components/companion-create-components/companion-create-affiliation-element/companion-create-affiliation-element.component';
import { CompanionComponent } from './components/companion-components/companions-components/companion/companion.component';
import { CompanionDetailsComponent } from './components/companion-components/companions-components/companion-details/companion-details.component';
import { HomeComponent } from './components/home/home.component';
import { CompanionCreateCompanionGiftElementComponent } from './components/companion-components/companion-create-components/companion-create-companion-gift-element/companion-create-companion-gift-element.component';
import { AffiliationCreateDialogComponent } from './components/affiliation-components/affiliation-create-dialog/affiliation-create-dialog.component';
import { AffiliationDeleteDialogComponent } from './components/affiliation-components/affiliation-delete-dialog/affiliation-delete-dialog.component';
import { AffiliationModificationDialogComponent } from './components/affiliation-components/affiliation-modification-dialog/affiliation-modification-dialog.component';
import { GiftTypeCreateDialogComponent } from './components/gift-type-components/gift-type-create-dialog/gift-type-create-dialog.component';
import { GiftTypeDeleteDialogComponent } from './components/gift-type-components/gift-type-delete-dialog/gift-type-delete-dialog.component';
import { GiftTypeModificationDialogComponent } from './components/gift-type-components/gift-type-modification-dialog/gift-type-modification-dialog.component';
import { GiftReactionCreateDialogComponent } from './components/gift-Reaction-components/gift-reaction-create-dialog/gift-reaction-create-dialog.component';
import { GiftReactionDeleteDialogComponent } from './components/gift-Reaction-components/gift-reaction-delete-dialog/gift-reaction-delete-dialog.component';
import { GiftReactionModificationDialogComponent } from './components/gift-Reaction-components/gift-reaction-modification-dialog/gift-reaction-modification-dialog.component';
import { AddAffiliationToCompanionDialogComponent } from './components/companion-components/companion-create-components/add-affiliation-to-companion-dialog/add-affiliation-to-companion-dialog.component';
import { AddCompanionGiftToCompanionDialogComponent } from './components/companion-components/companion-create-components/add-companion-gift-to-companion-dialog/add-companion-gift-to-companion-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AffiliationComponent,
    AffiliationElementComponent,
    GiftTypeComponent,
    GiftTypeElementComponent,
    GiftReactionComponent,
    GiftReactionElementComponent,
    CompanionCreateComponent,
    CompanionCreateAffiliationElementComponent,
    CompanionComponent,
    CompanionDetailsComponent,
    HomeComponent,
    CompanionCreateCompanionGiftElementComponent,
    AffiliationCreateDialogComponent,
    AffiliationDeleteDialogComponent,
    AffiliationModificationDialogComponent,
    GiftTypeCreateDialogComponent,
    GiftTypeDeleteDialogComponent,
    GiftTypeModificationDialogComponent,
    GiftReactionCreateDialogComponent,
    GiftReactionDeleteDialogComponent,
    GiftReactionModificationDialogComponent,
    AddAffiliationToCompanionDialogComponent,
    AddCompanionGiftToCompanionDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,    
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AffiliationCreateDialogComponent,
    AffiliationDeleteDialogComponent,
    AffiliationModificationDialogComponent,
    GiftTypeCreateDialogComponent,
    GiftTypeDeleteDialogComponent,
    GiftTypeModificationDialogComponent,
    GiftReactionCreateDialogComponent,
    GiftReactionDeleteDialogComponent,
    GiftReactionModificationDialogComponent,
    AddAffiliationToCompanionDialogComponent,
    AddCompanionGiftToCompanionDialogComponent
  ]
})
export class AppModule { }
