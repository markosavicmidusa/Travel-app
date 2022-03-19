import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripsServiceService } from 'src/app/trips/trips-service.service';
import { DeleteTripComponent } from '../delete-trip/delete-trip.component';
import { ProfileServiceService } from '../profile-service.service';
import { CancelTripComponent } from './cancel-trip/cancel-trip.component';
import { PayTripComponent } from './pay-trip/pay-trip.component';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit {

  constructor(public tripsTravel: TripsServiceService, public dialog: MatDialog, public ProfileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

  openPaymentDialog(activeTripId: any ){
    console.log(activeTripId);
    const dialogRef=this.dialog.open(PayTripComponent, {
      data:{
        id: activeTripId
      }
    });

    /** Poziva funkciju za za update ProfileTrips statusa putovanja */
    /*this.ProfileService.updateTripStatusInProfileTrip(activeTripId);*/



  }

  cancelTripDialog(activeTripId: any){
  
    const dialogRef=this.dialog.open(CancelTripComponent,{
      data:{
        id: activeTripId
      }
    })
    /** Poziva funkciju za za delete ProfileTrips putovanja */

  }

  activeTrips=this.ProfileService.getActiveTravelsFromProfile();
  sumOfActiveTrips=this.ProfileService.getTotalSumOfActiveTravels();



}
