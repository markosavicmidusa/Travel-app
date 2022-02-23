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


  user: boolean=false;

  constructor(public ProfileService: ProfileServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value.email);
    console.log(form.value.password);

    /*this.user = this.ProfileService.isUserRegistred(form.value.email, form.value.password);
*/
    /*if(this.user === false){

        this.router.navigate(['/signup']);

    }*/


  }
  passwordLength(passwordLength: number){
    
    let isPaswordUnvalid = false;

    if(passwordLength > 10){
      isPaswordUnvalid=true;
    }
    return isPaswordUnvalid;
  }

  
 


}
