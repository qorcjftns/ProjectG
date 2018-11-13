import React, { Component } from 'react';
import './App.css';

import Map from './engine/view/model/Map/Map';

class App extends Component {
	
	
	componentDidMount() {
		
	}
	
	render() {
		// return super.render();
		return ( 
			<Map />
		);
	}
}

export default App;
