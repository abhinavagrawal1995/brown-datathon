import { Component } from '@angular/core';
import { Disease } from './disease';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private diseases: Array<Disease> = [{
    description: "I'm so cute, you'll get a sugar rush.",
    dos: ['more physical activity', 'more physical activity', 'more physical activity'],
    donts: ['Less sweets', 'Less sweets', 'Less sweets'],
    img: 'assets/diabetes.jpg',
    name: "Cold",
    probability: 85,
    info: "Some info.Some info. Some info.Some info. Some info.Some info.Some info.Some info."
  }, {
    description: "I'm so cute, you'll get a sugar rush.",
    dos: ['more physical activity', 'more physical activity', 'more physical activity'],
    donts: ['Less sweets', 'Less sweets', 'Less sweets'],
    img: 'assets/diabetes.jpg',
    name: "Diabetes",
    probability: 85,
    info: "Some info.Some info. Some info.Some info. Some info.Some info.Some info.Some info."
  }];
  title = 'tinder';

  constructor(private navService: NavigationService) {
  }
}
