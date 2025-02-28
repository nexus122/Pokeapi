import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokeResult } from '../../models/pokeResponse';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon!: PokeResult;
  @Output() selectedPokemon = new EventEmitter<string>();
  imageUrl = environment.spritesUrl;

  selectPokemon(pokemonName: string) {
    this.selectedPokemon.emit(pokemonName);
  }
}
