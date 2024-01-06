const myArr = [];

// %DebugPrint(myArr);

/*

# to exicute this code we need v8-debug engine, because debugar code directly not allow in jsengines except v8-debug

# Install the jsvu CLI: (use powerShell)
# npm install jsvu -g

# Then, run jsvu:
# jsvu

# mostly v8-debug not installed
# use this code to install v8-debug: jsvu --os=win64 --engines=v8-debug

# goto 'C:\Users\user\.jsvu\bin' this path use 'dir' command for confirm instllation

# open your folder in powerShell

# ~/.jsvu/bin/v8-debug --allow-natives-syntex   use this command to run v8-debug engine
# --allow-natives-syntex this flag specify you use v8-debug otherwise v8 engine will started which we used in node.js

# run your js code as like in browser console 
 
*/


// basically array are two types - continious, holey

// SMI (small intiger)
// packed element
// double (float, string, function)


const arrTwo = [1, 3, 5, 7, 9]
//  PACKED_SMI_ELEMENTS

arrTwo.push(5.7)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('hello')
// PACKED_ELEMENTS

arrTwo[10] = 120;
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[8]);

// how to array find a value

// bound check
// hasOwnProperty(arrTwo, 8)
// hasOwnProperty(arrTwo.prototype, 8)
// hasOwnProperty(object.prototype, 8)

// holes are very expensive in js


let arrThree = [2,4,6,8]
console.log(arrThree[3]);

// SMI > DOUBLE > PACKED

// HOLY
// H_SMI > H_DOUBLE > H_PACKED


const arrFour = new Array(4)
// just 4 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '5' // HOLEY_ELEMENTS
arrFour[1] = '7' // HOLEY_ELEMENTS
arrFour[2] = '9' // HOLEY_ELEMENTS
arrFour[3] = '52' // HOLEY_ELEMENTS


let arrFive = []
arrFive.push('7') // PACKED_ELEMENTS
arrFive.push('5') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS


const arrSix = [1, 2, 3, 4]

arrSix.push(NaN) // PACKED_DOUBLE

// for, for-of, for-in, forEach are better optmize then same kine of loop created by user