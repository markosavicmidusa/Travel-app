import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


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





  constructor(@Inject(MAT_DIALOG_DATA) public recievedData: any) { }

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
    


    /*(let index in ) {
      this.sum = this.sum + this.recievedData.grade[index];
      length++;
    }
    this.average_grade=this.sum/this.length;
*/
  }

}
