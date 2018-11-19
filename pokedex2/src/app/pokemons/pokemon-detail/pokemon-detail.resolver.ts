import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonDetail } from '../pokemon/pokemon';


@Injectable({providedIn: 'root'})
export class PokemonDetailResolver implements Resolve<Observable<PokemonDetail>> {
    constructor(private service: PokemonService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       const id = Number(route.params.pokemonId);
        return this.service.getPokemon(id);
    }
}
