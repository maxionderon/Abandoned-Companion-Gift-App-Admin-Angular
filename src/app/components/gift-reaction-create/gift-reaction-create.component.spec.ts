import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftReactionCreateComponent } from './gift-reaction-create.component';

describe('GiftReactionCreateComponent', () => {
  let component: GiftReactionCreateComponent;
  let fixture: ComponentFixture<GiftReactionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftReactionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftReactionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
