import { Component } from '@angular/core';

import { ProfileServiceService } from './profile/profile-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel_app';

  constructor(public ProfileService: ProfileServiceService){}
  sideNavIsOpen = true;
  
  ngOnInit(){

  }
  
  userStatus:boolean = this.ProfileService.currentUserStatus;

  
  logout(){

    console.log('Usli u logout');
    this.ProfileService.setUserStateToFalse();
    
  }

}
