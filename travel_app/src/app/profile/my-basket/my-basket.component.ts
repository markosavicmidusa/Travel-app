import { Component, OnInit } from '@angular/core';
import { TripsServiceService } from 'src/app/trips/trips-service.service';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit {

  constructor(public tripsTravel: TripsServiceService) { }

  ngOnInit(): void {
  }

  

}
