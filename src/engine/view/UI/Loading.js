import React, { Component } from 'react';

import './Loading.css';
import './common.css';

class Loading extends Component {
	
	// Define renderer
	render() {	
		let { hidden } = this.props;
		
		return (
			<div className={(hidden)?"Loading hidden":"Loading"}>
				<div className="Bar"></div>
			</div>
		);
	};
}

export default Loading;