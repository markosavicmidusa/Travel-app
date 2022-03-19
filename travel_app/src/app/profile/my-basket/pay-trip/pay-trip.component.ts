import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileServiceService } from '../../profile-service.service';

@Component({
  selector: 'app-pay-trip',
  templateUrl: './pay-trip.component.html',
  styleUrls: ['./pay-trip.component.css']
})
export class PayTripComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public recievedData: any, private ProfileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

  finishTrips(){
   /* console.log('finishTrips()');
    console.log(this.recievedData.id);
*/
    this.ProfileService.updateTripStatusInProfileTrip(this.recievedData.id)
    
  }

}
