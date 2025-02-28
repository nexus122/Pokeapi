import { Component, inject, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokeResponse } from '../../models/pokeResponse';
import { CardComponent } from '../../components/card/card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  apiCallService = inject(ApiCallService);
  router = inject(Router);
  pokemons: Observable<PokeResponse> = new Observable();
  limit = 20;
  offset = 0;

  ngOnInit() {
    this.pokemons = this.apiCallService.getPokemons(this.limit, this.offset);
  }

  nextPage() {
    this.offset += this.limit;
    this.pokemons = this.apiCallService.getPokemons(this.limit, this.offset);
  }

  prevPage() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.pokemons = this.apiCallService.getPokemons(this.limit, this.offset);
    }
  }

  onSelectPokemon(pokemonName: string) {
    this.router.navigate(['/pokemon', pokemonName]);
  }
}
