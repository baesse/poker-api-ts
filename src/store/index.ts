import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { PokemonsState } from './ducks/pokemons/types';


import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSagas';

export interface ApplicationState {
  repositories: RepositoriesState;
  pokemons: PokemonsState;
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
