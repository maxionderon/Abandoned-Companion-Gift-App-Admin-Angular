import { Component, OnInit, Inject } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gift-reaction-delete-dialog',
  templateUrl: './gift-reaction-delete-dialog.component.html',
  styleUrls: ['./gift-reaction-delete-dialog.component.css']
})
export class GiftReactionDeleteDialogComponent implements OnInit {

  giftReaction: GiftReaction;

  constructor(private giftReactionDialogRef: MatDialogRef<GiftReactionDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) giftReaction: GiftReaction) {

      this.giftReaction = giftReaction;

     }

  ngOnInit() {
  }

  abortDelete(): void {

    this.giftReactionDialogRef.close();

  }

  deleteGiftReaction(): void {

    this.giftReactionDialogRef.close(true);

  }

}
