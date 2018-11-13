import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Loading.css';
import './common.css';

class Loading extends Component {
	
	// Define renderer
	render() {	
		let { showLoading } = this.props;
		
		return (
			<div className={(showLoading)?"Loading":"Loading hidden"}>
				<div className="Bar"></div>
			</div>
		);
	};
}

function mapStateToProps(state) {
	return {
		...state.game,	
	};
}
	
export default connect(mapStateToProps)(Loading);