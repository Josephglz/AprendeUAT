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

  constructor() { }

  toggleCollapse(idx: number): void {
    this.isCollapsed = this.isCollapsed.map(v => false);
    this.isCollapsed[idx] = !this.isCollapsed[idx];
  }
}
