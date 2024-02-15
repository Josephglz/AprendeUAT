import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { AdvisoryCardComponent } from '../../components/advisory-card/advisory-card.component';
import { Advisory, AdvisoryMessage } from '../../interfaces/Advisory';
import { AdvisoryService } from '../../services/advisory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,

    AdvisoryCardComponent,
  ],
  templateUrl: './advisorydetails.page.html',
  styleUrl: './advisorydetails.page.css',
})
export class AdvisoryDetailsPage {
  advisory: Advisory = {} as Advisory;
  advisoryMsgs: AdvisoryMessage[] = [];

  constructor(
    private _advisoryService: AdvisoryService,
    private _route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this._route.params.subscribe(params => {
      var idx = +params['id'];
      this._advisoryService.getAdvisoryById(idx).then((data) => {
        this.advisory = data;

        this._advisoryService.getAdvisoryMessages(this.advisory).then((data) => {
          this.advisoryMsgs = data;
        })
      })

    });
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
