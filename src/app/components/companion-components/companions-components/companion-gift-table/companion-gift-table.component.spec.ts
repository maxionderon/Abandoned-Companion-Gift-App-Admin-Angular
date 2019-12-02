import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionGiftTableComponent } from './companion-gift-table.component';

describe('CompanionGiftTableComponent', () => {
  let component: CompanionGiftTableComponent;
  let fixture: ComponentFixture<CompanionGiftTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionGiftTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionGiftTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
