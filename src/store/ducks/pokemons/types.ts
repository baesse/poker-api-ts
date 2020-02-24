export enum PokemonTypes {
  'LOAD_REQUEST' = '@pokemons/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@pokemons/LOAD_SUCCESS',
  'LOAD_FAILURE' = '@pokemons/LOAD_FAILURE'
}

interface Abilities {
  ability: object;
  is_hidden: boolean;
  slot: number;
}

interface Forms {
  name: string;
  url: string;
}

interface GameIndices {
  game_index: number;
  version: object;
}

interface HeldItems {
  item: object;
  version_details: Array<any>;
}

interface Moves {
  move: object;
  version_group_details: Array<any>;
}

interface Stats {
  base_stat: number;
  effort: number;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Pokemons {
  abilities: Array<Abilities>;
  base_experience: number;
  forms: Array<Forms>;
  game_indices: Array<GameIndices>;
  height: number;
  held_items: Array<HeldItems>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Moves>;
  name: string;
  order: number;
  species: object;
  sprites: Sprites;
  stats: Array<Stats>;
  types: [];
  weight: number;
}

export interface PokemonsState {
  readonly data: Pokemons[];
  readonly loading: boolean;
  readonly error: boolean;
}
