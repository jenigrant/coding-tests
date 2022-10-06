'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    var lowSum = 0;
    var highSum = 0;

    // lazy math = the sum of the lowest four will always be the minimum, the sum of the highest four the max
    // sort the array numerically

    arr.sort((a,b) => a-b);

    // function sum adds an array of integers

    function sum(arrToSum) { 
        var sumTotal = 0;
        arrToSum.forEach(val => sumTotal+=val);
        return sumTotal;
    }

    lowSum = sum(arr.slice(0,4));
    highSum = sum(arr.slice(arr.length-4, arr.length));

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
