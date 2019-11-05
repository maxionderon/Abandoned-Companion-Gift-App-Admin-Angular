import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationDeleteDialogComponent } from './affiliation-delete-dialog.component';

describe('AffiliationDeleteDialogComponent', () => {
  let component: AffiliationDeleteDialogComponent;
  let fixture: ComponentFixture<AffiliationDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliationDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliationDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
