import { Injectable } from '@angular/core';


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



@Injectable({
  providedIn: 'root'
})
export class TripsServiceService {

  constructor() { 

  }

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

  currentTravel=TripsServiceService.dummyTravelData[0];
}
