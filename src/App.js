import './App.css';
//리덕스 셋팅
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducers/index';

const store = createStore(rootReducer);

function App() {
	return (
		<Provider store={store}>
			<div className="App"></div>
		</Provider>
	);
}

export default App;
