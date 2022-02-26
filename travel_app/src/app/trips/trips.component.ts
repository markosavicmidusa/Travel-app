import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileServiceService } from '../profile/profile-service.service';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { TripsModel, TripsServiceService } from './trips-service.service';


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


  constructor(public TravelData: TripsServiceService, private dialog: MatDialog, public ProfileService: ProfileServiceService){
    
  }


  public travels: TravelType[] = [

    { value: 'plane', viewValue: "Airplane" },
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

  userStatus: boolean=this.ProfileService.currentUserStatus;
  


  ngOnInit(): void {




  }

  /*destination: any;*/

  isSearchActive = false;

  travelsObject: Array<TripsModel> = this.TravelData.getTravels();


  openReservationDialog(id: number) {

    var travel = this.TravelData.getCurrentTravelObject(id)
    console.log(travel);

    const dialogRef = this.dialog.open(AddToCardComponent, {
      data: {
        id: travel.id,
        destination: travel.destination,
        picture_path: travel.picture_path,
        travel_type: travel.travel_type,
        duration: travel.duration,
        distance: travel.distance,
        price: travel.price,
        description: travel.description,
        time: travel.time,
        recensents: travel.recensents,
        recensions: travel.recensions,
        grade: travel.grade,
        status: travel.status
      }
    });


  }

  fastSearch(parametar: any) {
    this.travelsObject = [];
    this.travelsObject= this.TravelData.getTravelsByParametar(parametar.value);
     
  }

  onSubmit(form: NgForm){
  
    this.travelsObject = [];
    this.travelsObject= this.TravelData.getTravelsByParametars(form.value.direction, form.value.price, form.value.travel_type);
  
  }

  putOnPreviousState(){
    this.travelsObject = [];
    this.travelsObject = this.TravelData.getTravels();
  }


}