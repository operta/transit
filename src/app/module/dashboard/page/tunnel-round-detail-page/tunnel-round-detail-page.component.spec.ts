import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelRoundDetailPageComponent } from './tunnel-round-detail-page.component';

describe('TunnelRoundDetailPageComponent', () => {
  let component: TunnelRoundDetailPageComponent;
  let fixture: ComponentFixture<TunnelRoundDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelRoundDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelRoundDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
