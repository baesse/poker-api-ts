import { Reducer } from 'redux';
import { PokemonsState, PokemonTypes } from './types';

const INITIAL_STATE: PokemonsState = {
  data: [],
  loading: false,
  error: false
};

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case PokemonTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };

    case PokemonTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;
