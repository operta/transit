import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDefinitionDisplayComponent } from './support-definition-display.component';

describe('SupportDefinitionDisplayComponent', () => {
  let component: SupportDefinitionDisplayComponent;
  let fixture: ComponentFixture<SupportDefinitionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportDefinitionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDefinitionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
