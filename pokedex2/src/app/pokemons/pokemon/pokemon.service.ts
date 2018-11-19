import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

import { Pokemon, Result, PokemonDetail } from './pokemon';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Injectable({ providedIn: 'root' })

export class PokemonService {

    private baseUrl  = 'http://pokeapi.salestock.net/api/v2/pokemon/';

    @Input() listPokemon: Pokemon[] = [];

    constructor(private http: HttpClient) {}

    getResults(offset: number, limit: number) {
       return this.http.get<Result>(`${this.baseUrl}?offset=${offset}&limit=${limit}`);
    }
    getPokemon(id: number) {
        return this.http.get<PokemonDetail>(this.baseUrl + id);
    }
    getNextResults(url: string) {
        console.log(url);
        return this.http.get<Result>(url);
     }

}
