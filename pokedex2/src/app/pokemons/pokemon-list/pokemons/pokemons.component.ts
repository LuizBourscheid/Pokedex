import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { Pokemon, PokemonDetail } from '../../pokemon/pokemon';
import { PokemonService } from '../../pokemon/pokemon.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit , OnChanges {

  @Input() listPokemon: Pokemon[] = [];
  @Input() rows: any[] = [];
  @Input() pokemondetail: PokemonDetail;
  @Output() id: number;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.listPokemon) {
      this.rows = this.groupColumns(this.listPokemon);
    }
  }

  groupColumns(listPoke: Pokemon[]) {
    const newRows = [];

    for (let idx = 0; idx < listPoke.length; idx += 6 ) {
      newRows.push(listPoke.slice(idx, idx + 6));
    }
    return newRows;
  }
}
