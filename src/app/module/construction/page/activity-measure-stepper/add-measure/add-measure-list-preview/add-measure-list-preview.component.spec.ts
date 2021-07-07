import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasureListPreviewComponent } from './add-measure-list-preview.component';

describe('AddMeasureListPreviewComponent', () => {
  let component: AddMeasureListPreviewComponent;
  let fixture: ComponentFixture<AddMeasureListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMeasureListPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeasureListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
