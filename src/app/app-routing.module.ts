import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffiliationComponent } from './components/affiliation-components/affiliation/affiliation.component';
import { GiftTypeComponent } from './components/gift-type-components/gift-type/gift-type.component';
import { GiftReactionComponent } from './components/gift-Reaction-components/gift-reaction/gift-reaction.component';
import { CompanionCreateComponent } from './components/companion-components/companion-create-components/companion-create/companion-create.component';
import { CompanionComponent } from './components/companion-components/companions-components/companion/companion.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/error-components/not-found/not-found.component';
import { ServiceNotAvailableComponent } from './components/error-components/service-not-available/service-not-available.component';



const routes: Routes = [
  { path: "affiliations", component: AffiliationComponent },
  { path: "giftTypes", component: GiftTypeComponent },
  { path: "giftReactions", component: GiftReactionComponent },
  { path: "companion", component: CompanionComponent },
  { path: "companion/create", component: CompanionCreateComponent },
  { path: "not-found", component: NotFoundComponent},
  { path: "service-not-available", component: ServiceNotAvailableComponent}, 
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
