import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileServiceService } from '../../profile-service.service';

@Component({
  selector: 'app-cancel-trip',
  templateUrl: './cancel-trip.component.html',
  styleUrls: ['./cancel-trip.component.css']
})
export class CancelTripComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private recievedData: any, private ProfileService: ProfileServiceService) { }

  ngOnInit(): void {
  }
  cancelTrip(){
    
    this.ProfileService.cancelTripInProfileTrips(this.recievedData.id);
  }
}
