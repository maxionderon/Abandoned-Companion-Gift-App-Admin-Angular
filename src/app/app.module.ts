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
import { AffiliationCreateComponent } from './components/affiliation-components/affiliation-create/affiliation-create.component';
import { GiftTypeComponent } from './components/gift-type-components/gift-type/gift-type.component';
import { GiftTypeCreateComponent } from './components/gift-type-components/gift-type-create/gift-type-create.component';
import { GiftTypeElementComponent } from './components/gift-type-components/gift-type-element/gift-type-element.component';
import { GiftReactionComponent } from './components/gift-Reaction-components/gift-reaction/gift-reaction.component';
import { GiftReactionCreateComponent } from './components/gift-Reaction-components/gift-reaction-create/gift-reaction-create.component';
import { GiftReactionElementComponent } from './components/gift-Reaction-components/gift-reaction-element/gift-reaction-element.component';
import { CompanionCreateComponent } from './components/companion-components/companion-create-components/companion-create/companion-create.component';
import { CompanionCreateAddAffiliationComponent } from './components/companion-components/companion-create-components/companion-create-add-affiliation/companion-create-add-affiliation.component';
import { CompanionCreateAffiliationElementComponent } from './components/companion-components/companion-create-components/companion-create-affiliation-element/companion-create-affiliation-element.component';
import { CompanionCreateAddCompanionGiftComponent } from './components/companion-components/companion-create-components/companion-create-add-companion-gift/companion-create-add-companion-gift.component';
import { CompanionComponent } from './components/companion-components/companions-components/companion/companion.component';
import { CompanionDetailsComponent } from './components/companion-components/companions-components/companion-details/companion-details.component';
import { HomeComponent } from './components/home/home.component';
import { CompanionCreateCompanionGiftElementComponent } from './components/companion-components/companion-create-components/companion-create-companion-gift-element/companion-create-companion-gift-element.component';
import { AffiliationCreateDialogComponent } from './components/affiliation-components/affiliation-create-dialog/affiliation-create-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AffiliationComponent,
    AffiliationElementComponent,
    AffiliationCreateComponent,
    GiftTypeComponent,
    GiftTypeCreateComponent,
    GiftTypeElementComponent,
    GiftReactionComponent,
    GiftReactionCreateComponent,
    GiftReactionElementComponent,
    CompanionCreateComponent,
    CompanionCreateAddAffiliationComponent,
    CompanionCreateAffiliationElementComponent,
    CompanionCreateAddCompanionGiftComponent,
    CompanionComponent,
    CompanionDetailsComponent,
    HomeComponent,
    CompanionCreateCompanionGiftElementComponent,
    AffiliationCreateDialogComponent
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
    AffiliationCreateComponent
  ]
})
export class AppModule { }
