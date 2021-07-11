import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMeasureFormComponent } from './activity-measure-form.component';

describe('ActivityMeasureStepperComponent', () => {
  let component: ActivityMeasureFormComponent;
  let fixture: ComponentFixture<ActivityMeasureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityMeasureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMeasureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
