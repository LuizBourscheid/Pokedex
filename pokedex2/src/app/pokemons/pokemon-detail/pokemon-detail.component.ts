import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonDetail, PokemonAbility, NamedAPIResource, VersionGameIndex, PokemonHeldItem,
         Moves, PokemonSprites, PokemonStat, PokemonType } from '../pokemon/pokemon';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
    id: number;

    @Input()  pokemondetail: PokemonDetail;


  constructor(
    private pokeService: PokemonService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.pokemondetail = this.activatedRoute.snapshot.data.result;
    this.id = this.activatedRoute.snapshot.params.pokemonId;
  }

}
