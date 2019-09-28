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

import { AffiliationComponent } from './components/affiliation/affiliation.component';
import { AffiliationElementComponent } from './components/affiliation-element/affiliation-element.component';
import { AffiliationCreateComponent } from './components/affiliation-create/affiliation-create.component';
import { GiftTypeComponent } from './components/gift-type/gift-type.component';
import { GiftTypeCreateComponent } from './components/gift-type-create/gift-type-create.component';
import { GiftTypeElementComponent } from './components/gift-type-element/gift-type-element.component';
import { GiftReactionComponent } from './components/gift-reaction/gift-reaction.component';
import { GiftReactionCreateComponent } from './components/gift-reaction-create/gift-reaction-create.component';
import { GiftReactionElementComponent } from './components/gift-reaction-element/gift-reaction-element.component';
import { CompanionCreateComponent } from './components/companion-create/companion-create.component';
import { CompanionCreateAddAffiliationComponent } from './components/companion-create-add-affiliation/companion-create-add-affiliation.component';
import { CompanionCreateAffiliationElementComponent } from './components/companion-create-affiliation-element/companion-create-affiliation-element.component';
import { CompanionCreateAddCompanionGiftComponent } from './components/companion-create-add-companion-gift/companion-create-add-companion-gift.component';


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
    CompanionCreateAddCompanionGiftComponent
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
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
