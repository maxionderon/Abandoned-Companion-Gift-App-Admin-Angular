import { Component, OnInit } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { GiftReactionService } from 'src/app/services/gift-reaction-service/gift-reaction.service';

@Component({
  selector: 'app-gift-reaction',
  templateUrl: './gift-reaction.component.html',
  styleUrls: ['./gift-reaction.component.css']
})
export class GiftReactionComponent implements OnInit {

  giftReactions: GiftReaction[];

  createMode: boolean = false;

  constructor(private giftReactionService: GiftReactionService) { }

  ngOnInit() {

    this.getGiftReactions();
    
  }

  createGiftReaction(giftReaction: GiftReaction): void {

    this.giftReactionService.postGiftReaction(giftReaction).subscribe( response =>  {

      this.giftReactions = response;

    });

  }

  getGiftReactions(): void {

    this.giftReactionService.getGiftReactions().subscribe( response => {

      this.giftReactions = response;

    });

  }

  updateGiftReaction(giftReaction: GiftReaction): void {

    this.giftReactionService.putGiftReaction(giftReaction).subscribe( response => {

      this.giftReactions = response;

    });

  }

  deleteGiftReaction(giftReaction: GiftReaction): void {

    this.giftReactionService.deleteGiftReaction(giftReaction.id).subscribe( response => {

      this.giftReactions = response;

    });

  }

  hideGiftReactionsAndShowCreate(): void {

    this.createMode = true;

  }

  showGiftReactionsAndHideCreate(): void {

    this.createMode = false;
    
  }

}
