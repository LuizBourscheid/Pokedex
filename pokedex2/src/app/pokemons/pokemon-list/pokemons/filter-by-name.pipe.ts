import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../pokemon/pokemon';

@Pipe({name: 'FilterByName'})

export class FilterByName implements PipeTransform {
    transform(listPokemon: Pokemon[], nameQuery: string) {
        nameQuery = nameQuery.trim().toLowerCase();
        if (nameQuery) {
            return listPokemon.filter(pokemon =>
                 pokemon.name.toLowerCase().includes(nameQuery)
            );
        } else {
            return listPokemon;
        }
    }

}
