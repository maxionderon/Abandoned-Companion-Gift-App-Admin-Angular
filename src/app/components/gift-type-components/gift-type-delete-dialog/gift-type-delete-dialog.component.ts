import { Component, OnInit, Inject } from '@angular/core';
import { GiftType } from 'src/app/model/gift-type';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gift-type-delete-dialog',
  templateUrl: './gift-type-delete-dialog.component.html',
  styleUrls: ['./gift-type-delete-dialog.component.css']
})
export class GiftTypeDeleteDialogComponent implements OnInit {

  giftType: GiftType;

  constructor(private giftTypeDeleteDialogRef: MatDialogRef<GiftTypeDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) giftType: GiftType) {

      this.giftType = giftType;

     }

  ngOnInit() {
  }

  abortDelete(): void {

    this.giftTypeDeleteDialogRef.close();

  }

  deleteGiftType(): void {

    this.giftTypeDeleteDialogRef.close(true);

  }

}
