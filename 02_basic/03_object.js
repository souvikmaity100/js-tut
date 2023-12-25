// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sam",
    "full name": "Sam roy",
    [mySym]: "mykey1",
    age: 18,
    location: "howrah",
    email: "Sam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Sam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Sam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.newGreeting = function(){
    return "Welcome JS user";
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    console.log(`Hello JS user, ${this["full name"]}`);
}

// JsUser.greeting();
// console.log(JsUser.newGreeting());
JsUser.greetingTwo();