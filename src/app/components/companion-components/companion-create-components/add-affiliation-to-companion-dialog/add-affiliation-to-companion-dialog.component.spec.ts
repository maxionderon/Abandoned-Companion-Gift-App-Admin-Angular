import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAffiliationToCompanionDialogComponent } from './add-affiliation-to-companion-dialog.component';

describe('AddAffiliationToCompanionDialogComponent', () => {
  let component: AddAffiliationToCompanionDialogComponent;
  let fixture: ComponentFixture<AddAffiliationToCompanionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAffiliationToCompanionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAffiliationToCompanionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
