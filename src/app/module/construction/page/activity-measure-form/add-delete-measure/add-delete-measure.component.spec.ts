import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteMeasureComponent } from './add-delete-measure.component';

describe('AddMeasureComponent', () => {
  let component: AddDeleteMeasureComponent;
  let fixture: ComponentFixture<AddDeleteMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
