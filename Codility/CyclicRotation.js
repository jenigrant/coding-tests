// CyclicRotation.js
/**
 * Problem CyclicRotation
 * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/ 
 * 
 */

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

	let shiftedArr = A //assume Array A of length 0-100 containing elements of integers between -1000-1000
	let shiftNum = K // assume integer K is between 0-100

	//edge case: invalid input ([],1)
	if (shiftedArr.length == 0) {
		return [];
	}

	while (shiftNum > 0) {
		//pop last element
		const lastItem = shiftedArr.pop()

		//push into first place on array
		shiftedArr.unshift(lastItem)
		shiftNum--
	}
	//return array
	return shiftedArr;
}
