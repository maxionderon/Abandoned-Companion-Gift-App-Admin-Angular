import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionCreateComponent } from './companion-create.component';

describe('CompanionCreateComponent', () => {
  let component: CompanionCreateComponent;
  let fixture: ComponentFixture<CompanionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
