import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileServiceService } from 'src/app/profile/profile-service.service';


@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent implements OnInit {


  average_grade: number | undefined;
  sum: number = 0;
  length: number = 0;
  suma: any;
  size: any;

  starRating1: boolean =false;
  starRating2: boolean =false;
  starRating3: boolean =false;
  starRating4: boolean =false;
  starRating5: boolean =false;
 

  constructor(@Inject(MAT_DIALOG_DATA) public recievedData: any, private ProfileService: ProfileServiceService, private router: Router) { }

  ngOnInit(): void {

    
    this.recievedData.grade.forEach((element: number) => {
      this.sum = this.sum + element;
    });
   this.recievedData.grade.forEach((element: number) => {
      this.length++;
    });
    this.average_grade=this.sum/this.length;

    if(this.average_grade <= 2){
      this.starRating1 =true;
    }else if(this.average_grade <= 4){
      this.starRating1 =true;
      this.starRating2 =true;
    }else if(this.average_grade <= 6){
      this.starRating1 =true;
      this.starRating2 =true;
      this.starRating3 =true;
    }else if(this.average_grade <= 8){
      this.starRating1 =true;
      this.starRating2 =true;
      this.starRating3 =true;
      this.starRating4 =true;
    }else{
      this.starRating1 =true;
      this.starRating2 =true;
      this.starRating3 =true;
      this.starRating4 =true;
      this.starRating5=true;
    }
    
  }

  user=this.ProfileService.currentUser;


  async addToUserAccount(){

   
      this.ProfileService.addTripToProfileTrips(this.user.id, this.recievedData).then(res=>{
        console.log(res);
        console.log("Uspeo sam ");
      }).catch(error => {
        console.log(error);
        console.log("Greska");
      });

      
  }

}
