import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeSelectComponent } from './activity-type-select.component';

describe('ActivityTypeSelectComponent', () => {
  let component: ActivityTypeSelectComponent;
  let fixture: ComponentFixture<ActivityTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityTypeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
