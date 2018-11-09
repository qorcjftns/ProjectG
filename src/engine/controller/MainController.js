
import Block from '../view/Block';
import LoginFrame from '../view/UI/LoginFrame';
import NetworkController from './NetworkController';

class MainController {
	
	// Singleton Pattern
	static instance = null;

	static getInstance() {
		if(MainController.instance == null) {
			MainController.instance = new MainController();
		}
		return MainController.instance;
	}
	
	// Fields
	root = null;
	
	// methods
	run() {
		var login_frame = new LoginFrame();
		this.root.addView(login_frame);
	}

	loadMap() {
		var network = NetworkController.getInstance();
		var rootview = this.root;
		var res = network.communicate(
			"loadMap",
			{map_name: "StartPoint"},
			(ret) => {
				var block = new Block({x:0,y:0,z:0});
				var block2 = new Block({x:1,y:0,z:0});
				rootview.addView(block);
				rootview.addView(block2);
		});
		if(!res) console.error("Network not found");
	}
	
	setRootView(rootView) {
		this.root = rootView;
	}
	
}

export default MainController;