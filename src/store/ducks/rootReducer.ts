import { combineReducers } from 'redux';

import repositories from './repositories';
import pokemons from './pokemons';

export default combineReducers({
  repositories,
  pokemons
});
