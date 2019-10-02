import { Component, OnInit } from '@angular/core';
import { GiftTypeService } from 'src/app/services/gift-type-service/gift-type.service';
import { GiftType } from 'src/app/model/gift-type';

@Component({
  selector: 'app-gift-type',
  templateUrl: './gift-type.component.html',
  styleUrls: ['./gift-type.component.css']
})
export class GiftTypeComponent implements OnInit {

  giftTypes: GiftType[];

  createMode: boolean = false;

  constructor(private giftTypeService: GiftTypeService) { }

  ngOnInit() {

    this.getGiftTypes();

  }

  getGiftTypes(): void {

    this.giftTypeService.getGiftTypes().subscribe( giftTypes => {

      this.giftTypes = giftTypes;
      
    });
    
  }

  createGiftType(giftType: GiftType): void {

    this.giftTypeService.postGiftType(giftType).subscribe( response => {

      this.giftTypes = response;

    });

  }

  updateGiftType(giftType: GiftType): void {

    this.giftTypeService.putGiftType(giftType).subscribe( response => {

      this.giftTypes = response;

    });

  }

  deleteGiftType(giftType: GiftType): void {

    this.giftTypeService.deleteGiftType(giftType.id).subscribe( response => {

      this.giftTypes = response;

    });

  }

  hideGiftTypesAndShowCreate(): void {

    this.createMode = true;

  }

  showGiftTypesAndHideCreate(): void {

    this.createMode = false;

  }

}
