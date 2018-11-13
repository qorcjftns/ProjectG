import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Map.css';
import Block from '../Block/Block';

class Map extends Component {
	
	// Define renderer
	render() {
		let { loggedIn, character } = this.props;
		
		var blocks = [];
		for(var i = 0 ; i < this.props.blockData.length ; i++) {
			blocks.push(<Block key={i} pos={{
						x: this.props.blockData[i].x,
						y: this.props.blockData[i].y,
						z: this.props.blockData[i].z
					}}/>);
		}
		return (
			<div className="Map">
				{loggedIn&&character!==undefined?blocks:[]}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state.map,
		...state.game,
	};
}

export default connect(mapStateToProps)(Map);