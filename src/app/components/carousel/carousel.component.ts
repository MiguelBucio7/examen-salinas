import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imgCarousel: {path:  string}[] =[]
  constructor() { }

  ngOnInit(): void {

    this.imgCarousel = [
      { path: 'assets/img/bambu.jpg' },
      { path: 'assets/img/colision.jpg' },
      { path: 'assets/img/hunter.jpg' },
      { path: 'assets/img/pl.jpg' },
      { path: 'assets/img/Playas.png' },
    ]
  
  }

}
