//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// -----------------------------------------------------------------------

// Stack and Heap memory in JavaScript

// stack used in primitive datatypes | Heap used in non-primitive datatype

let myName = "sam roy";

let anotherName = myName;

anotherName = "ram";

console.log(myName);
console.log(anotherName); 


let user1 = {
    name: 'sam',
    role: 'web developer'
};

let user2 = user1;

user2.role = 'programmer';

console.log(user1);
console.log(user2);
