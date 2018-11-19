import { NgModule } from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByName } from './pokemons/filter-by-name.pipe';
import { CommonModule } from '@angular/common';
import { PokemonModule } from '../pokemon/pokemon.module';


@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonsComponent,
        LoadButtonComponent,
        FilterByName
    ] ,
    imports: [
            CommonModule,
            PokemonModule
    ]
})
export class PokemonListModule {}
