// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, B, Z) {
    // write your code in JavaScript (Node.js 8.9.4)

    //assumptions in input: X & Z are greater than -1
    // B is an array

    let fileSize = X
    let bytesDownloaded = B
    let numObservations = Z

    //handle some edge cases
    //if the filesize is zero or the array doesn't exist
    if (fileSize == 0 || bytesDownloaded.length == 0) {
        return 0;
    } else if (bytesDownloaded === undefined || numObservations == 0) {
        return -1
    }

    var totalBytes = new Number
    
    //create a sum for the array
    for(download in bytesDownloaded) {
        totalBytes += bytesDownloaded[download]
    }

	//create an average based on the last (numObservations)
	let averageMin = 0;
	let arrLength = bytesDownloaded.length
	let startIndex = (arrLength) - numObservations;
	

	for (startIndex; startIndex < arrLength; startIndex++) {
		averageMin += bytesDownloaded[startIndex]
	}

	averageMin = averageMin/numObservations

	let timeRemaining = Math.ceil((fileSize-totalBytes)/averageMin)

    //ceiling time to integer timeRemaining
    return timeRemaining;
}


console.log(solution(100, [10, 6, 6, 8], 2)) //should be 10