import { Component, OnInit } from '@angular/core';
import { ProfileModel, ProfileServiceService } from './profile-service.service';
import { LoginComponent } from '../auth/login/login.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public ProfileService: ProfileServiceService, public LoginComponent1: LoginComponent) {

   }
   
  ngOnInit(): void {
    /*console.log(this.user);*/
  }

  isEditable: boolean = false;

  profile=this.ProfileService.currentProfile;
  /*user:boolean=this.LoginComponent1.user;*/
  
}
