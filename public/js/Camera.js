import {vector} from './math.js'; 

export default class Camera{
	constructor(){
		this.pos = new vector(0,0);
		this.size = new vector(256,224);
	}
}