import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, NamedAPIResource } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit , Pokemon  {
  @Input() id: number;
  @Input() name = '';
  @Input() sprite = '';

  constructor() { }

  ngOnInit() {
  }

}
