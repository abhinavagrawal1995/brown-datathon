import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Disease } from '../disease';

@Component({
  selector: 'app-disease-carousel',
  templateUrl: './disease-carousel.component.html',
  styleUrls: ['./disease-carousel.component.css']
})
export class DiseaseCarouselComponent implements OnInit {

  private _diseases: Array<Disease>;
  private count = 0;
  private info: Disease;
  @Input('diseases')
  set diseases(val: Array<Disease>) {
    if (val && val.length) {
      this._diseases = val;
    } else {
      this._diseases = [];
    }
    this.count = this._diseases.length;
  }

  constructor() { }


  ngOnInit() {
  }

  remove() {
    // this.diseases.pop();
    this.count = this.count - 1;
  }

  showInfo() {
    this.info = this.diseases[this.count - 1];
  }

  back() {
    this.info = null;
  }

  get diseases(): Array<Disease> {
    return this._diseases;
  }
}
