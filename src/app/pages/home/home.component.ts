import { Component, inject, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokeResponse } from '../../models/pokeResponse';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  apiCallService = inject(ApiCallService);
  pokemons: Observable<PokeResponse> = new Observable();

  ngOnInit() {
    this.pokemons = this.apiCallService.getPokemons();
  }
}
