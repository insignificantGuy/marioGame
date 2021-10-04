import compositor from './compositor.js';
import TileCollider from './tileCollider.js';
import {Matrix} from './math.js';

export default class level {
	constructor(){
		this.comp = new compositor();
		this.entities = new Set();
		this.tiles = new Matrix();	
		this.tileCollider = new TileCollider(this.tiles);
	}

	update(deltaTime){
		this.entities.forEach(entity=>{
			entity.update(deltaTime);
			this.tileCollider.test(entity);
		})
	}
}