import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { TripsServiceService } from './trips-service.service';


export interface TravelType {
  value: string;
  viewValue: string;
}
export interface PricesRange {
  value: number;
  viewValue1: number;
  viewValue2: number;
}


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})



export class TripsComponent implements OnInit {

  constructor(public TravelData: TripsServiceService, private dialog: MatDialog) { }


  public travels: TravelType[] = [

    { value: 'airplane', viewValue: "Airplane" },
    { value: 'train', viewValue: "Train" },
    { value: 'bus', viewValue: "Bus" }

  ]

  public prices: PricesRange[] = [

    { value: 1000.00, viewValue1: 0.00, viewValue2: 1000.00 },
    { value: 2000.00, viewValue1: 1000.00, viewValue2: 2000.00 },
    { value: 3000.00, viewValue1: 2000.00, viewValue2: 3000.00 },
    { value: 4000.00, viewValue1: 3000.00, viewValue2: 4000.00 },
    { value: 5000.00, viewValue1: 4000.00, viewValue2: 5000.00 },
    { value: 6000.00, viewValue1: 5000.00, viewValue2: 6000.00 }
  ]



  ngOnInit(): void {

  }

  addToCardDialog() {


    const dialogRef = this.dialog.open(AddToCardComponent, {
      data: {
        id: this.TravelData.currentTravel.id,
        destination: this.TravelData.currentTravel.destination,
        picture_path: this.TravelData.currentTravel.picture_path,
        travel_type: this.TravelData.currentTravel.travel_type,
        duration: this.TravelData.currentTravel.duration,
        distance: this.TravelData.currentTravel.distance,
        price: this.TravelData.currentTravel.price,
        description: this.TravelData.currentTravel.description,
        time: this.TravelData.currentTravel.time,
        recensents: this.TravelData.currentTravel.recensents,
        recensions: this.TravelData.currentTravel.recensions,
        grade: this.TravelData.currentTravel.grade,
        status: this.TravelData.currentTravel.status
      }
    });


  }
 





}

