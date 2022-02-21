import React, { useEffect, useState } from 'react';
import './App.css';
//리덕스 셋팅
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducer/index';
import Login from './components/pages/Login';
import MapMain from './components/pages/MapMain';

const store = createStore(rootReducer);

function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    console.log(login);
  }, [login]);
  return (
    <Provider store={store}>
      <div className="App">
        <Login login={login} setLogin={setLogin} />
        {login && <MapMain />}
      </div>
    </Provider>
  );
}

export default App;
