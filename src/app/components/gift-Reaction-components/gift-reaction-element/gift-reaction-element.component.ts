import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GiftReaction } from 'src/app/model/gift-reaction';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.prod';
import { GiftReactionDeleteDialogComponent } from '../gift-reaction-delete-dialog/gift-reaction-delete-dialog.component';

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
  
  constructor(private giftReactionDeleteDialog: MatDialog) { }

  ngOnInit() {
  }
  
  deleteGiftReaction(): void {

    this.eventDeleteGiftReaction.emit(this.giftReaction);
    
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
