// testTools.js
/**
 * a set of tools to generate random arrays and numbers
 * coming one day: objects! strings!
 * 
 */

/**
 * Generate an array of random integers
 * @param {integer} min - The minimum value in the array
 * @param {integer} max - The maxmium value in the array
 * @param {integer} len - the length of the array
 * @returns Array - an array of length (len) with integer values between (min) and (max)
 */

function randomArray(min,max,len) {
	return Array.from({length:(len)}, (val,index) => randomNum(min,max))
}

/**
 * Generate an array of integers, aka range() in PHP and Python
 * Shitty handling of default values
 * @param {integer} min 
 * @param {integer} max 
 * @param {integer} step 
 * @returns Array - an array of sequential positive integers increased by (step) of range (min-max)
 */

function range(min, max, step) {			
	return Array.from({ length: (max - min) / step + 1}, (_, i) => min + (i * step));
}

/**
 * Generate a psuedo-random number
 * @param {integer} min 
 * @param {integer} max 
 * @returns Number - a positive integer between (min) and (max)
 */
function randomNum(min,max) {
	return Math.floor(Math.random() * (max - min) + min)
}