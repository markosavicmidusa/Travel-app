import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileServiceService } from 'src/app/profile/profile-service.service';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ProfileService: ProfileServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  userStatus: boolean=this.ProfileService.currentUser.isLogedIn;

  messageError:string='';

  async onSubmit(form: NgForm){
  
   await this.ProfileService.logTheCurrentUser(form.value.email, form.value.password ).then(res=>{
    this.router.navigate(['/trips'])
  }).catch(error => {
    this.messageError= 'Profile has not been read :( Please try again. '
  });

  }
  passwordLength(passwordLength: number){
    
    let isPaswordUnvalid = false;

    if(passwordLength > 10){
      isPaswordUnvalid=true;
    }
    return isPaswordUnvalid;
  }

  goToSignUp(){
    this.router.navigate(['/signup']);
  }

  
 


}
