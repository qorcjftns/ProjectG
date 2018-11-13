import React, { Component } from 'react';
import { connect } from 'react-redux';

import Block from '../Block/Block';

class Map extends Component {
	
	// Define renderer
	render() {
		var blocks = [];
		for(var i = 0 ; i < this.props.blockData.length ; i++) {
			console.log(this.props.blockData[i]);
			blocks.push(<Block key={i} pos={{
						x: this.props.blockData[i].x,
						y: this.props.blockData[i].y,
						z: this.props.blockData[i].z
					}}/>);
		}
		return (
			<div className="Map">
				{blocks}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state.map,	
	};
}

export default connect(mapStateToProps)(Map);