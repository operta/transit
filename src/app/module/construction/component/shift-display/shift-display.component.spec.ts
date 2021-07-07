import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftDisplayComponent } from './shift-display.component';

describe('ShiftDisplayComponent', () => {
  let component: ShiftDisplayComponent;
  let fixture: ComponentFixture<ShiftDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
