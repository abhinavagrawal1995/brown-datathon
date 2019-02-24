import { Component, OnInit, Input } from '@angular/core';
import { Disease } from '../disease';

@Component({
  selector: 'app-disease-card',
  templateUrl: './disease-card.component.html',
  styleUrls: ['./disease-card.component.css']
})
export class DiseaseCardComponent implements OnInit {

  @Input()
  disease: Disease;

  @Input()
  isInfo = false;
  constructor() { }

  ngOnInit() {
  }

}
