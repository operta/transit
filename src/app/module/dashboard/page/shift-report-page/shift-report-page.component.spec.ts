import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftReportPageComponent } from './shift-report-page.component';

describe('ShiftReportPageComponent', () => {
  let component: ShiftReportPageComponent;
  let fixture: ComponentFixture<ShiftReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftReportPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
