export interface Pokemon {
    id: number;                          // 1 - The identifier for this resource.
    name: string;                        // 2 - The name for this resource.
    sprite: string;                      // 3 - The default depiction of this Pokémon from the front in battle.

}

export interface PokemonDetail {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility;
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: Moves[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType;

}

export interface PokemonAbility {
    is_hidden: boolean;
    version_group_details: number;
}

export interface Moves {
    move: NamedAPIResource;
    slot: number;
    ability: PokemonMoveVersion[];
}

export interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}

export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}

export interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
}

export interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
}

export interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
    version: NamedAPIResource;
    rarity: number;
}

export interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
}


export interface Result {
    count: number; // The total number of resources available from this API.
    next: string; // The URL for the next page in the list.
    previous: boolean; // The URL for the previous page in the list.
    results: NamedAPIResource[];
    sprite: string;

}

export interface Descriptions {
    descriptions: string;       // The localized description for an API resource in a specific language.
    language: NamedAPIResource; // The language this name is in.
}

export interface Language {
    id: number;        // The identifier for this resource.
    name: string;      // The name for this resource.
    official: boolean; // Whether or not the games are published in this language.
    iso639: string;    // The two-letter code of the country where this language is spoken. Note that it is not unique.
    iso3166: string;   // The two-letter code of the language. Note that it is not unique.
    names: Name[];     // The name of this resource listed in different languages.

}
export interface Name {
    name: string;
    language: NamedAPIResource; // The language this name is in.
}

export interface Region {
    id: number;
    url:  string;
    language: Language;
}

export interface Location {
    id: number;
    name: string;
    region: Region;
    names: Name[];
    game_indices: GenerationGameIndex[];
}

export interface GenerationGameIndex {
    game_index: number;
    generation: Generation;
}

export interface Generation {
    id: number;

}

export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface PokemonEntry {
    entry_number: number;              // The index of this Pokémon species entry within the Pokédex.
    pokemon_species: NamedAPIResource; // The Pokémon species being encountered.
}
