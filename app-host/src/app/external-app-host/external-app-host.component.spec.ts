import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAppHostComponent } from './external-app-host.component';

describe('ExternalAppHostComponent', () => {
  let component: ExternalAppHostComponent;
  let fixture: ComponentFixture<ExternalAppHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalAppHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalAppHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
