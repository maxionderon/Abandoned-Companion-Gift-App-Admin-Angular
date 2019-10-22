import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionCreateCompanionGiftElementComponent } from './companion-create-companion-gift-element.component';

describe('CompanionCreateCompanionGiftElementComponent', () => {
  let component: CompanionCreateCompanionGiftElementComponent;
  let fixture: ComponentFixture<CompanionCreateCompanionGiftElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionCreateCompanionGiftElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionCreateCompanionGiftElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
