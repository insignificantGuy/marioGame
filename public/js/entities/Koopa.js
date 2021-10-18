import {entity, Sides} from '../entity.js';
import {loadSpriteSheet} from '../loader.js';
import PendulumWalk from '../traits/PendulumWalk.js';

export function loadKoopa() {
	return loadSpriteSheet('koopa')
	.then(createKoopaFactory);
}


function createKoopaFactory(sprites){

	const walkAnim = sprites.animations.get('walk');
	
	function drawKoopa(context){
		sprites.draw(walkAnim(this.lifeTime),context,0,0, this.vel.x<0);
	}

	return function createKoopa(){
		const koopa = new entity();
		koopa.size.set(16,16);
		koopa.offset.y = 8;

		koopa.addTrait(new PendulumWalk());

		koopa.draw = drawKoopa;

		return koopa;
	}
}
