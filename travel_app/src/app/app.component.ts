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
   
    console.log("App component - U ngOnInit metodi, gde se obavlja pokusaj logovanja korisnika -> Preuzima se email i password iz local storage-a ukoliko postoje, ukoliko ne autentifikacija nije uspela i prikazuje se sadrzaj za neautentifikovanog korisnika ");
    var email = localStorage.getItem('email') || '';
    var password = localStorage.getItem('password') || '';
    
    if(email && password){
      
      await this.ProfileService.logTheCurrentUser(email, password).then(()=>{
        console.log("App componenet ucitavanje iz local storage-a je uspesno");
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
    console.log("App component - Korisnicki definisana funkcija logout(), vrsi se brisanje lokalne memorije");
    this.ProfileService.setUserStateToFalse();
    this.router.navigate(['/trips']);
  }

}
