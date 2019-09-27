import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionCreateAddAffiliationComponent } from './companion-create-add-affiliation.component';

describe('CompanionCreateAddAffiliationComponent', () => {
  let component: CompanionCreateAddAffiliationComponent;
  let fixture: ComponentFixture<CompanionCreateAddAffiliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionCreateAddAffiliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionCreateAddAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
