import SpriteSheet from './spriteSheet.js';
import compositor from './compositor.js';
import {loadImage, loadLevel} from './loader.js';
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer} from './layers.js';

const canvas = document.getElementById("screen");
canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete
// console.log(canvas.width);
// console.log(canvas.height);
const context = canvas.getContext('2d');

function createSpriteLayer(sprite,pos){
	return function drawSpriteLayer(context){
		for(var i=0;i<20;i++){
			sprite.draw('idle',context,pos.x+i*16, pos.y);
		}
	}
};

Promise.all([
	loadMarioSprite(),
	loadBackgroundSprites(),
	loadLevel('1-1'),
])
.then(([marioSprite, backgroundSprites,level])=>{
	const comp = new compositor();
	const backgroundLayer = createBackgroundLayer(level.backgrounds,backgroundSprites);
	comp.layer.push(backgroundLayer);
	
	const pos = {
		x: 64,
		y: 593,
	};

	const spriteLayer = createSpriteLayer(marioSprite,pos);
	comp.layer.push(spriteLayer);

	function update(){
		comp.draw(context);
		//marioSprite.draw('idle',context,pos.x,pos.y);
		pos.x+=2;
		requestAnimationFrame(update);
	}
	update();
});