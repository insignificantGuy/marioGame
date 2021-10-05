import compositor from './compositor.js';
import TileCollider from './tileCollider.js';
import {Matrix} from './math.js';

export default class level {
	constructor(){
		this.gravity = 2000;
		this.comp = new compositor();
		this.entities = new Set();
		this.tiles = new Matrix();	
		this.tileCollider = new TileCollider(this.tiles);
	}

	update(deltaTime){
		this.entities.forEach(entity=>{
			entity.update(deltaTime);
			
			entity.pos.x += entity.vel.x * deltaTime;
			this.tileCollider.checkX(entity);

			entity.pos.y += entity.vel.y * deltaTime;
			this.tileCollider.checkY(entity);

			entity.vel.y+= this.gravity * deltaTime;

		})
	}
}