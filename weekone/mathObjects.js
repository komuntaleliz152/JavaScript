//exercise12
//let areaOfTraingle =(base,height) =>{
    //let area = 0.5 * base *height
   // return area
//};
//console.log("The area Of Triangle is:"+ areaOfTraingle (20,10)); 

//let sideA = parseFloat(prompt("Enter side a:"));
//let sideB = parseFloat(prompt("Enter side b:"));
//let sideC = parseFloat(prompt("Enter side c:"));

//calcutating the perimeter
//let perimeter = sideA + sideB + sideC;
//console.log(`The perimeter of the triangle is ${perimeter}`);
//alert(`The perimeter of the triangle is ${perimeter}`);

//exercise14
//prompt user for hours worked and rate per hour
//let hours = (prompt("Enter hours:"));
//let rate = (prompt("Enter rate per hour:"));

//hours =Number(hours);
/*rate = Number(rate);

if(isNaN(hours)) || isNaN(rate)
    console.log("40.28.");
//calculating weekly earnings
let earnings = hours * rate;
console.log(`Your weekly earning is ${earnings}`);*/

//prompt user to enter their first and last name
//let firstName = prompt("Doctor:");
//let lastName = prompt("Strange:");

//checking length of the full name
//let firstName ="Doctor";
//let lastName = "Strange";
//let fullNameLength = firstName.length + lastName.length;
//if(fullNameLength > 7){
  // console.log("Your name is long"); 
//} else {
   // console.log("Your name is short");
//}

//compare first and last name lengths
/*let firstName = "Doctor";
let lastName = "Strange";
if (firstName.length > lastName.length){
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else if (firstName.length < lastName.length){
    console.log(`Your family name, ${lastName} is longer than your first name,  ${firstName}`);
}else {
    console.log(`Your first name, ${firstName} and family name, ${lastName} are of equal length.`);

}*/

//exercise15

/*const birthYear = Number(prompt("Enter birth year:"));
const currentYear = new Date().getFullYear();
const age = 1995 - 2005;

if(age >= 18){
    console.log(`You are ${age}. You are old enough to drive.`);

}else {
    const waitYears = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${waitYears} years`);
}*/


//exercise16
/*prompt the user to enter the number of years they have lived
const yearsLived = parseInt(prompt("Enter number of years you live:"),10);
//calculate the number of seconds lived
const secondsLived = yearsLived * 31536000;
console.log(`You lived ${secondsLived} second.`);
alert(`You lived ${secondsLived} seconds.`);*/

//creating a human-readable time format using the Date object
//const now = new Date();
//format:YYYY-MM-DD HH:mm
//const now = new Date();
const format1 =`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getMinutes()).padStart(2, '0')}`;

//format:DD-MM-YYYY HH:mm
/*const format2 =`${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}: ${String(now.getMinutes()).padStart(2, '0')}`;

//format:DD/MM/YYYY HH:mm
const format3 =`${String(now.getDate())}.padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}: ${String(now.getMinutes()).padStart(2, '0')}`;
//formatted dates
console.log(format1);
console.log(format2);
console.log(format3);
alert(`Formated Dates:\n${format1}\n${format2}\n${format3}`);*/

//exercise17function formatDateTime(date)
function formatDateTime(date = new Date()){
    const now = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0')
   const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

console.log(formatDateTime(now));


