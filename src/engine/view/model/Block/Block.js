import React from 'react';

import './Block.css';

import PGComponent from '../../../common/PGComponent';

class Block extends PGComponent {
	
	constructor(pos, top, left, right) {
		super();
		this.state.pos = (pos === undefined) ? {x: 0, y: 0, z: 0} : pos;
		this.state.top = (top === undefined) ? "#eaeaea" : top;
		this.state.component_class = "Block";
	}
	
	componentWillMount() {
		this.setState({
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
		
		var p = pos.pos;
		
		var toppos = ((p.x + p.y) * 35) - (p.z * 71) - 25;
		var leftpos = ((p.x - p.y) * 70) - 50;
		var zindex = ((p.x + p.y) + 150) + (p.z * 2);
		
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