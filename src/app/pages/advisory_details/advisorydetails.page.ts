import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { AdvisoryCardComponent } from '../../components/advisory-card/advisory-card.component';
import { Advisory } from '../../interfaces/Advisory';
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

  constructor(
    private _advisoryService: AdvisoryService,
    private _route: ActivatedRoute,
  ) {}

  // async ngOnInit() {
  //   this._route.params.subscribe(params => {
  //     var idx = +params['id'];
  //     this.advisory = await this._advisoryService.getAdvisoryById(idx)
  //   });
  // }

  async ngOnInit() {
    this._route.params.subscribe(params => {
      var idx = +params['id'];
      this._advisoryService.getAdvisoryById(idx).then((data) => {
        this.advisory = data;
      })
    });
  }

}
