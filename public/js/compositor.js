export default class compositor{
	constructor(){
		this.layer = [];
	}

	draw(context){
		this.layer.forEach(layer => {
			layer(context);
		});
	}
}
