import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDefinitionSelectComponent } from './support-definition-select.component';

describe('SupportDefinitionSelectComponent', () => {
  let component: SupportDefinitionSelectComponent;
  let fixture: ComponentFixture<SupportDefinitionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportDefinitionSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDefinitionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
