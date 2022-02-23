import { Component, OnInit } from '@angular/core';
import { ProfileModel, ProfileServiceService } from './profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public ProfileService: ProfileServiceService) {

   }
  
  ngOnInit(): void {
  }

  isEditable: boolean = false;

  profile=this.ProfileService.currentProfile;

  

}
