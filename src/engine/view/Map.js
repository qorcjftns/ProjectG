import React from 'react';

import './Block.css';

import PGComponent from '../common/PGComponent';

class Block extends PGComponent {
	
	constructor(pos, top, left, right) {
		super();
		this.setState({component_class: "Block"});
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
			<div className="Block" style={blockstyle}>
				<div className="PanelTop"><div className="PanelTopReal" style={topstyle}></div></div>
				<div className="PanelLeftRotate"><div className="PanelLeft"></div></div>
				<div className="PanelRightRotate"><div className="PanelRight"></div></div>
			</div>
		);
	};
}

export default Block;