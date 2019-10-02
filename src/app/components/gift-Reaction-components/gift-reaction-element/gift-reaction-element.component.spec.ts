import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftReactionElementComponent } from './gift-reaction-element.component';

describe('GiftReactionElementComponent', () => {
  let component: GiftReactionElementComponent;
  let fixture: ComponentFixture<GiftReactionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftReactionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftReactionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
