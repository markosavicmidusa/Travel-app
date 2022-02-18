import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledTripsComponent } from './canceled-trips.component';

describe('CanceledTripsComponent', () => {
  let component: CanceledTripsComponent;
  let fixture: ComponentFixture<CanceledTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanceledTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceledTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
