import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftReactionDeleteDialogComponent } from './gift-reaction-delete-dialog.component';

describe('GiftReactionDeleteDialogComponent', () => {
  let component: GiftReactionDeleteDialogComponent;
  let fixture: ComponentFixture<GiftReactionDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftReactionDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftReactionDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
