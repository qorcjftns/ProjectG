import React, { Component } from 'react';
import './App.css';

import MainController from './engine/controller/MainController';

class App extends Component {
	
	state = {};
	
	constructor() {
		super();
		// Set "this" as root view
		MainController.getInstance().setRootView(this);
	}
	
	addView(view) {
		var temp_views = this.state.views;
		temp_views.push(view);
		this.setState({
			views: temp_views
		});
	}
	
	render() {
		return (
			<div className="App">
				{this.state.views}
			</div>
		);
	}
}

export default App;
