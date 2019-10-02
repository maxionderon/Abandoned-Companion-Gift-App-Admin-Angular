import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftTypeElementComponent } from './gift-type-element.component';

describe('GiftTypeElementComponent', () => {
  let component: GiftTypeElementComponent;
  let fixture: ComponentFixture<GiftTypeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftTypeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftTypeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
