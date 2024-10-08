//when you see a square bracket we are referring to an array
//key and value pairs are called object properties and these properties are separated by commas
//{key: value, key2: value2}
const person = {
  firstName: "Ade",
  lastName: "Wale",
  age: 64,
  isMarried: true,
  friends:["john", "jane"],
};
console.log(person);
//two ways to access age inside an obejct 
//bracket or notation
//access properties inside of object
//dot notation objName.propertyName
console.log(person.age);
console.log(person.friends[0]);
console.log(person.car); //undefined
// console.log(person.workHours.monday);
//bracket notation objName['propertyName']
console.log(person["age"]);
console.log(person["friends"][1])//used to bring out or point out only one of the names
// console.log(["WorkHours"]["monday"]);
//adding a new property to an object
person.car = "Benz";
person.hobbies = ["running", "sleeping"];
console.log(person);
//removing a property from an object delete
delete person.isMarried;
console.log(person);
//object methods are functions that the developer writes himself to work on

const book = {
  title: "In The Shadow",
  author: "John Doe",
  yearPublished: 2000,
  genre: "Fiction",
  isBestSeller: false,
  rating: 3.5,
  summary: function () {
    //The book is titled in the shadow and 
    //it is written by John Doe and has a rating of 3.5
    console.log(`The Book is Titled ${this.title} and it is written by ${this.author} and has a rating of ${this.rating}`);
  },
};
book.summary();
book.title;
//this keyword- inside of a function declaration in an object
//it refers to the object

//OBJECT DESTRUCTURING -
//modern and faster way of picking properties in an object
const user = {
  username: "user001",
  fullName: "Peter Pan",
  password: "*********",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "T-Pain", "Ronaldo"],
  dataOfAccount: 2020,
  post: {
    title: "Js is Fun",
    description: "I love js a lot"
  }
};
