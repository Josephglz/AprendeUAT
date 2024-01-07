import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImagesData } from '../../interfaces/ImagesData';

import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
})


export class CarouselComponent {
  slides: ImagesData[] = [];
  currentSlide: ImagesData = {} as ImagesData;
  changeSlide: any;

  constructor(
    private _imagesService: ImagesService,
  ) {}

  async ngOnInit() {
    this.slides = await this._imagesService.getBanners();
    this.slides.map((slide) => {
      slide.url = this._imagesService.imagesUrl + slide.name;
    });

    this.currentSlide = this.slides[0];
    this.nextSlide();
  }

  nextSlide(): void {
    clearTimeout(this.changeSlide);
    const index = this.slides.indexOf(this.currentSlide);
    if (index === this.slides.length - 1) {
      this.currentSlide = this.slides[0];
    } else {
      this.currentSlide = this.slides[index + 1];
    }

    this.changeSlide = setTimeout(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide(): void {
    const index = this.slides.indexOf(this.currentSlide);
    if (index === 0) {
      this.currentSlide = this.slides[this.slides.length - 1];
    } else {
      this.currentSlide = this.slides[index - 1];
    }
  }
}
