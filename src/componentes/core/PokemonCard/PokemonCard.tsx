import React from 'react';
import { usePalette } from 'react-palette';
import { CardBody, CardHeader } from './styled';
import { Pokemons } from '../../../store/ducks/pokemons/types';

interface OwnProps {
  pokemon: Pokemons;
}

const PokemonCard: React.FunctionComponent<OwnProps> = ({ pokemon }) => {
  const { data } = usePalette(pokemon.sprites.front_default);

  return (
    <CardBody shadow={data.muted}>
      <CardHeader>
        <img alt="Pokemon default" src={pokemon.sprites.front_default} />
        <h1>{pokemon.name}</h1>
      </CardHeader>
    </CardBody>
  );
};

export default PokemonCard;
