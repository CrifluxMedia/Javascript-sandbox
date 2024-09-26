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

//There are two gymnastics teams, Dolphins and pandas
//They compete against eachother 3 times.
//the winner with the

//Test data 
//let dolphinScores = (96, 108, 89);
//let pandaScores =(88, 91, 110);

//calculate average score
//let dolphinAverage =
//calculateAverage(dolphinScores);
//let pandaAverage =
//calculateAverage(pandaScores);

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
const pandaScore1 = 109;
const pandaScore2 = 95;
const pandaScore3 = 123;

const totalDolphinScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
const totalPandaScore = pandaScore1 + pandaScore2 + pandaScore3;

const avgDolphin = totalDolphinScore / 3;
const avgPanda = totalPandaScore / 3;

console.log('AVerage dolphin score is ${avgDolphin}');

console.log('AVerage panda score is ${avgPanda}');

if (avgDolphin > avgPanda && avgDolphin >= 100) {
    console.log("Dolphin wins");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
    console.log("Panda Wins");
} else {
    console.log("No team wins");
}

if (avgDolphin > avgPanda && avgDolphin >= 100) {
    console.log("Dolpohin wins");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
    console.log("Panda wins");
} else if (avgDolphin === avgPanda && avgDolphin >= 100 && avgPanda >= 100) {
    console.log("this is a draw");
} else {
    console.log("No team wins");
}
