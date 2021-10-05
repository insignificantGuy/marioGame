import keyboardState from './keyboardState.js';

export function setupKeyboard(entity){
	const input = new keyboardState();
	input.addMapping('Space', keyState =>{
		if(keyState){
			entity.jump.start();
		} 
		else{
			entity.jump.cancel();
		}
	});

	input.addMapping('ArrowRight', keyState =>{
		entity.go.direction = keyState;
	});

	input.addMapping('ArrowLeft', keyState =>{
		entity.go.direction = -keyState;
	});

	return input;
}