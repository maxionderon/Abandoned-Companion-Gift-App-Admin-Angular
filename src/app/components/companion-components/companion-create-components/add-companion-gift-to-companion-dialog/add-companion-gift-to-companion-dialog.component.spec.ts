import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanionGiftToCompanionDialogComponent } from './add-companion-gift-to-companion-dialog.component';

describe('AddCompanionGiftsToCompanionDialogComponent', () => {
  let component: AddCompanionGiftToCompanionDialogComponent;
  let fixture: ComponentFixture<AddCompanionGiftToCompanionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanionGiftToCompanionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanionGiftToCompanionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
