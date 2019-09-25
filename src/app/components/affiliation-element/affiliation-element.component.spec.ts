import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationElementComponent } from './affiliation-element.component';

describe('AffiliationElementComponent', () => {
  let component: AffiliationElementComponent;
  let fixture: ComponentFixture<AffiliationElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliationElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
