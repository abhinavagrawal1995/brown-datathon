import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavigationService) {
  }

  ngOnInit() {
  }

  toggle(flag: boolean) {
    this.navService.isProfile = flag;
    console.log(this.navService.isProfile);
  }

}
