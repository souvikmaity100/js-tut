// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);




let age = 17;
// if(age >= 18){
//     console.log("you are above 18 or eighteen");
// } else{
//     console.log("Your age is below 18");
// }

let book = "math";
// if (book == "bengali") {
//     console.log("Bengali Book");
// }
// else if(book == "english"){
//     console.log("English book");
// }
// else if(book == "math"){
//     console.log("Mathematics book");
// }
// else {
//     console.log("Unknown book");
// }




// const balance = 1000

// --------------short hand--------------
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}