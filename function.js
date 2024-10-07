// functions
function greeting() {
  console.log("Welcome to our App");
}
// for a function to work it need to be invoke and be called
greeting();
greeting();

function speak() {
  console.log("hello world");
}
speak();
// function can take parameters
function specialGreeting(name = "user") {
  console.log(`${name}, welcome to our app`);
  //remember to put Bactics
}
specialGreeting("timi");
specialGreeting("Goodness");
// default parameters
specialGreeting();

// write a function that logs the addition of two numbers
function addTwoNums(num1, num2, num3) {
  const result = num1 + num2 + num3;
  console.log(result);
}
addTwoNums(9, 5, 7);
addTwoNums(-10, 7, 3);

// checks if a number is either positive negative or zero

function checkNum(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is Negative`);
  } else {
    console.log("This is Zero");
  }
}
checkNum(89);
checkNum(-54);
checkNum(0);

// function expression
function myFunction() {
  console.log("This is a func expression");
}

const myFunction2 = function () {
  console.log("This is a func expression");
};
myFunction2();
// hoisting - moves all f the func decleration up the script

//return key word

//write a function that calculates the product of two nums

const productOfTwoNums = function (num1, num2) {
    return num1 * num2;
};

const result = productOfTwoNums(9, 2);
console.log('The result is ${result}');

//write a function that converts km to meter
// 7km - 7 * 1000

const KmToMeters = function (value) {
    const meter = value * 1000;
    return `${value}Km is equal to ${meter}m`;
    //inaccessible code
};

console.log(KmToMeters(6));
console.log(KmToMeters(4.5));

const calcAverage = function (n1, n2, n3) {
    const average = (n1 + n2 + n3) / 3;
    return average;
};

console.log(calcAverage(9, 7, 6));
//write a function that calculates the age of user,your function
//should take in year of birth as a parameter

const userAge = function (year) {
    const age = 2024 - year;
    return age;
};

console.log(userAge(2020));

const oddoreven = function (num) {
    if (num % 2 === 0) {
      return "This is an  even number";
    } else {
      return "This is an odd number";
    }
};

console.log(oddoreven(3));

let savings = 8900;
function checkWithdrawal(amount) {
  if (amount < savings) {
    savings -= amount;
    return `withdrawal of ${amount} is successful and my balance is ${savings}`;
  } else {
    return `Insufficient funds`;
  }
}

// console.log(checkWithdrawal(70000));
console.log(checkWithdrawal(6500));
console.log(checkWithdrawal(2000));

console.log(`my current saving is ${savings}`);

const depositAmount = function (amount) {
    savings += amount
    return `deposit of ${amount} is successful and your balance is ${savings}`
};

console.log(depositAmount(600000000));
console.log(checkWithdrawal(700));

//build a simple atm machine
let usersPin = 4378;
let savings = 43000;

//write a functioin that checks the enteredPin

const checkPin = function (enteredPin) {
  if (enteredPin === usersPin) {
    return true;
  } else {
    return false;
  }
};

const withdraw = function (amount) {
  if (checkPin(4378)) {
    if (savings > amount) {
      savings -= amount;
      console.log(
        `The withdrawal of ${amount} is successful and balance is ${savings}`
      );
    } else {
      console.log("insufficient funds");
    }
  } else {
    console.log("Incorrect Pin, try again");
  }
};

withdraw(2000);
withdraw(9000);

const deposit = function (amount) {
    if (checkPin(4378)) {
        //add
        savings += amount;
        console.log(
            `The transaction of ${amount} is successful and balance is ${savings}`
        );
    }else{
        console.log("Incorrect Pin, try again");
    }
};

deposit(400243682)

const balance = function () {
    if (checkPin(4378)) {

        console.log(`your current balance is ${savings}`);
    }else{
        console.log("Incirrect pin, try again");
    }
};
balance()

let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
  if (checkPin(7689)) {
    console.log("perform transaction");
  } else {
    if (!blocked) {
      attempt++;
      console.log(`Incorrect Pin, ${3 - attempt} attempt left`);
    }
    if (attempt === 3) {
      console.log("your card is blocked");
      blocked = true;
    }
  }
};
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();

const checkCardAttempt2 = function () {
    if (blocked) {
        console.log("Your Card is Blocked");
        return;
    }
    if (checkPin(7890)) {
        console.log("Your Card is Blocked");
        blocked = true;
    } else {
        console.log(`Incorrect Pin, ${3 - attempt} attempts left`);
    }
};
checkCardAttempt2();
checkCardAttempt2();
checkCardAttempt2();
checkCardAttempt2();

//arrow function

const myFunction = (p1,p2) => {}


//write an arrow function thatchecks if password is long enough
//min password length is 7

const passwordCheck = (value) => {
    if (value.length >= 7) {
        console.log("password is long enough");
    } else{
        console.log("short password");
    }
}
passwordCheck("password")
//can be written in short with ternary operator as
const passwordCheck2 = (value) => value.length >= 7 ? "password is long enough" : "short password"
console.log(passwordCheck2("gram"));

// const calcAverage = (num1 , num2) => {
//     return (num1 + num2) / 2
// }
// console.log(calcAverage(8,5));

// in case of writing just one of code it can be shorten as
const calcAverage = (num1, num2) => (num1 + num2) / 2;
console.log(calcAverage(8, 5));

const kmToMeter = (value) => `${value} km is equal to ${value * 1000} meters`
console.log(kmToMeter(89));

//scoping 
//there are two types of scoping and they are global scoping and local scoping
//global scoped variable are accessible everywhere because they arent in a calling bracket (block of code)
const globalVar = "EXAMPLE"
const num5 = 95 

//locally based scope variable can only be used inside a block of code
const example = () => {
    console.log(globalVar);

    const myValue = 90
    console.log(myValue);    
};

const mySavings = 9000;

const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
}
seeBalance ()
console.log(mySavings);

const num = 8;
const func1 = () => {
  const num = 89;
  console.log(num);
}
const func2 = () => {
  const num = 12;
  console.log(num);
};
console.log(num);
func2 ()

//write a function that takes in a string as a parameters
//and returns the string in all capital letter
const capitalizeStr = (str) => str.toUpperCase();

//Write a JavaScript function that accepts a string as a parameter
//and converts the first letter of the word to uppercase
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase();

//const firstName = "Tech";
//const lastName = "Studio";
//console.log(firstName);
//console.log(lastName);
//console.log(fullName.toUpperCase());


//Write a JavaScript function that accepts an argument and returns the datatype.
const checkDataType =(arg) => typeof arg;
console.log(checkDataType(90));

//Write a function that returns whether a number is even or odd
const oddoreven1 = function (num) {
  if (num % 4 === 0) {
    return "This is an even number";
  } else {
    return "This is an odd number";
  }
};

console.log(oddoreven1(7))

//Write a function named minutesToHours that receives a number of minutes as parameter
//and returns a number representing the same amount of time but in hours.
const minutesToHours = (minute) => minute / 60;

//write a function called longestString that receives two strings as parameters
//and returns the longest of the two strings

//Write a function named concat3 that receives 3 strings as parameters
//(string1, string2, string3) and an additional string named separator.
//The function should concatenate the three strings
//using the provided separator and return the result.