import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripsServiceService } from 'src/app/trips/trips-service.service';
import { DeleteTripComponent } from '../delete-trip/delete-trip.component';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-canceled-trips',
  templateUrl: './canceled-trips.component.html',
  styleUrls: ['./canceled-trips.component.css']
})
export class CanceledTripsComponent implements OnInit {

  constructor(public tripsTravel: TripsServiceService, private dialog:MatDialog, public ProfileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

  deleteTripDialog(canceledTripId: any){

    console.log("Cancel-trips components  -> deleteTripDialog(canceledTripId: any), poziva funkciju za otvara dialog za brisanje iz baze odgovarajuceg zapisa this.ProfileService.deleteTripInProfileTrips(this.recievedData.id)");

    const dialogRef=this.dialog.open(DeleteTripComponent,{
      data:{
        id: canceledTripId
      }
    });

  }

  canceledTrips=this.ProfileService.getCanceledTravelsFromProfile();
  

}
