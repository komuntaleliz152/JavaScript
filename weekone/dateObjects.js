//21st Feb
//Exercise1
let currentDate =new Date();
let yearToday =currentDate.getFullYear();
console.log("Year today:"+ yearToday);

let monthToday =currentDate.getMonth() +1;
console.log("month today:"+ monthToday);

let dateToday =currentDate.getDate();
console.log("Date today:"+ dateToday);

let dayToday =currentDate.getDay();
console.log("Day today:"+ dayToday);

let hourNow =currentDate.getHours();
console.log("Hour now:"+ hourNow);

let minutesNow =currentDate.getMinutes();
console.log("Minutes now:"+ minutesNow);

let secondsElapsed =Math.floor(currentDate.getTime()/1000)
console.log("Seconds elapsed since January 1,1970:"+ secondsElapsed);