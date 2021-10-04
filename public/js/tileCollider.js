import TileResolver from './tileResolver.js';

export default class TileCollider{
	constructor(tileMatrix){
		this.tiles = new TileResolver(tileMatrix);
	}

	test(entity){
		const match = this.tiles.matchByPosition(entity.pos.x, entity.pos.y);
		if(match){
			console.log("matched Tile", match, match.tile);
		}
	}
}