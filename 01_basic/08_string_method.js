const name = "sam"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sam-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // show all prototypes methods


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sam    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sam.com/sam%20roy"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


// -------------------------------------------------------------------------

var str = "This is String";
        console.log(str.length);

        // First occurence of a substring
        var position = str.indexOf('is');
        console.log(position);

        // last occurence of a substring
        position = str.lastIndexOf('is');
        console.log(position);

        // Substring for a string
        // var substr1 = str.slice(3, -2);
        var substr1 = str.substring(3, 6);
        // var substr1 = str.substr(2, 6);
        console.log(substr1);

        var repl = str.replace('String', 'Souvik');
        console.log(str);
        console.log(repl);

        console.log(str.toUpperCase());
        console.log(str.toLowerCase());

        var nString = str.concat(' New String');
        console.log(newString);

        var strWithWhitespaces = "        This Content               Whitespaces         "
        console.log(strWithWhitespaces);
        console.log(strWithWhitespaces.trim());

        var char2 = str.charAt(3);
        // var char2 = str.charCodeAt(3); // Not very importent
        console.log(char2);

        console.log(str[2]);

        // ----- notwork because we use node.js
        // let a = prompt("Hey whats you age?");
        // a = Number.parseInt(a); // Converting the string to a number
        // a = Number.parseFloat(a); // Converting the string to a number

        let numm = "2**3-5";
        console.log(eval(numm));

        let newName = "Souvik"
        // console.log(name.length)

        // console.log(name.toUpperCase())
        // console.log(name.toLowerCase())
        // console.log(name.slice(2, 4))
        // console.log(name.slice(2))
        // console.log(name.replace("Har", "Per"))
        // let friend = "Naman"
        // console.log(name.concat(" is a friend of ", friend, " Ok"))
        // let friend2 = "      Meena        "
        // console.log(friend2)
        // console.log(friend2.trim())
        let fr = "Raman" + "Shivika" + "Harry"
        // console.log(fr[0])
        // console.log(fr[1])
        // console.log(fr[2])
        // console.log(fr[3])
        
        let nm = 'a quick brown fox jumps over the lazy fox';



        console.log(nm.endsWith('fox'));
        console.log(nm.match(/fox/));
        console.log(nm.matchAll('fox'));