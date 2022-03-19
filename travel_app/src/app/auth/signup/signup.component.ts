import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileServiceService } from 'src/app/profile/profile-service.service';
import { ProfileModel } from 'src/app/profile/profile-service.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ProfileService: ProfileServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  
  messageError:string='';
  async onSubmit(form : NgForm){
    console.log(form)
    /**Kod za upis podataka u bazu */
    let profile: ProfileModel = {
      name: form.value.forname,
      surname: form.value.surname,
      password: form.value.password,
      email: form.value.email,
      phone_number: form.value.number,
      address: form.value.address,
      favorite_trips: form.value.favorite_trips_info,
      travel: [],
      isLogedIn: true
    }

   await this.ProfileService.createNewProfile(profile).then(res=>{
      console.log(res);
      this.router.navigate(['/login'])
    }).catch(error => {
      console.log(error);
      this.messageError= 'Profile has not been added :( Please try again. '
    });


  }

  goToLogin(){
    this.router.navigate(['/login']);
  }


  passwordLength(passwordLength: number){
    
    let isPaswordUnvalid = false;

    if(passwordLength > 10){
      isPaswordUnvalid=true;
    }
    return isPaswordUnvalid;
  }



}
