import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftTypeCreateComponent } from './gift-type-create.component';

describe('GiftTypeCreateComponent', () => {
  let component: GiftTypeCreateComponent;
  let fixture: ComponentFixture<GiftTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
