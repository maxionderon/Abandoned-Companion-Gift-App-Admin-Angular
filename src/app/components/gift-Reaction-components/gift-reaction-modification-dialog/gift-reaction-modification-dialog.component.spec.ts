import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftReactionModificationDialogComponent } from './gift-reaction-modification-dialog.component';

describe('GiftReactionModificationDialogComponent', () => {
  let component: GiftReactionModificationDialogComponent;
  let fixture: ComponentFixture<GiftReactionModificationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftReactionModificationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftReactionModificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
