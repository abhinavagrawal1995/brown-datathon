import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../services/navigation.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http: HttpClient, private navService: NavigationService) {
    this.userData = {
      'name': '',
      'gender': '',
      'age': '',
      'height': '',
      'weight': '',
      'activity': ''
    };
  }

  url = "http://127.0.0.1:8888/predict";

  userData;

  ngOnInit() {

  }

  sendData() {
    this.http.post(this.url, this.userData).subscribe((response: Response) => {
      this.navService.isProfile = false;
    });
  }

}
