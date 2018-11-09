import React from 'react';

import './common.css';

import PGComponent from '../../common/PGComponent';

class Frame extends PGComponent {
	
	constructor(pos, size) {
		super();
		this.state.pos = pos?pos:({
			x: "calc(50% - 200px)",
			y: "calc(50% - 150px)"
		});
		this.state.size = size?size:({
			width: "400px",
			height: "300px"
		});
		this.state.style = {
			top: this.state.pos.x,
			left: this.state.pos.y,
			width: this.state.size.width,
			height: this.state.size.height,
		};
	}
	
	componentWillMount() {
		this.setState({
			style: {
				top: this.state.pos.x,
				left: this.state.pos.y,
				width: this.state.size.width,
				height: this.state.size.height,
			}
		});
		console.log("..!");
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