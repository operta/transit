import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelRoundsComponent } from './tunnel-rounds.component';

describe('AbschlageComponent', () => {
  let component: TunnelRoundsComponent;
  let fixture: ComponentFixture<TunnelRoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelRoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
