// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// --Printing the Math objects--
let m = Math;
console.log(m);

// --Printing the Constants form Math objects--
// console.log("The value of Math.E is ", Math.E);
// console.log("The value of Math.LN2 is ", Math.LN2);
// console.log("The value of Math.LN1O is ", Math.LN10);
// console.log("The value of Math.LOG2E is ", Math.LOG2E);
// console.log("The value of Math.LOG10E is ", Math.LOG10E);
// console.log("The value of Math.PI is ", Math.PI);
// console.log("The value of Math.SQRT2 is ", Math.SQRT2);

// --Printing the Functions form Math objects--
let a = 35.2554;
let b = 56.5684;

// console.log("The value of a and b is ", a, b);
// Round function
// console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));

// Pow function
// console.log("3 raised to the power of 2 is", Math.pow(3, 2));
// console.log("5 raised to the power of 3 is", Math.pow(5, 3));
// console.log("1 raised to the power of 2 is", Math.pow(1, 2));

// Sqare root function
// console.log("Sqare root of 49 is", Math.sqrt(49));
// console.log("Sqare root of 36 is", Math.sqrt(36));
// console.log("Sqare root of 30 is", Math.sqrt(30));

// Ceil and floor function
// console.log("30.75445 rounded up to neariest integer is", Math.ceil(30.75445));
// console.log("30.75445 rounded down to neariest integer is", Math.floor(30.75445));

// Abs function 
// console.log("Abslute value of 5.67 is", Math.abs(5.67));
// console.log("Abslute value of -5.67 is", Math.abs(-5.67));

// Trinonometric function (The value of this function used in readian)
// console.log("The value of sin(pi) is", Math.sin(Math.PI));
// console.log("The value of sin(pi/2) is", Math.sin(Math.PI/2));
// console.log("The value of cos(pi) is", Math.cos(Math.PI));
// console.log("The value of tan(pi/4) is", Math.tan(Math.PI/4));

// Min and max function
// console.log("The minimum value of 75, 36, 56 is", Math.min(75, 36, 56));
// console.log("The maximum value of 75, 36, 56 is", Math.max(75, 36, 56));

// Generating a random number
let r = Math.random();
// console.log("The random number is", r);

// random number bitween (a, b) = a + (b-a)*Math.random()
let a1 = 1;
let b1 = 100;
let r1_100 = a1 + (b1-a1)*Math.random();
// console.log("The random number between 1 and 100 is", r1_100);

let a2 = 50;
let b2 = 60;
let r50_60 = a2 + (b2-a2)*Math.random();
// console.log("The random number between 50 and 60 is", r50_60);

let a3 = 10;
let b3 = 75;
let r10_75 = a3 + (b3-a3)*r;
// console.log("The random number between 10 and 75 is", r10_75);