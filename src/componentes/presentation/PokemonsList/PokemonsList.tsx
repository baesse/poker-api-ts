import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRequest } from '../../../store/ducks/pokemons/actions';
import { ApplicationState } from '../../../store';
import PokemonCard from '../../core/PokemonCard';
import { List } from './styled';

const PokemonsList = () => {
  const dispatch = useDispatch();
  const PokemonsReducer = useSelector(
    (state: ApplicationState) => state.pokemons
  );

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <List>
      {PokemonsReducer.data.map(pokemon => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </List>
  );
};

export default PokemonsList;
