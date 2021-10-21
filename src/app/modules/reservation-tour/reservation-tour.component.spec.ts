import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTourComponent } from './reservation-tour.component';

describe('ReservationTourComponent', () => {
  let component: ReservationTourComponent;
  let fixture: ComponentFixture<ReservationTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
