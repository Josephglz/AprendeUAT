import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,

    CarouselComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage{

}
