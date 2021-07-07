import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelRoundDisplayComponent } from './tunnel-round-display.component';

describe('TunnelRoundDisplayComponent', () => {
  let component: TunnelRoundDisplayComponent;
  let fixture: ComponentFixture<TunnelRoundDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelRoundDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelRoundDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
