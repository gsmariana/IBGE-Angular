// states.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'] // Se houver algum arquivo de estilo
})
export class StatesComponent implements OnInit {
  statesByRegion: { [key: string]: any[] } = {};
  allStates: any[] = [];
  selectedState: string = '';
  cities: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchStates().subscribe(states => {
      this.allStates = states;
      states.forEach(state => {
        const region = state.regiao.nome;
        if (!this.statesByRegion[region]) {
          this.statesByRegion[region] = [];
        }
        this.statesByRegion[region].push(state);
      });
    });
  }

  onStateSelected(sigla: string): void {
    this.selectedState = sigla;
    this.dataService.fetchCitiesByState(sigla).subscribe(cities => {
      this.cities = cities;
    });
  }

  getRegionKeys(): string[] {
    return Object.keys(this.statesByRegion);
  }
}
