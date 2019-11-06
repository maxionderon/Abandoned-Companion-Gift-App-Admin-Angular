import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftTypeModificationDialogComponent } from './gift-type-modification-dialog.component';

describe('GiftTypeModificationDialogComponent', () => {
  let component: GiftTypeModificationDialogComponent;
  let fixture: ComponentFixture<GiftTypeModificationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftTypeModificationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftTypeModificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
