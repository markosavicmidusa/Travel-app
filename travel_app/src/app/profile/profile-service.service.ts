import { Injectable } from '@angular/core';
import { TripsModel } from '../trips/trips-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, deleteDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { TravelType } from '../trips/trips.component';
import { NgForm } from '@angular/forms';
import { ConnectableObservable } from 'rxjs';
import { Router } from '@angular/router';


export interface ProfileModel {
  name: string,
  surname: string,
  password: string,
  email: string,
  phone_number: string,
  address: string,
  favorite_trips: string
  travel: Array<TripsModel>,
  isLogedIn: boolean

}

export interface ProfileModelId {
  id: string
  name: string,
  surname: string,
  password: string,
  email: string,
  phone_number: string,
  address: string,
  favorite_trips: string
  travel: Array<TripsModel>,
  isLogedIn: boolean

}

export interface ProfileTrips {

  profile_id: string,
  status: string,
  travels: TripsModel

}
export interface ProfileTripsId {

  id: string,
  profile_id: string,
  status: string,
  travels: TripsModel
}


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  db = getFirestore(); // Profile

  static profiles: Array<ProfileModelId> = [

    {
      id: '',
      name: '',
      surname: '',
      password: 'test@enmail.com',
      email: 'test@enmail.com',
      phone_number: '',
      address: '',
      favorite_trips: '',
      isLogedIn: true,
      travel: []
    }
  ];


  constructor(private fireservice: AngularFirestore, public router: Router) {

  }

  
  ngOnInit() {

  }




  /**FireStoreCrudOperations on Profile */

  currentUser: ProfileModelId = ProfileServiceService.profiles[0];
  currentUserStatus: boolean = false;


  /**1) Adding the Travel info, username and password to ProfileTrip collection 
   * 2) Reading data from the same collection
   * 
  */

  async addTripToProfileTrips(profileId2: string, data: TripsModel) {

    
    var profile_trip: ProfileTrips = {

      profile_id: profileId2,
      status: data.status,
      travels: data
    }

    return this.fireservice.collection('ProfileTrips').add(profile_trip);
  }

  profileTripsList: Array<ProfileTripsId> = [];

  /**
   * Dobavlja sve Tripse iz baze ProfileTrip
   * 
   */
  async getAllTripsFromUserId(id: string){
    
     this.profileTripsList= [];

    
    const q = query(collection(this.db, "ProfileTrips")); 
    const querySnapshot = await getDocs(q);
    
  
    
    querySnapshot.forEach((doc) => {
    
      if(doc.data()['profile_id'] === id.toString()){
        
        this.profileTripsList.push({
          
          id: doc['id'],
          profile_id: doc.data()['profile_id'],
          status: doc.data()['status'],
          travels: doc.data()['travels']
        });
      }

    });
    
   
  }


  currentProfile = ProfileServiceService.profiles[0];

  getActiveTravelsFromProfile(): Array<ProfileTripsId> {
    
    
    var travels1: Array<ProfileTripsId> = [];
    this.profileTripsList.map((travel: any) => {
      if (travel.status === 'active') {
        travels1.push(travel);
      }
    })
    return travels1;
  }

  sum = 0;
  getTotalSumOfActiveTravels(): number {

    
    this.profileTripsList.map((travel: any) => {
      if (travel.status === 'active') {
        this.sum += travel.travels.price;
      }
    })
    return this.sum;

  }
    
  /**Update from trip basket in finished trips changing the status */
  updateTripStatusInProfileTrip(activeTripId: any) {

    

    const dbRef = doc(this.db, "ProfileTrips", activeTripId);

    this.profileTripsList.forEach(async trips => {
     
      if (trips.id === activeTripId) {

        await updateDoc(dbRef, {
          status: 'finished'
        });
      }
    });
  }

  /**get method all ProfileTrips finished  status */
  getFinishedTravelsFromProfile(): Array<ProfileTripsId> {
    
    
    var travels1: Array<ProfileTripsId> = [];
    this.profileTripsList.map((travel: any) => {
      if (travel.status === 'finished') {
        travels1.push(travel);
      }
    })
    return travels1;

  }

  /** Cancel trip method */

  async cancelTripInProfileTrips(activeTripId: any){

    

    const dbRef = doc(this.db, "ProfileTrips", activeTripId);

    await updateDoc(dbRef, {
      status: 'canceled'
    });
    
  }

  /** Get Canceled Trips  */
  getCanceledTravelsFromProfile(): Array<ProfileTripsId> {
    
    
    var travels1: Array<ProfileTripsId> = [];
    

    this.profileTripsList.map((travel: any) => {
      if (travel.status === 'canceled') {
        travels1.push(travel);
      }
    })
    return travels1;

  }

  /**delete method specific ProfileTrips in mybasket, finished trips, canceled trips */
  deleteTripInProfileTrips(activeTripId: any){
    
    
    this.profileTripsList.forEach(async trips => {
      
      if (trips.id === activeTripId) {

        await deleteDoc(doc(this.db, "ProfileTrips", activeTripId));
      }
    });
  }


   /* Update profile function*/
   async updateProfile(form : NgForm, id: string) {


    
    const dbRef = doc(this.db, "Profile", id);
    
    await updateDoc(dbRef, {
      name: form.value.name,
      surname: form.value.surname,
      email: form.value.email,
      phone_number: form.value.phone_number,
      address: form.value.address,
      favorite_trips: form.value.favorite_trips
    }).then(()=>{
      console.log("sve je proslo kako treba");
    }
    ).catch(err=>{
      console.log(err);
    });

  }

  /** Reaload */

  reloadProfile(){
    location.reload();
    
  }

  /** Create New Profile*/
  createNewProfile(Profile: ProfileModel) {
    
    
    return this.fireservice.collection('Profile').add(Profile);

  }
  /** Get All profiles funkicja */
  /*async getAllProfiles() {

    
    const querySnapshot = await getDocs(collection(this.db, 'Profile'));

    querySnapshot.forEach((doc) => {
      console.log(doc.data()['email']);
      console.log(`${doc.id} => ${doc.data()}`);
    });

  }*/

  /** Login funkicja */
  async logTheCurrentUser(email: string, password: string) {
   
    
    const querySnapshot = await getDocs(collection(this.db, "Profile"));
    querySnapshot.forEach((doc) => {
      if (doc.data()['email'] === email && doc.data()['password'] === password) {
        this.currentUser = {
          id: doc.id,
          name: doc.data()['name'],
          surname: doc.data()['surname'],
          password: doc.data()['password'],
          email: doc.data()['email'],
          phone_number: doc.data()['phone_number'],
          address: doc.data()['address'],
          favorite_trips: doc.data()['favorite_trips'],
          travel: doc.data()['travel'],
          isLogedIn: true
        }
        
        this.currentUserStatus = true;
        this.getAllTripsFromUserId(this.currentUser.id);
        this.router.navigate(['/trips']);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
      }

    });

    // if(this.currentUserStatus){
      
    //   console.log(this.currentUser.id);
    // }else{
    // }
      

  }

  /** Logout funkicja */
  setUserStateToFalse() {
   
    this.currentUser = ProfileServiceService.profiles[0];
    this.currentUserStatus = false;
    localStorage.clear();
    location.reload();
    
    /*
    console.log(this.currentUser);
    console.log(this.currentUserStatus);*/
  }

  /**Login component function*/
    isUserRegistred(email: string, password: string): any {

      
    var user: boolean = false;

    ProfileServiceService.profiles.map(profile => {

      if (profile.email.toString().includes(email)) {
        console.log('Email is ok')
        console.log(email)
        if (profile.password.toString().includes(password)) {
          console.log('PassIsOk')
          console.log(password)
          user = true;

        }
      }


    });
    
    return user;
  }
}