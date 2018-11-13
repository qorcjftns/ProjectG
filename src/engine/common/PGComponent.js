import React, { Component } from 'react';


import Loading from '../view/UI/Loading';

class PGComponent extends Component {
	
	state = {
		views: [],
		component_class: "component",
		loading_hidden: true,
		is_root: false,
		hidden: false
	};
	
	addView(view) {
		var temp_views = this.state.views;
		temp_views.push(view);
		this.setState({
			views: temp_views
		});
	}

	toggleLoading() {
		this.setState({
			loading_hidden: !this.state.loading_hidden
		});
	}

	toggle() {
		this.setState({
			hidden: !this.state.hidden
		});
	}
	
	render() {
		let { hidden } = this.state;
		
		if(this.state.is_root) {
			return (
				<div className={this.state.component_class + (hidden?"hidden":"")}>
					<Loading key="Loading" hidden={this.state.loading_hidden} />
					{this.state.views}
				</div>
			);
		} else {
			return (
				<div className={this.state.component_class}>
					{this.state.views}
				</div>
			)
		}
	}
}

export default PGComponent;
