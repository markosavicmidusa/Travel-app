import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripsServiceService } from 'src/app/trips/trips-service.service';
import { DeleteTripComponent } from '../delete-trip/delete-trip.component';
import { PayTripComponent } from './pay-trip/pay-trip.component';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit {

  constructor(public tripsTravel: TripsServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPaymentDialog(){
    const dialogRef=this.dialog.open(PayTripComponent);
  }

  deleteTripDialog(){

    const dialogRef=this.dialog.open(DeleteTripComponent)

  }

}
