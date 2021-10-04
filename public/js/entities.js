import {entity} from './entity.js';
import Velocity from './traits/Velocity.js';
import Jump from './traits/Jump.js';
import {loadMarioSprite} from './sprites.js';

export function createMario() {
	return loadMarioSprite()
	.then(sprites =>{
		const mario = new entity();

		mario.addTrait(new Velocity());
		mario.addTrait(new Jump());
		
		mario.draw = function drawMario(context){
			sprites.draw('idle',context,this.pos.x, this.pos.y);
		}
		
		return mario;
	});
}