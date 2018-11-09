import React, { Component } from 'react';

class PGComponent extends Component {
	
	state = {
		views: [],
		component_class: "component"
	};
	
	addView(view) {
		var temp_views = this.state.views;
		temp_views.push(view);
		this.setState({
			views: temp_views
		});
	}
	
	render() {
		return (
			<div className={this.state.component_class}>
				{this.state.views.map((v) => {return v.render()})}
			</div>
		);
	}
}

export default PGComponent;
