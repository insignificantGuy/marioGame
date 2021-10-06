export default class compositor{
	constructor(){
		this.layer = [];
	}

	draw(context,camera){
		this.layer.forEach(layer => {
			layer(context, camera);
		});
	}
}
