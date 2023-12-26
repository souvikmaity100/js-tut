const user = {
    username: "souvik",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//NB: In this case we get blank boject because we use node.js.... If we use browser to run javascript then we get window object because window is the global object in browser...



// function abcd(){
//     // console.log(this);
//     let username = "souvik"
//     console.log(this.username);
// }

// abcd()

// const abcd = function () {
//     let username = "souvik"
//     console.log(this.username);
// }

const abcd =  () => {
    let username = "souvik"
    console.log(this);
}

// abcd()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "souvik"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()