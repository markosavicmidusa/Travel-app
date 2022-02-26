import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile/profile-service.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public ProfileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

  userStatus: boolean=this.ProfileService.currentUserStatus;
}
