import React, {Component} from 'react';
import { connect } from 'react-redux';

class Player extends Component {
	
	// Define renderer
	render() {
		return (
			<div 
				style={{
					position: 'relative',
					top: this.props.position.y,
					left: this.props.position.x,
					background: 'white',
					width: '50px',
					height: '50px',
				}}
				/>
		);
	};
}
function mapStateToProps(state) {
	return {
		...state.player,	
	};
}

export default connect(mapStateToProps)(Player);