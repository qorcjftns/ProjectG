
const initialState = {
	blockData: [{x: 0, y: 0, z: 0}, {x: 1, y: 0, z: 0}],
};

const mapReducer = (state=initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}	
};

export default mapReducer;