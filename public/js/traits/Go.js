import {Trait} from '../entity.js';

export default class Go extends Trait{
	constructor(){
		super('go');
		this.direction = 0;
		this.accelaration = 400;
		this.distance = 0;
		this.heading = 0;
		this.dragFactor = 1/5000;
		this.decelaration = 300;
	}

	update(entity,deltaTime){
		const absX = Math.abs(entity.vel.x);
		if(this.direction){
			entity.vel.x += this.accelaration*this.direction*deltaTime;
			if(entity.jump){
				if(entity.jump.falling===false){
					this.heading = this.direction;
				}
			}
			else{
				this.heading = this.direction;
			}
		}
		else if(entity.vel.x!==0){
			const decel = Math.min(absX, this.decelaration*deltaTime);
			entity.vel.x+= entity.vel.x > 0 ? -decel : decel;
		}
		else{
			this.distance = 0;
		}
		this.distance += absX*deltaTime;
		const drag = this.dragFactor * entity.vel.x * absX;
		entity.vel.x-=drag;
	}
}
