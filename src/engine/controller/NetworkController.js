
import io from 'socket.io-client';

class NetworkController {
	
	// Singleton Pattern
	static instance = null;

	static getInstance() {
		if(NetworkController.instance == null) {
			NetworkController.instance = new NetworkController();
		}
		return NetworkController.instance;
	}

	constructor() {
		this.connect();
	}

	// Fields
	socket = null;
	

	connect() {
		this.socket = io('http://project-g-server.run.goorm.io');
	}

	communicate(label, data, callback) {
		if(this.socket === null) return false;
		this.socket.emit(label, data);
		this.socket.on(label, (ret) => {
			callback(ret);
			this.socket.off(label);
		});
		return true;
	}

	
}

export default NetworkController;