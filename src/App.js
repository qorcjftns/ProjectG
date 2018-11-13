import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Map from './engine/view/model/Map/Map';
import LoginFrame from './engine/view/UI/LoginFrame';
import CharacterSelect from './engine/view/UI/CharacterSelect';
import Loading from './engine/view/UI/Loading';

import {toggleLoading} from './engine/actions/Loading';

class App extends Component {
	
	
	componentDidMount() {
		
	}
	
	render() {
		
		return ( 
			<div>
				<LoginFrame />
				<CharacterSelect />
				<Loading />
				<Map />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state.game,	
	};
}

const mapDispatchToProps = dispatch => ({
	toggleLoading: id => dispatch(toggleLoading(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
