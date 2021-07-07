import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftSelectComponent } from './shift-select.component';

describe('ShiftSelectionComponent', () => {
  let component: ShiftSelectComponent;
  let fixture: ComponentFixture<ShiftSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
