import React from 'react';

import './common.css';

import Frame from './Frame';

import MainController from '../../controller/MainController';
import NetworkController from '../../controller/NetworkController';

class LoginFrame extends Frame {
	
	constructor() {
		super();
		this.state.counter = 0;
		this.state.main_class = "Frame";
	}
	
	addCounter() {
		this.setState({
			counter: this.state.counter+1
		});
	}
	
	formSubmit(e) {
		// prevents submit
		e.preventDefault();
		
		MainController.getInstance().toggleLoading();
		
		var login_id = e.target.login_id.value;
		var login_pw = e.target.login_pw.value;
		
		 NetworkController.getInstance().communicate(
			"user/login",
			{
				login_id: login_id,
			 	login_pw: login_pw
			}, 
			(data) => {
				if(data.result === 0) {
					MainController.getInstance().onLoginSuccess();
					this.setState({
						main_class: "Frame fadeout"
					});
				} else {
					console.log(data.err);
				}
				MainController.getInstance().toggleLoading();
			});
		
	}
	
	render() {
		return (
			<div className={this.state.main_class} style={this.state.style}>
				<div className="FrameWrapper">
					<div className="FrameHeader">
						로그인
					</div>
					<div className="FrameBody">
						<form className="login-form" onSubmit={this.formSubmit.bind(this)} method="POST">
							<div className="form-data">
								<div className="form-label">
									사용자 ID
								</div>
								<div className="form-input">
									<input type="text" name="login_id" />
								</div>
							</div>
							<div className="form-data">
								<div className="form-label">
									사용자 PW
								</div>
								<div className="form-input">
									<input type="password" name="login_pw" />
								</div>
							</div>
							<div className="form-control">
								<button className="btn btn-join">회원가입</button>
								<button className="btn btn-login">로그인</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
	
}

export default LoginFrame;