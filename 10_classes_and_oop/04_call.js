function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const sam = new createUser("sam", "sam@fb.com", "123")
console.log(sam);