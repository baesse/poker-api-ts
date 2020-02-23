import React from 'react';
import Repositories from './componentes/RepositoryList'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Repositories />
      </div>
    </Provider>
  );
}

export default App;
