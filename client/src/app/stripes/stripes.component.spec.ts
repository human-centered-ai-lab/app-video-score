import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripesComponent } from './stripes.component';

describe('StripesComponent', () => {
  let component: StripesComponent;
  let fixture: ComponentFixture<StripesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
