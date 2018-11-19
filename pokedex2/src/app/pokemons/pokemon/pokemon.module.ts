import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        PokemonComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ PokemonComponent ]
})
export class PokemonModule {}
