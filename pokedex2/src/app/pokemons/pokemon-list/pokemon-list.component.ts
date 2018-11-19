import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

import { Result, Pokemon } from '../pokemon/pokemon';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit , OnDestroy  {

  @Input() result: Result;
  listPokemon: Pokemon[] = [];
  listTemp:  Pokemon[] = [];
  pokemonTemp: PokemonComponent;
  filter = '';
  offset: number;
  limit: number;
  debounce: Subject<string> = new Subject<string>();


  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.result = this.activatedRoute.snapshot.data.result;
    this.offset = Number(this.activatedRoute.snapshot.params['offset']);
    this.limit =  Number(this.activatedRoute.snapshot.params.limit);
    this.loadMore(this.offset , this.result);

    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  load() {
    this.offset +=  24;
    this.pokemonService.getNextResults(this.result.next).subscribe(result => {
      this.loadMore(this.offset, result);
      });

  }
  loadMore(offset: number , result: Result) {
       result.results.map((pokemon, idx) => {
                this.pokemonTemp = new PokemonComponent;
                const id: number = idx + offset + 1;
                this.pokemonTemp.id = id;
                this.pokemonTemp.name = pokemon.name;
                this.pokemonTemp.sprite = `${this.baseSpriteUrl}${id}.png`;
                this.listPokemon = this.listPokemon.concat(this.pokemonTemp);
              });

          }
}
