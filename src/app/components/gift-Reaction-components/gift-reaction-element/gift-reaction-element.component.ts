import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.prod';
import { GiftReactionDeleteDialogComponent } from '../gift-reaction-delete-dialog/gift-reaction-delete-dialog.component';
import { GiftReactionModificationDialogComponent } from '../gift-reaction-modification-dialog/gift-reaction-modification-dialog.component';

@Component({
  selector: 'app-gift-reaction-element',
  templateUrl: './gift-reaction-element.component.html',
  styleUrls: ['./gift-reaction-element.component.css']
})
export class GiftReactionElementComponent implements OnInit {

  @Input("giftReaction")
  giftReaction: GiftReaction;

  @Output()
  eventDeleteGiftReaction = new EventEmitter();

  @Output()
  eventUpdateGiftReaction = new EventEmitter();
  
  constructor(private giftReactionDeleteDialog: MatDialog, private giftReactionModifyDialog: MatDialog) { }

  ngOnInit() {
  }

  updateGiftReaction(giftReaction: GiftReaction) {

    this.giftReaction.name = giftReaction.name;
    this.giftReaction.gainFactor = giftReaction.gainFactor;

    this.eventUpdateGiftReaction.emit(this.giftReaction);

  }
  
  deleteGiftReaction(): void {

    this.eventDeleteGiftReaction.emit(this.giftReaction);
    
  }

  dialogModifyGiftReaction(): void {

    const dialogConfigModifyGiftReaction = new MatDialogConfig();

    dialogConfigModifyGiftReaction.width = environment.dialogWidth;
    dialogConfigModifyGiftReaction.data = this.giftReaction;

    const dialogRef = this.giftReactionModifyDialog.open(GiftReactionModificationDialogComponent, dialogConfigModifyGiftReaction);

    dialogRef.afterClosed().subscribe( giftReaction => {

      if( giftReaction !== undefined ) {

        this.updateGiftReaction(giftReaction);

      }

    });

  }

  dialogDeleteGiftReaction(): void {

    const dialogConfigDeleteGiftReaction = new MatDialogConfig();

    dialogConfigDeleteGiftReaction.width = environment.dialogWidth;
    dialogConfigDeleteGiftReaction.data = this.giftReaction;

    const dialogRef = this.giftReactionDeleteDialog.open(GiftReactionDeleteDialogComponent, dialogConfigDeleteGiftReaction)

    dialogRef.afterClosed().subscribe( deleteFlag => {

      if( deleteFlag === true ) {

        this.deleteGiftReaction();
        
      }

    });

  }

}
