class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}souvik`
    }

    set password(value){
        this._password = value
    }
}

const souvik = new User("sm@souvik.in", "abc")
console.log(souvik.email);
console.log(souvik.password);