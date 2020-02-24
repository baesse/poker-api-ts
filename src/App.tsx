import React from 'react';
import PokemonsList from './componentes/presentation/PokemonsList';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PokemonsList />
      </div>
    </Provider>
  );
}

export default App;
