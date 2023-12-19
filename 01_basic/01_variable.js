const accountId = 144553;
let accountEmail = "souvik@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed


accountEmail = "sm@gm.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



/* ---------------- more on varible ----------------*/

var a = 67 // a contains 67
        console.log(a);
        a = "Souvik maity";
        console.log(a);
        // let 8ossam = 7 // Not allowed this will throw an error
        // let var = 7


        var a = 45;
        // var a = "p"
        let b = "souvik";
        const author = "suman"
        // author = 50 // Throws an error because constant cannot be changed
        b = 14
        const sm = 0;
        let c = null
        let d  = undefined  
        {
        let b = 'this is a string'
        console.log(b)
        }
        console.log(b)