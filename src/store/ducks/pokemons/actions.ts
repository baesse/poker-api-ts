import { action } from 'typesafe-actions';
import { PokemonTypes, Pokemons } from './types';

export const loadRequest = () => action(PokemonTypes.LOAD_REQUEST);
export const loadSuccess = (data: Array<Pokemons>) =>
  action(PokemonTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(PokemonTypes.LOAD_FAILURE);
