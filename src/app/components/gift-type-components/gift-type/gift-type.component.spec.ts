import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftTypeComponent } from './gift-type.component';

describe('GiftTypeComponent', () => {
  let component: GiftTypeComponent;
  let fixture: ComponentFixture<GiftTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
