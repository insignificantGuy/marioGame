export function createAnimation(frames, frameLen){
	return function resolveFrame(distance){
		var frameIndex = Math.floor(distance/frameLen)%frames.length;
		const frameName = frames[frameIndex];
		return frameName;
	};
}
