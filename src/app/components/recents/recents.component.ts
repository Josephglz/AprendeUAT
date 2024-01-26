import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recents',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './recents.component.html',
})
export class RecentsComponent {
  isCollapsed: boolean[] = [true, false, false, false];
  announceList: string[] = [
    'https://bmkkolipsthwmgjsnoaj.supabase.co/storage/v1/object/public/banners/announce1.jpg',
    'https://bmkkolipsthwmgjsnoaj.supabase.co/storage/v1/object/public/banners/announce2.jpg',
  ];
  currentAd: string = '';

  constructor() { }

  toggleCollapse(idx: number): void {
    this.isCollapsed = this.isCollapsed.map(v => false);
    this.isCollapsed[idx] = !this.isCollapsed[idx];
  }

  ngOnInit(): void {
    this.currentAd = this.announceList[0];
    this.changeCurrentAd();
  }

  changeCurrentAd(): void {
    const index = this.announceList.indexOf(this.currentAd);
    if (index === this.announceList.length - 1) {
      this.currentAd = this.announceList[0];
    } else {
      this.currentAd = this.announceList[index + 1];
    }

    setTimeout(() => {
      this.changeCurrentAd();
    }, 5000);
  }
}
