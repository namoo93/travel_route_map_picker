import React from 'react';
import './App.css';
//리덕스 셋팅
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducer/index';
import Login from './components/pages/Login';
import MapMain from './components/pages/MapMain';
import {useState} from 'react';

const store = createStore(rootReducer);

function App() {
	const [login, setLogin] = useState(false);
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
