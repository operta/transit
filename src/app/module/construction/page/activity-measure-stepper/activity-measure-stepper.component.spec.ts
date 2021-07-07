import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMeasureStepperComponent } from './activity-measure-stepper.component';

describe('ActivityMeasureStepperComponent', () => {
  let component: ActivityMeasureStepperComponent;
  let fixture: ComponentFixture<ActivityMeasureStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityMeasureStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMeasureStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
