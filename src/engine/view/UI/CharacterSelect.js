import React from 'react';
import { connect } from 'react-redux';
import './common.css';
import './CharacterSelect.css';

import Frame from './Frame';

import {characterSelect} from '../../actions/User';

import NetworkController from '../../controller/NetworkController';

class CharacterSelect extends Frame {
	
	constructor() {
		super(undefined, {width: 500, height: 400});
		this.state.counter = 0;
		this.state.main_class = "CharacterSelect Frame";
	}
	
	addCounter() {
		this.setState({
			counter: this.state.counter+1
		});
	}
	
	onCharacterSelect() {
		this.props.characterSelect("!");
		console.log("..!");
	}
	
	onCharacterCreate() {
		
	}
	
	render() {
		let {loggedIn, character} = this.props;
		if(loggedIn && character===undefined) {
			NetworkController.getInstance().communicate(
			"user/list_character",
			{}, 
			(data) => {
				console.log(data);
			});
			return (
				<div className={this.state.main_class} style={this.state.style}>
					<div className="FrameHeader">
						캐릭터 선택
					</div>
					<div className="FrameBody">
						<div className="Characters">
							<div className="Characters-wrapper">
								<div className="Character" onClick={this.onCharacterSelect.bind(this)}></div>
								<div className="Character" onClick={this.onCharacterSelect.bind(this)}></div>
								<div className="Character" onClick={this.onCharacterSelect.bind(this)}></div>
								<div className="Character" onClick={this.onCharacterSelect.bind(this)}></div>
								<div className="Character" onClick={this.onCharacterSelect.bind(this)}></div>
							</div>
						</div>
						<div className="form-control">
							<button className="btn CharacterCreate" onClick={this.onCharacterCreate.bind(this)}>캐릭터 생성</button>
						</div>
					</div>
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