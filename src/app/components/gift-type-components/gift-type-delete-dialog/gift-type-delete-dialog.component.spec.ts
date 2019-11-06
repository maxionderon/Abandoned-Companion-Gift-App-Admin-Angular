import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftTypeDeleteDialogComponent } from './gift-type-delete-dialog.component';

describe('GiftTypeDeleteDialogComponent', () => {
  let component: GiftTypeDeleteDialogComponent;
  let fixture: ComponentFixture<GiftTypeDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftTypeDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftTypeDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
