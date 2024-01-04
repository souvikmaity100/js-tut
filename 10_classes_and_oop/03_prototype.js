// let myName = "souvik     "
// let myadd = "howrah     "

// console.log(myName.trueLength); 


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.souvik = function(){
    console.log(`souvik is present in all objects`);
}

Array.prototype.heysouvik = function(){
    console.log(`souvik says hello`);
}

// heroPower.souvik()
// myHeros.souvik()
// myHeros.heysouvik()
// heroPower.heysouvik()




// inheritance

const User = {
    name: "souvik",
    email: "sm@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "sam     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"souvik".trueLength()
"iceTea".trueLength()