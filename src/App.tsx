import React from 'react';
import { Provider } from 'react-redux';
import PokemonsList from './componentes/presentation/PokemonsList';
import store from './store';
import GlobalTheme from './styles/theme'

function App() {
  return (
    <Provider store={store}>
      <PokemonsList />
      <GlobalTheme />
    </Provider>
  );
}

export default App;
