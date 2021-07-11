import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMeasureComponent } from './add-edit-measure.component';

describe('AddMeasureComponent', () => {
  let component: AddEditMeasureComponent;
  let fixture: ComponentFixture<AddEditMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
