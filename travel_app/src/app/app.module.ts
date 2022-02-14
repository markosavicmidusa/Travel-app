import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TripsComponent } from './trips/trips.component';

import { ProfileComponent } from './profile/profile.component';
import { MyTripsComponent } from './profile/my-trips/my-trips.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    TripsComponent,
    ProfileComponent,
    MyTripsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
