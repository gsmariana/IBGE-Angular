import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html'
})
export class CitiesComponent implements OnInit {
  @Input() states: any[] = [];
  uf: string = '';
  cities: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  loadCities(): void {
    if (this.uf) {
      this.dataService.fetchCitiesByState(this.uf).subscribe(cities => {
        this.cities = cities;
      });
    } else {
      this.cities = [];
    }
  }
}
