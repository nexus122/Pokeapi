import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { PokeResponse } from '../models/pokeResponse';
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  http = inject(HttpClient);

  getPokemons(limit = 20, offset = 0): Observable<PokeResponse> {
    return this.http.get<PokeResponse>(
      `${environment.apiUrl}/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getPokemon(pokemon: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/pokemon/${pokemon}`);
  }
}
