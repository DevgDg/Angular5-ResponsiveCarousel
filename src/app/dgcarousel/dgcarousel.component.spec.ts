import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcarouselComponent } from './dgcarousel.component';

describe('DgcarouselComponent', () => {
  let component: DgcarouselComponent;
  let fixture: ComponentFixture<DgcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
