import { Component, OnInit, Input } from '@angular/core';
import { CompanionGift } from 'src/app/model/companion-gift';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-companion-gift-table',
  templateUrl: './companion-gift-table.component.html',
  styleUrls: ['./companion-gift-table.component.css']
})
export class CompanionGiftTableComponent implements OnInit {

   @Input() 
   companionGifts: CompanionGift[];
   displayedColumns: string[] = ['type', 'reaction'];
   activeTableSort: Sort;

  constructor() { 
  }

  ngOnInit() {

    this.activeTableSort = { active: "", direction: "" };

  }

  sortData(sort: Sort) {
    
    const data = this.companionGifts.slice();

    if( sort.active === "reaction") {

      if(sort.direction === "asc" ) {

        this.companionGifts = this.sortDataByReaction(data).reverse();

      }

      if(sort.direction === "desc" ) {

        this.companionGifts = this.sortDataByReaction(data);

      }
    
    }

    if( sort.active === "type") {

      if(sort.direction === "asc" ) {

        this.companionGifts = this.sortDataByType(data);

      }

      if(sort.direction === "desc" ) {

        this.companionGifts = this.sortDataByType(data).reverse();

      }
    
    }

    this.activeTableSort = sort;

  }

  sortDataByType( data: CompanionGift[] ) {

    return data.sort( (a, b) => (a.giftType.type < b.giftType.type ? -1 : 1) );

  }

  sortDataByReaction( data: CompanionGift[] ) { 

    return data.sort( (a, b) => (a.giftReaction.gainFactor < b.giftReaction.gainFactor ? -1 : 1) );

  }
  
}
