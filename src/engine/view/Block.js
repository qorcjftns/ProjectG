import React from 'react';

import './Block.css';

import PGComponent from '../common/PGComponent';

class Block extends PGComponent {
	
	constructor(pos, top, left, right) {
		super();
		this.state.pos = (pos === undefined) ? {x: 0, y: 0, z: 0} : pos;
		this.state.top = (top === undefined) ? "#eaeaea" : top;
		this.state.component_class = "Block";
	}
	
	componentWillMount() {
		this.setState({
			pos: {
				x: 0, y: 0, z: 0
			},
			top: "#eaeaea",
			component_class: "Block"
		});
	}
	
	// Define renderer
	render() {
		const {pos, top} = this.state;
		
		const topstyle = {
			background: top
		};
		
		var toppos = ((pos.x + pos.y) * 35) - (pos.z * 71) - 25;
		var leftpos = ((pos.x - pos.y) * 70) - 50;
		var zindex = ((pos.x + pos.y) + 150) + (pos.z * 2);
		
		const blockstyle = {
			top: 		"calc(50% + " + toppos + "px)",
			left: 		"calc(50% + " + leftpos + "px)",
			zIndex:		zindex,
		};
		
		return (
			<div key="Block" className="Block" style={blockstyle}>
				<div className="PanelTop"><div className="PanelTopReal" style={topstyle}></div></div>
				<div className="PanelLeftRotate"><div className="PanelLeft"></div></div>
				<div className="PanelRightRotate"><div className="PanelRight"></div></div>
			</div>
		);
	};
}

export default Block;