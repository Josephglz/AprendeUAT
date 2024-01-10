import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';

import { FiltersService } from '../../services/filters.service';
import { CareerData, SubjectData } from '../../interfaces/CareerData';

import { AdvisoryCardComponent } from '../../components/advisory-card/advisory-card.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,

    MatChipsModule,
    AdvisoryCardComponent,
  ],
  templateUrl: './advisory.page.html',
  styleUrl: './advisory.page.css',
})
export class AdvisoryPage {
  filterCollapse: boolean = false;
  careers: CareerData[] = [];
  subjects: SubjectData[] = [];
  subjectFilter: string[] = [];
  // subjectFilter: string[] = ['Matemáticas para Computación', 'Matemáticas para Computación', 'Matemáticas para Computación', 'Matemáticas para Computación', 'Gestión Organizacional de las Tecnologías de la Información y Comunicación', 'Telecomunicaciones', 'Estructuras de Datos', 'Introducción a al Ingeniería']

  constructor(
    private _filtersService: FiltersService,
  ) {}

  ngOnInit() {
    this.loadCareers().then((data) => {
      this.careers = data;
    })
  }

  async loadCareers() {
    return this._filtersService.getCareers()
  }

  async getSubjectsData(event: any) {
    this.subjects = await this._filtersService.getSubjects(event.target.value)
    this.subjectFilter = [];
  }

  toggleFilterCollapse() {
    this.filterCollapse = !this.filterCollapse;
  }

  filterChange(event: any) {
    if(this.subjectFilter.includes(event.target.name)) {
      this.subjectFilter.splice(this.subjectFilter.indexOf(event.target.name), 1);
    }
    else {
      this.subjectFilter.push(event.target.name);
    }
    console.log(this.subjectFilter);
  }

}
