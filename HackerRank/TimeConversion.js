'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    var timeArray = s.split(":");
    var hours = timeArray[0];
    var minutes = timeArray[1];
    var seconds = timeArray[2].slice(0,2);
    var afternoon = timeArray[2].includes("PM");

    if (hours == "12") {
        if (afternoon === true) {
            hours = "12"
        } else {
            hours = "00"
        }
    } else if ((hours != "12") && (afternoon === true)) {
        hours = Number(hours) + 12;
    }


    return(hours + ":" + minutes + ":" + seconds);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
