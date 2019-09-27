import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffiliationComponent } from './components/affiliation/affiliation.component';
import { GiftTypeComponent } from './components/gift-type/gift-type.component';
import { GiftReactionComponent } from './components/gift-reaction/gift-reaction.component';


const routes: Routes = [
  { path: "affiliations", component: AffiliationComponent },
  { path: "giftTypes", component: GiftTypeComponent },
  { path: "giftReactions", component: GiftReactionComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
