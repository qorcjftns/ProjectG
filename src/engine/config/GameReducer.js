
const initialState = {
	currentMap: "StartPoint",
	showLoading: false,
	loggedIn: false,
	character: undefined,
};

const gameReducer = (state=initialState, action) => {
	switch(action.type) {
		case  'TOGGLE_LOADING':
			return {
				currentMap: state.currentMap,
				showLoading: false, // !action.payload
				loggedIn: state.loggedIn,
				character: state.character,
			};
		case  'LOGIN_SUCCESS':
			return {
				currentMap: state.currentMap,
				showLoading: state.showLoading,
				loggedIn: true,
				character: undefined,
			};
		case  'CHARACTER_SELECT':
			return {
				currentMap: state.currentMap,
				showLoading: state.showLoading,
				loggedIn: true,
				character: action.payload,
			};
		default:
			return initialState;
	}	
};

export default gameReducer;