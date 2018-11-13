import React from 'react';
import { connect } from 'react-redux';
import './common.css';

import Frame from './Frame';

import {characterSelect} from '../../actions/User';

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
		let {loggedIn, character} = this.props;
		if(loggedIn && character===undefined) {
			return (
				<div className={this.state.main_class} style={this.state.style}>
					CHARACTER SELECT
				</div>
			);
		} else {
			return (<div></div>);
		}
	}
	
}

function mapStateToProps(state) {
	return {
		...state.game,	
	};
}

const mapDispatchToProps = dispatch => ({
	characterSelect: character => dispatch(characterSelect(character)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelect);