import React from 'react';

import './common.css';

import PGComponent from '../../common/PGComponent';

class Frame extends PGComponent {
	
	constructor(pos, size) {
		super();
		this.state.pos = pos?pos:({
			x: "calc(50% - 150px)",
			y: "calc(50% - 75px)"
		});
		this.state.size = size?size:({
			width: "300px",
			height: "150px"
		});
	}
	
	updatePos() {
		this.setState({
			style: {
				top: this.state.pos.y,
				left: this.state.pos.x,
				width: this.state.size.width,
				height: this.state.size.height,
			}
		});
	}
	
	componentWillMount() {
		this.updatePos();
	}
	
	// Define renderer
	render() {	
		return (
			<div className="Frame" style={this.state.style}>
				<div className="FrameWrapper">
					<div className="FrameHeader">

					</div>
					<div className="FrameBody">

					</div>
				</div>
			</div>
		);
	};
}

export default Frame;