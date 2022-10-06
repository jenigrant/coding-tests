// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
   
    if (A.length == 0) {
        return 1;
    }

    //filter for positive results and deduplicate
    const dedupeArray = A.filter((value,index,array) => (value > 0) && (array.indexOf(value) == index))

    //deduplicate the array -- this approach was faster according to Codility?
    //const dedupeArray = positiveArray.filter((value, index, array) => array.indexOf(value) == index)

    //sort the array
    const sortedArray = dedupeArray.sort((a,b) => a-b)

    //minimum positive integer
    var pos = 1;

    //check length to insure there are positive values
    if (sortedArray.length == 0) {
        return pos;
    } 

    //for each item in the array, check to see if it matches our minimum positive integer
    //this is a really resource dependent loop if the starting array is large
    for (let i = 0; i < sortedArray.length; i++){
        //if it exists and it matches minimum positive integer
        if ((sortedArray[i]) && (sortedArray[i] == pos)) {
            //increase the minimum positive integer by one
            pos++;
        } else {
            return pos;
        }
    } 

    return pos;
}

//test function
foo = Array.from({length:99999}, (v,i) => Math.floor(Math.random() * (100000 - 1) + 1))
console.log(solution(foo)); 

/* Results 
Detected time complexity:
O(N**2)
expand allExample tests
▶example1
first example test✔OK
▶example2
second example test✔OK
▶example3
third example test✔OK
expand allCorrectness tests
▶extreme_single
a single element✔OK
▶simple
simple test✔OK
▶extreme_min_max_value
minimal and maximal values✔OK
▶positive_only
shuffled sequence of 0...100 and then 102...200✔OK
▶negative_only
shuffled sequence -100 ... -1✔OK
expand allPerformance tests
▶medium
chaotic sequences length=10005 (with minus)✔OK
▶large_1
chaotic + sequence 1, 2, ..., 40000 (without minus)✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
▶large_2
shuffled sequence 1, 2, ..., 100000 (without minus)✘TIMEOUT ERROR
Killed. Hard limit reached: 6.000 sec.
▶large_3
chaotic + many -1, 1, 2, 3 (with minus)✘TIMEOUT ERROR
running time: 1.884 sec., time limit: 0.480 sec. */

//I think their profiler is wrong because local profiling with large data sets doesn't reveal same problem