import keyboardState from './keyboardState.js';

export function setupKeyboard(mario){
	const input = new keyboardState();
	input.addMapping('KeyX', keyState =>{
		if(keyState){
			mario.jump.start();
		} 
		else{
			mario.jump.cancel();
		}
	});

	input.addMapping('KeyZ', keyState =>{
		mario.turbo(keyState);
	});

	input.addMapping('ArrowRight', keyState =>{
		mario.go.direction += keyState ? 1 : -1;
	});

	input.addMapping('ArrowLeft', keyState =>{
		mario.go.direction += keyState ? -1 : 1;
	});

	return input;
}