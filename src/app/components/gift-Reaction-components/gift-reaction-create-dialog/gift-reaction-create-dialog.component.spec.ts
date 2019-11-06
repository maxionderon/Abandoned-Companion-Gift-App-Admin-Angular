import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftReactionCreateDialogComponent } from './gift-reaction-create-dialog.component';

describe('GiftReactionCreateDialogComponent', () => {
  let component: GiftReactionCreateDialogComponent;
  let fixture: ComponentFixture<GiftReactionCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftReactionCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftReactionCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
