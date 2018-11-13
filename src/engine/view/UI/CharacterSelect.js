import React from 'react';

import './common.css';

import Frame from './Frame';

class CharacterSelect extends Frame {
	
	constructor() {
		super();
		this.state.counter = 0;
		this.state.main_class = "CharacterSelect Frame";
	}
	
	addCounter() {
		this.setState({
			counter: this.state.counter+1
		});
	}
	
	
	render() {
		return (
			<div className={this.state.main_class} style={this.state.style}>
				CHAR SELECT
			</div>
		);
	}
	
}

export default CharacterSelect;