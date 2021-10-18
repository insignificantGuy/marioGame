import {entity, Sides} from '../entity.js';
import {loadSpriteSheet} from '../loader.js';
import PendulumWalk from '../traits/PendulumWalk.js';

export function loadGoomba() {
	return loadSpriteSheet('goomba')
	.then(createGoombaFactory);
}

function createGoombaFactory(sprites){

	const walkAnim = sprites.animations.get('walk');

	function drawGoomba(context){
		sprites.draw(walkAnim(this.lifeTime),context,0,0);
	}

	return function createGoomba(){
		const goomba = new entity();
		goomba.size.set(14,16);

		goomba.addTrait(new PendulumWalk());

		goomba.draw = drawGoomba;

		return goomba;
	}
}
