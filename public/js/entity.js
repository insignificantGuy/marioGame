import {vector} from './math.js';

export const Sides = {
	TOP : Symbol('top'),
	BOTTOM : Symbol('bottom'),
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
	}
};