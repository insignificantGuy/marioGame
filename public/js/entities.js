import {entity} from './entity.js';
import Velocity from './traits/Velocity.js';
import Jump from './traits/Jump.js';
import Go from './traits/Go.js';
import {loadMarioSprite} from './sprites.js';

export function createMario() {
	return loadMarioSprite()
	.then(sprites =>{
		const mario = new entity();
		mario.size.set(14,16);

		mario.addTrait(new Jump());
		//mario.addTrait(new Velocity());
		mario.addTrait(new Go());
		
		mario.draw = function drawMario(context){
			sprites.draw('idle',context,0,0);
		}
		
		return mario;
	});
}