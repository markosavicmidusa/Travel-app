import { Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import { ProfileModel, ProfileServiceService } from './profile-service.service';
import { LoginComponent } from '../auth/login/login.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {



  constructor( public ProfileService: ProfileServiceService, public LoginComponent1: LoginComponent) {
   }



   isEditable: boolean = false;
   
  
   

  ngOnInit(): void {
    
   
  }
 
   
 
 
  
  


  

  userStatus: boolean=this.ProfileService.currentUserStatus;
  profile=this.ProfileService.currentUser;

  name: string = this.profile.name;
  surname: string = this.profile.surname;
  email: string = this.profile.email;
  phone_number: string = this.profile.phone_number;
  address: string = this.profile.address;
  favorite_trips: string = this.profile.favorite_trips;
  id: string = this.profile.id;


  async Update(form : NgForm) {

    
    await this.ProfileService.updateProfile(form, this.id);
    this.isEditable=false;
    this.ProfileService.reloadProfile();
  }





}
