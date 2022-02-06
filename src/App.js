import './App.css';
//리덕스 셋팅
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducers/index';
import Login from './components/pages/Login';
import MapMain from './components/pages/MapMain';

const store = createStore(rootReducer);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Login />
				<MapMain />
			</div>
		</Provider>
	);
}

export default App;
