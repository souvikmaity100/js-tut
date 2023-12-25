// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// -----------modified date string--------------
let modifideDate = newDate.toLocaleString('default', {
    weekday: "long",
    timeZoneName: "short"
})

console.log(modifideDate);





// let new1Dt = new Date(year, month, day, hour, minute, second, milisecond);
let new1Dt = new Date(2056, 5, 21, 6, 50, 20, 75);
// console.log(new1Dt);

let yr = new1Dt.getFullYear();
// console.log("This year is ", yr);

let month = new1Dt.getMonth();
// console.log("This Month is ", month);

let date = new1Dt.getDate();
// console.log("This Date is ", date);

let day = new1Dt.getDay();
// console.log("This Day of the week is ", day);
day2 = ['mon', 'tue', 'wen', 'thus', 'fri', 'sat', 'sun'];
// console.log('today is: '+ day2[day]);

let hours = new1Dt.getHours();
// console.log("This Hours is ", hours);

let minute = new1Dt.getMinutes();
// console.log("This Minute is ", minute);

let seconds = new1Dt.getSeconds();
// console.log("This Seconds is ", seconds);

new1Dt.setDate(43);
// console.log(new1Dt);
new1Dt.setSeconds(45);
// console.log(new1Dt);

// console.log(new Date('2001-02-29'));