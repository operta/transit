import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEmployeesComponent } from './shift-participants.component';

describe('EmployeeDisplayComponent', () => {
  let component: ShiftEmployeesComponent;
  let fixture: ComponentFixture<ShiftEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
