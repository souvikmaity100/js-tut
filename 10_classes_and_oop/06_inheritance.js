class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sam = new Teacher("sam", "sam@teacher.com", "123")

sam.logMe()
const joy = new User("joy")

joy.logMe()

console.log(sam instanceof User);
console.log(joy instanceof Teacher);