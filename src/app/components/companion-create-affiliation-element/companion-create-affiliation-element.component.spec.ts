import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionCreateAffiliationElementComponent } from './companion-create-affiliation-element.component';

describe('CompanionCreateAffiliationElementComponent', () => {
  let component: CompanionCreateAffiliationElementComponent;
  let fixture: ComponentFixture<CompanionCreateAffiliationElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionCreateAffiliationElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionCreateAffiliationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
