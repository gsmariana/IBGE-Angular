import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) { }

  fetchStates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ibge/uf/v1`);
  }

  fetchCitiesByState(uf: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ibge/municipios/v1/${uf}`);
  }
}
