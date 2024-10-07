// ARRAYS
// Arrays are complex data types and they are denoted by square brackets. You can write more than onb evalue insid of one variable. Arrays have elements inside them and these elements are separated by commas. For e.g; [element1, element2];
const students = ["Goodness", "Aisha", "Adura"];
console.log(students);
// Arrays usually contain the same data types. However, this does not mean that arrays can be mixed.You can have a nested array, i.e., an array inside of an array. The commas are of paramount importance, or else the syntax will be wrong.
const mixedArray = [9, "str", true, 65, null, [90, false]];
// ARRAY PROPERTIES
// Length property: This returns the number of elements in that array, which is the lengthy of the array.
console.log(students.length);
// Getting belements in an array
// we can extractbor get elements in an array with their position. i.e. position arrayName [position].
console.log(students[0]);
// you can use positions to change elemenbts in an array. For example, to add "t" to Aisha
students[1] = "Aishat";

// ARRAY METHODS i.e. what are the things that can be performed on an array
// Adding and removing elements from an array. There are four methods: push, pop, shift and unshift.
// LIFO- meand last in first out
// the push methods pushes or adds an element to an array, but at the ened of the array. For e.g
students.push("Theresa");
students.push("Eniola");
console.log(students);

// pop methods removes an element at the end. it is like the opposite of push. It can also return the element that is has removed.
students.pop();
students.pop();
console.log(students.pop());
// adding .pop to students return what pop removed.
// shift and unshift work at the beginning of thge array.
students.unshift("Adedayo");
students.unshift("Timi");
console.log(students);
// shift removes the first element in the array.
students.shift();
console.log(students);

// How to convert an array to a string. There are basically two methods that can be used. 1. toString method 2. join. The difference is that toString just converts it and put the commas.
console.log(students.toString());
// on the other hand the join method joins elments in an array with a separator. You can determine what you want to join the elements with.
console.log(students.join("*"));
console.log(students.join("-"));

// How to join one array to another array.
const onlineStudents = ["John", "Peter", "Paul"];
const weekdayStudents = ["Ade", "Susan", "Joy"];
const weekendStudents = ["Ruth", "Gift"];
const allStudents = onlineStudents.concat(weekdayStudents);
console.log(allStudents);
// you can concatinate more than one array at a time.Concatenation is always going to be appended at the end for e.g: (check line 47).

// Includes method: returns true or false, based on whether an element is included in an array or not.
console.log(onlineStudents.includes("Ade"));
console.log(onlineStudents.includes("Paul"));

// other methods include sort method and reverse method

// the sort methods arranges elements in an array in an alphabetical order. For e.g: PS: Capital letter has precedence over lower case in sorting, it does not matter thyat it is the same word twice.
// reverse changes the arrangement of elements in an array, i.e., the reversed arrangement of the elements in the array. PS: it is not thge oppositre of sort.
//sort method,rerverse method
const carBrands = ["toyota", "lexus", "bmw", "audi", "chevrolet"];
console.log(carBrands);
console.log(carBrands.sort());
console.log(carBrands.reverse());
//extract portions of an array slice(start,end(not included))
const friends = ["ola", "Timi", "john", "jane"];
console.log(friends.slice(0, 2));
console.log(friends.slice(1));

//split
let text = "Hello world is fun";
console.log(text.split(" "));
const text2 = "tadapal";
console.log(text2.split("a"));
console.log(text2.split(""));

//hello olleh
const reverseStr = (str) => str.split().reverse().join("");
console.log(reverseStr("hello"));
//shift removes element at the front
//higher order array methods(callback functions,iterator methods)
// for of method 
const fruits = ['Oranges', 'Mangoes', 'Pear', 'Grapes']
for (const fruit of fruits) {
  console.log (`${fruit} is something i like`);
  if (fruit === "Pear") {
    console.log(`${fruit} is my best fruit`);
  }
}

//find, filter, forEach, map, reduce every some
//FOREACH -executes a function for each element in an array
const customers = ["pete", "mary", "Thomas", "Tobi", "Aisha"];
customers.forEach((customer, index) => {
  console.log(customer, index);
});

//MAP - creates a new array with transformed element

const nums = [4,5,6,7];

const transformedNums = nums.map((num) => {
  return num * 2;
});
console.log(transformedNums);
//find-this method returns the first matching elemrnt in an array

const mySpecialNum = nums.find((num) => {
  return num > 5;
});
console.log(mySpecialNum);
//Filter - returns all elements that fits a search condition in an array

const allMyspecialNums = nums.filter((num) => num >= 5);

console.log(allMyspecialNums);

let myBalance = 8000
const transactions = [4000, -125, 10000, -5000, -2000, 1500];

transactions.map((transaction) => {
  if (transaction > 0) {
    console.log(`You have been credited with ${transaction} Naira`);
  } else {
    console.log(`You have been debited ${transaction} Naira`);
  }
});

transactions.map((transaction) => {
  myBalance += transaction;
});
console.log(myBalance);
//map method ittirates(loops-go over them and perform any function one after the other)
const myCreditTransactions = transactions.filter((transaction) => transaction > 0)
console.log(myCreditTransactions);

const mydebitTransactions = transactions.filter(
  (transaction) => transaction > 0
);
console.log(mydebitTransactions);

const maxTransaction = 50000;
//find if there is any transaction close to that maxTransaction
transactions.push(100000);

const specialTransaction = transactions.find(
  (transaction) => transaction >= maxTransaction
);

console.log(specialTransaction);

//every and some
//every checks if all elements satisfy a condition
const ages= [20,42,61,81]
const allAdults = ages.every((age) => age >= 18)
console.log(allAdults);
//some checks if at least one satisfy the condition
const someChildren = ages.some((age) => age < 18);
console.log(someChildren);

//Reduce method-used for accumulating numbers
const cartPrices = [25000, 32000, 15000, 4000, -2500]
const cartTotal = cartPrices.reduce((prev, curr) => {
  return prev + curr;
} ,300);
console.log(cartTotal)
//sort-arranges in alphabetical order
const peoplesName = ["Zigi", "Samson", "Niyi","Ademola"];
//const atoZ = peoplesName.sort();
//console.log(atoZ);
const ztoA = peoplesName.sort((a, b) => b - a);
console.log(ztoA);

const prices = [8000, 67000, 767, 5600];
//const highesttolowest = prices.sort((a, b) => b- a);
//console.log(highesttolowest);

const lowesttohighest = prices.sort((a, b) => a - b);
console.log(lowesttohighest);

//Assignmentr-explain extensively shift and unshift
