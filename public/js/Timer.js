export default class Timer {
	constructor(deltaTime = 1/60){
		let lastTime=0, accumalatedTime = 0;
		this.updateProxy = (time) =>{
			accumalatedTime += (time-lastTime)/1000;
			if(accumalatedTime>1){
				accumalatedTime = 1;
			}
			while(accumalatedTime>deltaTime){
				this.update(deltaTime);
				accumalatedTime -= deltaTime;	
			}
			lastTime = time;
			this.enqueue();
		}
	}

	enqueue(){
		requestAnimationFrame(this.updateProxy);
	}

	start(){
		this.enqueue();
	}

}