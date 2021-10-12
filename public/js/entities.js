import {entity} from './entity.js';
import Jump from './traits/Jump.js';
import Go from './traits/Go.js';
import {loadSpriteSheet} from './loader.js';
import {createAnimation} from './animation.js';

const SLOW_DRAG = 1/1000;
const FAST_DRAG = 1/5000;

export function createMario() {
	return loadSpriteSheet('mario')
	.then(sprites =>{

		const mario = new entity();
		mario.size.set(14,16);

		mario.addTrait(new Jump());
		mario.addTrait(new Go());
		mario.turbo = function setTurboState(turboOn){
			this.go.dragFactor = turboOn ? FAST_DRAG : SLOW_DRAG;
		}
		
		const runAnim = createAnimation(['run-1', 'run-2', 'run-3'],8);
		const frames = ['run-1', 'run-2', 'run-3'];
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

		mario.draw = function drawMario(context){
			sprites.draw(marioRoute(this),context,0,0, this.go.heading<0);
		}
		
		return mario;
	});
}