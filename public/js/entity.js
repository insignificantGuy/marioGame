import {vector} from './math.js';
import BoundingBox from './boundingBox.js';

export const Sides = {
	TOP : Symbol('top'),
	BOTTOM : Symbol('bottom'),
	LEFT: Symbol('left'),
	RIGHT: Symbol('right'),
};

export class Trait{
	constructor(name){
		this.NAME = name;
	}

	obstruct(){

	}

	update(){
		console.warn('Unhandled update call in Trait');
	}
}

export class entity{
	constructor(){
		this.pos = new vector(0,0);
		this.vel = new vector(0,0);
		this.size = new vector(0,0);
		this.offset = new vector(0,0);
		this.bounds = new BoundingBox(this.pos, this.size, this.offset);
		this.lifeTime = 0;

		this.traits = [];
	}

	addTrait(trait){   
		this.traits.push(trait);
		this[trait.NAME] = trait;
	}

	obstruct(side){
		this.traits.forEach(trait => {
			trait.obstruct(this,side);
		}); 
	}

	update(deltaTime){
		this.traits.forEach(trait => {
			trait.update(this,deltaTime);
		}); 
		this.lifeTime += deltaTime;
	}
};