import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TripsComponent } from './trips/trips.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TripsServiceService } from './trips/trips-service.service';
import { FinishedTripsComponent } from './profile/finished-trips/finished-trips.component';
import { MyBasketComponent } from './profile/my-basket/my-basket.component';
import { CanceledTripsComponent } from './profile/canceled-trips/canceled-trips.component';
import { AddToCardComponent } from './trips/add-to-card/add-to-card.component';
import { PayTripComponent } from './profile/my-basket/pay-trip/pay-trip.component';
import { DeleteTripComponent } from './profile/delete-trip/delete-trip.component';
import { RateTripComponent } from './profile/finished-trips/rate-trip/rate-trip.component';
import { ProfileServiceService } from './profile/profile-service.service';
/**Firebase-> Forestore */
import {AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CancelTripComponent } from './profile/my-basket/cancel-trip/cancel-trip.component'




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    TripsComponent,
    ProfileComponent,
    FinishedTripsComponent,
    MyBasketComponent,
    CanceledTripsComponent,
    AddToCardComponent,
    PayTripComponent,
    DeleteTripComponent,
    RateTripComponent,
    CancelTripComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],

  providers: [TripsServiceService, ProfileServiceService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
