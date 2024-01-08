import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CarouselComponent } from '../../components/carousel/carousel.component';
import { RecentsComponent } from '../../components/recents/recents.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,

    CarouselComponent,
    RecentsComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage{

}
