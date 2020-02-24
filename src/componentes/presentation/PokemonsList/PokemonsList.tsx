import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRequest } from '../../../store/ducks/pokemons/actions';
import { ApplicationState } from '../../../store';


const PokemonsList = () => {
  const dispatch = useDispatch();
  const PokemonsReducer = useSelector(
    (state: ApplicationState) => state.pokemons
  );

  useEffect(() => {
    dispatch(loadRequest())
  }, []);

  return (
    <div>
      {PokemonsReducer.data.map(pokemon => {
        return <><img src={pokemon.sprites.back_default} /></>;
      })}
    </div>
  );
};

export default PokemonsList;
