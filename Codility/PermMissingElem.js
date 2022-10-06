// PermMissingElem.js
/**
 * Problem PerMissingElement
 * https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 *  
 */

/* 
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
================================================================*/ 

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

	//check for empty array
	if (A.length == 0) {
		return 1;
	}

	//sort the Array
	const sortedArray = A.sort((a,b) => a-b);
	var positionCounter = 1;

	//iterate the array to find the missing value
	sortedArray.forEach(value => {
		if (value != positionCounter) {
			// found it, return the missing number
			return positionCounter;
		}
		positionCounter++;
	});

	//how did we get here? 
	//this is not my beautiful house
	return positionCounter;
}

//** Testing  */

console.log([2,3,1,5]) //expected return 4