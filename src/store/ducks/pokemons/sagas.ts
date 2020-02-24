import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { PokemonTypes } from './types';

interface PokemonResponse {
  name: string;
  url: string;
}

interface PokemonData {
  data: object;
}

export function* load() {
  try {
    const response = yield call(api.get, '');
    const pokemonsData = yield Promise.all(
      response.data.results.map((k: PokemonResponse) => api.get(k.url))
    );
    const pokemons = pokemonsData.map((t: PokemonData) => t.data);
    yield put(loadSuccess(pokemons));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* watcherSaga() {
  yield takeLatest(PokemonTypes.LOAD_REQUEST, load);
}
