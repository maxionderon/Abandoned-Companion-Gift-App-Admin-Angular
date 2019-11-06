import { Component, OnInit } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { GiftReactionService } from 'src/app/services/gift-reaction-service/gift-reaction.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { GiftReactionCreateDialogComponent } from '../gift-reaction-create-dialog/gift-reaction-create-dialog.component';

@Component({
  selector: 'app-gift-reaction',
  templateUrl: './gift-reaction.component.html',
  styleUrls: ['./gift-reaction.component.css']
})
export class GiftReactionComponent implements OnInit {

  giftReactions: GiftReaction[];

  constructor(private giftReactionService: GiftReactionService,
    private giftReactionCreateDialog: MatDialog) { }

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
  
  dialogCreateGiftType(): void {

    const dialogConfigCreateGiftType = new MatDialogConfig();

    dialogConfigCreateGiftType.width = environment.dialogWidth;

    const dialogRef = this.giftReactionCreateDialog.open(GiftReactionCreateDialogComponent, dialogConfigCreateGiftType);

    dialogRef.afterClosed().subscribe( giftReaction => {

      if( giftReaction instanceof GiftReaction ) {

        this.createGiftReaction(giftReaction);

      }

    });

  }

}
