import { createStore, combineReducers } from 'redux';
import gameReducer from './GameReducer';
import playerReducer from '../view/model/player/reducer';
import blockReducer from '../view/model/Block/reducer';
import mapReducer from '../view/model/Map/reducer';

const rootReducer = combineReducers({
	player: playerReducer,
	block: blockReducer,
	map: mapReducer,
	game: gameReducer,
});

const store = createStore(
	rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.REDUX_DEVTOOLS_EXTENSION__()
);

export default store;