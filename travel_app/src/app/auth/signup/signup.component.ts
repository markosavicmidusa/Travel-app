import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log(form)
  }

  passwordLength(passwordLength: number){
    
    let isPaswordUnvalid = false;

    if(passwordLength > 10){
      isPaswordUnvalid=true;
    }
    return isPaswordUnvalid;
  }

}
