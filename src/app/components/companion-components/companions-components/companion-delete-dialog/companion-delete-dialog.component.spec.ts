import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionDeleteDialogComponent } from './companion-delete-dialog.component';

describe('CompanionDeleteDialogComponent', () => {
  let component: CompanionDeleteDialogComponent;
  let fixture: ComponentFixture<CompanionDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
