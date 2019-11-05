import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationCreateDialogComponent } from './affiliation-create-dialog.component';

describe('AffiliationCreateDialogComponent', () => {
  let component: AffiliationCreateDialogComponent;
  let fixture: ComponentFixture<AffiliationCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliationCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliationCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
