import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Map from './engine/view/model/Map/Map';
import LoginFrame from './engine/view/UI/LoginFrame';
import CharacterSelect from './engine/view/UI/CharacterSelect';
import Loading from './engine/view/UI/Loading';

import NetworkController from './engine/controller/NetworkController';

import {toggleLoading} from './engine/actions/Loading';
import {loginSuccess} from './engine/actions/User';

class App extends Component {
	
	
	componentWillMount() {
		
		NetworkController.getInstance().communicate(
			"user/check",
			{}, 
			(data) => {
				if(data.result) {
					this.props.loginSuccess();
				}
			});
		
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
	toggleLoading: id => dispatch(toggleLoading(id)),
	loginSuccess: ()=> dispatch(loginSuccess()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
