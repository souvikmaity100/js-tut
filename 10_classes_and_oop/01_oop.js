const user = {
    username: "souvik",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}


// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// try this without new
const userOne = new User("sam", 12, true)
const userTwo = new User("souvik", 11, false)
// console.log(userOne.constructor);
console.log(userOne.greeting());
// console.log(userOne);
// console.log(userTwo);