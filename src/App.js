import './App.css';

import PGComponent from './engine/common/PGComponent';

import MainController from './engine/controller/MainController';

class App extends PGComponent {
	
	constructor() {
		super();
		// Set "this" as root view
		MainController.getInstance().setRootView(this);
		
		this.setState({
			component_class: "App"
		});
	}
	
	componentDidMount() {
		MainController.getInstance().run();
	}
	
	render() {
		return super.render();
	}
}

export default App;
