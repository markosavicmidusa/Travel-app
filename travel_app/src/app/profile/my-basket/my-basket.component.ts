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

  activeTrips=this.ProfileService.getActiveTravelsFromProfile();
  sumOfActiveTrips=this.ProfileService.getTotalSumOfActiveTravels();

  openPaymentDialog(activeTripId: any ){

    console.log("My basket -> openPaymentDialog(activeTripId: any ), otvara dialog za placanje stavke iz korpe");

    console.log(activeTripId);
    const dialogRef=this.dialog.open(PayTripComponent, {
      data:{
        id: activeTripId
      }
    });

    /** Poziva funkciju za za update ProfileTrips statusa putovanja */

  }

  cancelTripDialog(activeTripId: any){
    
    console.log("My basket -> cancelTripDialog(activeTripId: any), otvara dialog za cancel trip-a");

    console.log(activeTripId);
    const dialogRef=this.dialog.open(CancelTripComponent,{
      data:{
        id: activeTripId
      }
    })
    /** Poziva funkciju za za delete ProfileTrips putovanja */

  }

  



}
