import Camera from './Camera.js';
import Timer from './Timer.js';
import {loadLevel} from './loader.js';
import {createMario} from './entities.js';
import {createCollisionLayer, createCameraLayer} from './layers.js';
import {setupKeyboard} from './input.js';
import {setupMouseControl} from './debug.js';

const canvas = document.getElementById("screen");
const context = canvas.getContext('2d');

Promise.all([
	createMario(),
	loadLevel('1-1'),
])
.then(([mario, level])=>{
	const camera = new Camera();
	window.camera = camera;
	mario.pos.set(64,64);

	level.entities.add(mario);
	/*level.comp.layer.push(createCollisionLayer(level));
	level.comp.layer.push(createCameraLayer(camera));*/

	const input = setupKeyboard(mario);

	setupMouseControl(canvas,mario,camera);

	input.listenTo(window);

	const timer = new Timer(1/60);
	timer.update = function update(deltaTime){
			level.update(deltaTime);
			level.comp.draw(context, camera);
		}
	timer.start();
});