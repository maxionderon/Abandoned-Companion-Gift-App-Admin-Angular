import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionDetailsComponent } from './companion-details.component';

describe('CompanionDetailsComponent', () => {
  let component: CompanionDetailsComponent;
  let fixture: ComponentFixture<CompanionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
