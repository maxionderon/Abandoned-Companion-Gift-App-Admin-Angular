import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftReactionComponent } from './gift-reaction.component';

describe('GiftReactionComponent', () => {
  let component: GiftReactionComponent;
  let fixture: ComponentFixture<GiftReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
