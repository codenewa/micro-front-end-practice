import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalDashboardTileComponent } from './external-dashboard-tile.component';

describe('ExternalDashboardTileComponent', () => {
  let component: ExternalDashboardTileComponent;
  let fixture: ComponentFixture<ExternalDashboardTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalDashboardTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalDashboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
