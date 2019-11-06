import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationModificationDialogComponent } from './affiliation-modification-dialog.component';

describe('AffiliationModificationDialogComponent', () => {
  let component: AffiliationModificationDialogComponent;
  let fixture: ComponentFixture<AffiliationModificationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliationModificationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliationModificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
