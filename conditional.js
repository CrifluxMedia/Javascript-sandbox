//CONDITIONAL STATEMENT-
//if statement
//if(condition)-before this lines of code can be executed,the condition must be true
//if the length of the password is 7 and above-good password
const password = "28hvbnbcv";
if (password.length >= 7) {
    console.log("Good Password");
}
//if else statement means two things(if the condition is false,do this,if the condition is true,do this)

const age = 15;
//eligible to vote- 18+ or not
if (age >= 18) {
    console.log("you are eligible to vote");
} else {
    console.log("you are inelligible to vote,you must be 18+")
}

//youth/underage 0-40 or aged 41
const age3 = 40;
if (age3 <= 40) {
    console.log("you are in the youth/underage category");
} else {
    console.log("you are in the aged category");
}
//let number = 10;
//if (number == 0 ) {
//console.log("it is an even number");
//} else {
 //   console.log("it is an odd number");
//}
const num = 90;
if (num % 2 === 0) {
    console.log("This is an  even number");
} else {
    console.log("This is an odd number");
}

const myBalance = 6000000;
const transaction = 10000;

if(myBalance > transaction){
    console.log("Transaction successful")
}
//multiple conditions else if statement

//positive > 0 negative < 0 and zero
let myNum = 0;

if (myNum > 0){
    console.log("This is a poistive nUmber");
} else if (myNum < 0) {
    console.log("This is a Negative number");
} else {
    console.log("This is zero");
}

const age4 = 24;


if(age4 >= 0 && age4 <= 12); {
    console.log("underage");
}else if (age4 >=13 && age4 <= 19) {
    console.log("Teens");
} else if (age4 >= 20 && age4 <= 40) {
    console.log("Adult");
}else if (age4 >= 41) {
    console.log("Aged");
} else{
    console.log("Invalid age,try again");
}


//Nested if statement

//Switch statement
//a- excellent , b- very good
//After writing your lines of code you must break

let grade = "C";

switch (grade) {
    case "A":
    case "a":    
        console.log("Excellent");
        break;
    case "B":
    case "b":    
        console.log("Very Good");
        break;
    case "C":
    case "c":    
        console.log("Good");
        break;
    case "D":
    case "d":    
        console.log("Fair");
        break;
    case "E":
    case "e":    
        console.log("Poor");
        break;
    case "F":
    case "f":    
        console.log("Failed");
        break;
    default: 
     console.log("invalid grade")                  
}


