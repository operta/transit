import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureDefinitionSelectComponent } from './measure-definition-select.component';

describe('MeasureDefinitionSelectComponent', () => {
  let component: MeasureDefinitionSelectComponent;
  let fixture: ComponentFixture<MeasureDefinitionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasureDefinitionSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureDefinitionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
