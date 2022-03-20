import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { ProfileServiceService } from './profile/profile-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel_app';

  constructor(public ProfileService: ProfileServiceService, private router: Router){}
  sideNavIsOpen = true;
  
  async ngOnInit(){
   
    var email = localStorage.getItem('email') || '';
    var password = localStorage.getItem('password') || '';
    
    if(email && password){
      
      await this.ProfileService.logTheCurrentUser(email, password).then(()=>{
        console.log("Upali smo u navigaciju");
      }).catch(() => {
        console.log("Error u vezi loga");
      });
    }else
    {
      this.router.navigate(['/trips']);
    }
  }
  
  userStatus:boolean = this.ProfileService.currentUserStatus;
  
  logout(){

    console.log('Usli u logout');
    this.ProfileService.setUserStateToFalse();
    this.router.navigate(['/trips']);
  }

}
