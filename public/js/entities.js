import {entity} from './entity.js';
import Jump from './traits/Jump.js';
import Go from './traits/Go.js';
import {loadSpriteSheet} from './loader.js';
import {createAnimation} from './animation.js';

export function createMario() {
	return loadSpriteSheet('mario')
	.then(sprites =>{

		const mario = new entity();
		mario.size.set(14,16);

		mario.addTrait(new Jump());
		mario.addTrait(new Go());
		
		const runAnim = createAnimation(['run-1', 'run-2', 'run-3'],10);
		const frames = ['run-1', 'run-2', 'run-3'];
		function marioRoute(mario){
			if(mario.go.direction!==0){ 
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