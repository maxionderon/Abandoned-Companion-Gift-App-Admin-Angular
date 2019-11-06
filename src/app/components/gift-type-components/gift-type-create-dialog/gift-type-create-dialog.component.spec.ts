import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftTypeCreateDialogComponent } from './gift-type-create-dialog.component';

describe('GiftTypeCreateDialogComponent', () => {
  let component: GiftTypeCreateDialogComponent;
  let fixture: ComponentFixture<GiftTypeCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftTypeCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftTypeCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
