import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './pokemon-list/pokemons/pokemons.component';
import { FilterByName } from './pokemon-list/pokemons/filter-by-name.pipe';
import { LoadButtonComponent } from './pokemon-list/load-button/load-button.component';
import { NgbdModalBasic } from './pokemon-list/modal/modal-basic';

@NgModule({
    declarations: [
        PokemonComponent,
        PokemonListComponent,
        PokemonDetailComponent,
        PokemonsComponent,
        FilterByName,
        LoadButtonComponent,
        NgbdModalBasic
    ],
    imports: [
               HttpClientModule,
               CommonModule,
               NgbModule
            ]
})
export class PokemonsModule { }
