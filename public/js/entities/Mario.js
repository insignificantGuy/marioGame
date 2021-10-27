import {entity} from '../entity.js';
import Jump from '../traits/Jump.js';
import Go from '../traits/Go.js';
import {loadSpriteSheet} from '../loader.js';

const SLOW_DRAG = 1/1000;
const FAST_DRAG = 1/5000;

export function loadMario() {
	return loadSpriteSheet('mario')
	.then(createMarioFactory);
}


function createMarioFactory(sprites){

	const runAnim = sprites.animations.get('run');
	function marioRoute(mario){
		if(mario.jump.falling){
			return 'jump';
		}
		if(mario.go.distance>0){ 
			if((mario.vel.x > 0 && mario.go.direction < 0) || (mario.vel.x < 0 && mario.go.direction > 0)){
				return 'break';
			}
			return runAnim(mario.go.distance);
		}
		return 'idle';
	}
	
	function setTurboState(turboOn){
		this.go.dragFactor = turboOn ? FAST_DRAG : SLOW_DRAG;
	}

	function drawMario(context){
		sprites.draw(marioRoute(this),context,0,0, this.go.heading<0);
	}

	return function createMario(){
		const mario = new entity();
		mario.size.set(14,16); 

		mario.addTrait(new Jump());
		mario.addTrait(new Go());

		mario.turbo = setTurboState;

		mario.draw = drawMario;
		
		mario.turbo(false);

		return mario;
	}
}
