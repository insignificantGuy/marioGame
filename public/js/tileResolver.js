export default class TileResolver{
	constructor(matrix, tileSize = 16){
		this.matrix = matrix;
		this.tileSize = tileSize; 
	}
	toIndex(pos){
		return Math.floor(pos/this.tileSize);
	}

	getIndex(indexX,indexY){
		const tile = this.matrix.get(indexX,indexY);
		if(tile){
			return {
				tile,
			};
		}
	}

	matchByPosition(posX, posY){
		return this.getIndex(
			this.toIndex(posX),
			this.toIndex(posY)
		);
	}
}
