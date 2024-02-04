import { Component, Input } from '@angular/core';
import { Advisory } from '../../interfaces/Advisory';
import { AdvisoryService } from '../../services/advisory.service';

@Component({
  selector: 'app-advisory-card',
  standalone: true,
  imports: [],
  templateUrl: './advisory-card.component.html',
  styleUrl: './advisory-card.component.css',
})
export class AdvisoryCardComponent {
  @Input() advisory: Advisory = {} as Advisory;

  constructor(
    private _advisoryService: AdvisoryService,
  ) { }

  async ngOnChanges() {
    this.advisory = await this._advisoryService.loadAdvisoryMessagesCount(this.advisory)
  }

  get sinceTime() {
    var now = new Date()
    var created = new Date(this.advisory.created)
    var diff = now.getTime() - created.getTime()
    var seconds = diff / 1000
    var minutes = seconds / 60
    var hours = minutes / 60
    var days = hours / 24
    var weeks = days / 7
    var months = days / 30
    var years = days / 365

    if (seconds < 60) {
      return "Hace unos segundos"
    } else if (minutes < 60) {
      return `Hace ${Math.floor(minutes)} mins`
    } else if (hours < 24) {
      return `Hace ${Math.floor(hours)} horas`
    } else if (days < 7) {
      return `Hace ${Math.floor(days)} días`
    } else if (months < 1) {
      return `Hace ${Math.floor(weeks)} semanas`
    } else if (years < 1) {
      return `Hace ${Math.floor(months)} meses`
    } else {
      return `Hace ${Math.floor(years)} años`
    }
  }
}
