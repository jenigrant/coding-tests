// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (X == 0 || X === undefined) { 
        return 0;
    }

	const minInHour = 60
	const secInMin = 60
	let toConvert = X

	// first convert seconds to minutes
	let minutes = Math.floor(toConvert/secInMin)
	let seconds = toConvert % secInMin
	let hours = 0;

	// then convert minutes to hours
	if (minutes >= minInHour) {
		hours = Math.floor(minutes/minInHour)
		minutes = (minutes - (hours*minInHour))
	} 

	let convertedTime = ""

	if (hours != 0) {
		convertedTime += hours + "h"
	} 
	
	if (minutes != 0) {
		convertedTime += minutes + "m"
	} 
	
	if (seconds != 0){
		convertedTime += seconds + "s"
	}

	if (convertedTime.length > 4){
		if  (hours > 0) {
			minutes = minutes + 1
			convertedTime = hours + "h" + minutes + "m"
		}
	}
	

	//let convertedTime = hours + "h" + minutes + "m" + seconds + "s"

	return convertedTime;
    
}

console.log(solution(7263))