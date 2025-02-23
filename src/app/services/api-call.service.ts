import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { PokeResponse } from '../models/pokeResponse';
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  http = inject(HttpClient);

  getPokemons(): Observable<PokeResponse> {
    return this.http.get<PokeResponse>(
      `${environment.apiUrl}/pokemon?limit=100000&offset=0`
    );
  }

  getPokemon(pokemon: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/pokemon/${pokemon}`);
  }
}
