import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelRoundFormComponent } from './tunnel-round-form.component';

describe('TunnelRoundFormComponent', () => {
  let component: TunnelRoundFormComponent;
  let fixture: ComponentFixture<TunnelRoundFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelRoundFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelRoundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
