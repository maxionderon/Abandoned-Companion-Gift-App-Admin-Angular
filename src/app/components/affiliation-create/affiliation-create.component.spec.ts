import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationCreateComponent } from './affiliation-create.component';

describe('AffiliationCreateComponent', () => {
  let component: AffiliationCreateComponent;
  let fixture: ComponentFixture<AffiliationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
