import { all } from 'redux-saga/effects';

import * as RepositoriesSagas from './repositories/sagas';
import * as PokemonsSaga from './pokemons/sagas';

export default function* rootSaga() {
  return yield all([
    RepositoriesSagas.watcherSaga(),
    PokemonsSaga.watcherSaga()
  ]);
}
