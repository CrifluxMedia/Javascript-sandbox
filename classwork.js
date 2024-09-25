//determine whether variables should be const or let 
//create a variable named my country set it tob whatever value 
const myCountry = "Nigeria";
console.log(myCountry);
console.log(myCountry.length) 

let myAge = 32;
console.log(myAge);

const fullName = "Ayo";
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());


const quote =`${fullName} is a citizen of NIgeria`;
console.log(quote);

console.log(myCountry.includes(" h "))
const quote = `${myCountry}`

const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBmi = marksMass / marksHeight ** 2;
const johnsBmi = johnsMass / johnsHeight ** 2;
const markHigherBMI = marksBmi > johnsBmi;
console.log(marksBmi, johnsBmi);

if (marksBmi > johnsBmi) {
  console.log("Mark's BMI is hogher than john's!");
} else if (johnsBmi > marksBmi) {
  console.log("john's BMI is higher than Mark's!");
} else {
  console.log("John's BMI and Mark's BMI is equal");
}

//nan -translates to not a number
console, log("hello");
