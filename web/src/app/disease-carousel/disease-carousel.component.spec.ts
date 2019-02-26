import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseCarouselComponent } from './disease-carousel.component';

describe('DiseaseCarouselComponent', () => {
  let component: DiseaseCarouselComponent;
  let fixture: ComponentFixture<DiseaseCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
