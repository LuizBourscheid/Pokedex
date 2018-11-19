import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonListResolver } from './pokemons/pokemon-list/pokemon-list.resolver';
import { PokemonDetailResolver } from './pokemons/pokemon-detail/pokemon-detail.resolver';

const routes: Routes = [
  {path: 'pokemon/:pokemonId',
          component: PokemonDetailComponent,
          resolve: {result : PokemonDetailResolver
          }
        },
  {path: 'pokedex/:offset/:limit',
         component: PokemonListComponent,
        resolve: {
          result : PokemonListResolver
        }
  },
  {path: '**', redirectTo: 'pokedex/0/24'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
