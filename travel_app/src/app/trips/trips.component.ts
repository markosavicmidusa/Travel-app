import { Component, OnInit } from '@angular/core';

export interface TripsModel {

  id: number,
  destination: string,
  picture_path: string,
  travel_type: string,
  duration: number,
  distance: number,
  price: number,
  description: string,
  time: Date,
  recensents: Array<string>,
  recensions: Array<string>,
  grade: Array<number>,
  status: string
}
export interface TravelType {
  value: string;
  viewValue: string;
}
export interface PricesRange {
  value: number;
  viewValue1: number;
  viewValue2: number;
}


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor() { }

  

  public travels: TravelType[] = [

    { value: 'airplane', viewValue: "Airplane"},
    { value: 'train', viewValue: "Train"},
    { value: 'bus', viewValue: "Bus"}

  ]

  public prices: PricesRange[] = [

    {value: 1000.00, viewValue1: 0.00, viewValue2: 1000.00},
    {value: 2000.00, viewValue1: 1000.00, viewValue2: 2000.00},
    {value: 3000.00, viewValue1: 2000.00, viewValue2: 3000.00},
    {value: 4000.00, viewValue1: 3000.00, viewValue2: 4000.00},
    {value: 5000.00, viewValue1: 4000.00, viewValue2: 5000.00},
    {value: 6000.00, viewValue1: 5000.00, viewValue2: 6000.00}
  ]


  static dummyTravelData: TripsModel[] = [

    {
      id: 1,
      destination: 'Dubai',
      picture_path: '../../assets/images/dubai.png',
      travel_type: 'plane',
      duration: 10,
      distance: 5105,
      price: 2000.00,
      description: 'Dubai is the strongest and most densely populated city in the United Arab Emirates. A rest period of ten days is quite enough to take a break.You will enjoy a five- stars hotel with beautiful views of the Burj Khalifa.Dubai has many beautiful beaches that you must visit.',
      time: new Date('2022-06-06T01:01'),
      recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
      recensions: ['Great journey.', 'Great all recommendations!', 'Solid.', 'Nothing special.', 'Fantastic'],
      grade: [7, 10, 5, 2, 9],
      status: 'active'
    },
    {
      id: 2,
      destination: 'Dubai',
      picture_path: '../../assets/images/dubai.png',
      travel_type: 'plane',
      duration: 10,
      distance: 5105,
      price: 2000.00,
      description: 'Dubai is the strongest and most densely populated city in the United Arab Emirates. A rest period of ten days is quite enough to take a break.You will enjoy a five- stars hotel with beautiful views of the Burj Khalifa.Dubai has many beautiful beaches that you must visit.',
      time: new Date('2022-06-06T01:01'),
      recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
      recensions: ['Great journey.', 'Great all recommendations!', 'Solid.', 'Nothing special.', 'Fantastic'],
      grade: [7, 10, 5, 2, 9],
      status: 'active'
    }

  ]

  public currentTravel: TripsModel = TripsComponent.dummyTravelData[0];
  

ngOnInit(): void {
  
  console.log(this.currentTravel)
  
}

}
