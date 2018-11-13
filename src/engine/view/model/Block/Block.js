import React from 'react';

import './Block.css';

import PGComponent from '../../../common/PGComponent';

class Block extends PGComponent {
	
	constructor(pos, top, left, right) {
		super();
		this.state.pos = (pos === undefined) ? {x: 0, y: 0, z: 0} : pos;
		this.state.top = (top === undefined) ? "#eaeaea" : top;
		this.state.hover = false;
		this.state.component_class = "Block";
		
		this.hoverIn = this.hoverIn.bind(this);
		this.hoverOut = this.hoverOut.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			top: "#eaeaea",
			component_class: "Block"
		});
	}
	
	hoverIn() {
		this.setState({
			component_class: "Block hover"
		});
	}
	hoverOut() {
		this.setState({
			component_class: "Block hoverout"
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
			<div className={this.state.component_class} style={blockstyle}>
				<div className="PanelTop">
					<div 
						onMouseOver={this.hoverIn} 
						onMouseOut={this.hoverOut} 
						className="PanelTopReal"
						style={topstyle}></div>
				</div>
				<div className="PanelLeftRotate">
					<div 
						onMouseOver={this.hover} 
						onMouseOut={this.hoverOut} 
						className="PanelLeft"></div>
				</div>
				<div className="PanelRightRotate">
					<div 
						onMouseOver={this.hover} 
						onMouseOut={this.hoverOut} 
						className="PanelRight"></div>
				</div>
			</div>
		);
	};
}


export default Block;