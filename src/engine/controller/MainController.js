
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
	children = [];
	root = null;
	
	// methods
	run() {
		
	}
	
	setRootView(rootView) {
		this.root = rootView;
	}

	addChild(child) {
		this.children.push(child);
	}
	
}

export default MainController;