import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripesOverlayComponent } from './stripes-overlay.component';

describe('StripesOverlayComponent', () => {
  let component: StripesOverlayComponent;
  let fixture: ComponentFixture<StripesOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripesOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripesOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
