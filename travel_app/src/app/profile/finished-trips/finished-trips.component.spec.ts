import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedTripsComponent } from './finished-trips.component';

describe('FinishedTripsComponent', () => {
  let component: FinishedTripsComponent;
  let fixture: ComponentFixture<FinishedTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
