import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private recievedData: any, private ProfileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

  deleteTrip(){
    
    this.ProfileService.deleteTripInProfileTrips(this.recievedData.id);
  }
  

}
