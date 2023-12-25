// ---------- singleton object
// const tinderUser = new Object()

// ---------- non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    name: {
        username: 'souvikmaity100',
        userfullname: {
            firstname: "Souvik",
            lastname: "Maity"
        }
    }
}

// console.log(regularUser.name.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign( obj1, obj2, obj4)
const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);


const users = [
    {
        id: 1,
        email: "sam@gmail.com"
    },
    {
        id: 2,
        email: "ram@gmail.com"
    },
    {
        id: 1,
        email: "joy@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// ----------Object de-structure----------

const course = {
    coursename: "python",
    price: "999",
    courseInstructor: "sam"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


// JSON Stracture 

// {
//     "name": "sam",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]







