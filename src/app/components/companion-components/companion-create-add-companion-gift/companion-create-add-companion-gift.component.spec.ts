import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionCreateAddCompanionGiftComponent } from './companion-create-add-companion-gift.component';

describe('CompanionCreateAddCompanionGiftComponent', () => {
  let component: CompanionCreateAddCompanionGiftComponent;
  let fixture: ComponentFixture<CompanionCreateAddCompanionGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionCreateAddCompanionGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionCreateAddCompanionGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
