import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRequest } from '../../../store/ducks/pokemons/actions';
import { ApplicationState } from '../../../store';
import PokemonCard from '../../core/PokemonCard'
import { List } from './styled';
import { Fade } from 'react-reveal'

const PokemonsList = () => {
  const dispatch = useDispatch();
  const PokemonsReducer = useSelector(
    (state: ApplicationState) => state.pokemons
  );

  useEffect(() => {
    dispatch(loadRequest())
  }, []);

  return (
    <Fade bottom>
      <List>
        {PokemonsReducer.data.map(pokemon => {
          return <PokemonCard pokemon={pokemon} />;
        })}
      </List>
    </Fade>

  );
};

export default PokemonsList;
