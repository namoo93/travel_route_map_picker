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
  // 리덕스로 뺀뒤 UserMapList 에서 제어
  const [showMap, setShowMap] = useState(true);
  useEffect(() => {
    console.log(showMap);
  }, [showMap]);
  return (
    <Provider store={store}>
      <div className="App">{!showMap ? <Login /> : <MapMain />}</div>
    </Provider>
  );
}

export default App;
