import keyboardState from './keyboardState.js';

export function setupKeyboard(entity){
	const input = new keyboardState();
	input.addMapping('KeyX', keyState =>{
		if(keyState){
			entity.jump.start();
		} 
		else{
			entity.jump.cancel();
		}
	});

	input.addMapping('ArrowRight', keyState =>{
		entity.go.direction += keyState ? 1 : -1;
	});

	input.addMapping('ArrowLeft', keyState =>{
		entity.go.direction += keyState ? -1 : 1;
	});

	return input;
}