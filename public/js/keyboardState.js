const PRESSED = 1;
const RELEASED = 0;

export default class keyboardState{
	constructor(){
		// Holds the current state of the given key
		this.keyStates = new Map();
		// Holds the key code and the function when the key is Pressed
		this.keyMap = new Map();
	}

	addMapping(keyCode, callback){
		this.keyMap.set(keyCode, callback);
	}

	handleEvent(event){
		const {keyCode} = event;
		if(!this.keyMap.has(keyCode)){
			// Return False if the KeyCode is not present in the Map
			return ;
		}
		event.preventDefault();

		const keyState = event.type === 'keydown' ? PRESSED : RELEASED;

		if(this.keyStates.get(keyCode) === keyState){
			return;
		}

		this.keyStates.set(keyCode, keyState);
		this.keyMap.get(keyCode)(keyState);
	}

	listenTo(window){
		['keydown', 'keyup'].forEach(eventName => {
			window.addEventListener(eventName, event=>{
				this.handleEvent(event);
			});
		});
	}
}