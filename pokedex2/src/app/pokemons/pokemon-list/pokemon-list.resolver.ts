import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon/pokemon.service';
import { Result } from '../pokemon/pokemon';


@Injectable({providedIn: 'root'})
export class PokemonListResolver implements Resolve<Observable<Result>> {
    constructor(private service: PokemonService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       const offset = route.params.offset;
       const limit  = route.params.limit;
        return this.service.getResults(offset, limit);
    }
}
