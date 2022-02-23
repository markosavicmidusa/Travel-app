import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripsServiceService } from 'src/app/trips/trips-service.service';
import { DeleteTripComponent } from '../delete-trip/delete-trip.component';
import { ProfileServiceService } from '../profile-service.service';
import { RateTripComponent } from './rate-trip/rate-trip.component';

@Component({
  selector: 'app-finished-trips',
  templateUrl: './finished-trips.component.html',
  styleUrls: ['./finished-trips.component.css']
})
export class FinishedTripsComponent implements OnInit {

  constructor(public tripsTravel: TripsServiceService, private dialog: MatDialog, public ProfileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

  deleteTripDialog(){

    const dialogRef=this.dialog.open(DeleteTripComponent);

  }
  rateTrip(){
    const dialogRef=this.dialog.open(RateTripComponent);
  }


  finishedTrips=this.ProfileService.getFinishedTravelsFromProfile();
}
