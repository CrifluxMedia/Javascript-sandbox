//DATA TYPES 1-primitive and complex data types
//primitive data types can only hold one value at a time complex can hold more than one -primitive data types-primitve strings,number, booleam, null,undefined      complex-object and arrays-       strings are just text characters and to recognise them they must be in quotation marks either single or double quote



//STRINGS-text characters quotation marks '' ""
const firstName = "john";
const lastName = "Doe";
console.log(firstName);
console.log(lastName);


//String properties length,CONCATINATION{simply means joining string together}
//string.length
console.log(firstName.length);
const fullName = firstName  +" "+ lastName;
console.log(fullName);
console.log(fullName.length);


//STRING METHODS - functions that can be performed on strings
//toUpperCase
console.log(fullName.toUpperCase());
//toLowerCase
console.log(fullName.toLowerCase());
// replace, replaceAll
console.log(fullName.replace("o", "*"));
console.log(fullName.replaceAll("o", "*"));


//startWith , endwith
console.log(fullName.startsWith("JO"));


const myEmail = "johndoe@google.com";
console.log(myEmail);
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

//indexOf,lastIndexOf
console.log(myEmail.indexOf("o"))


//
console.log(myEmail.charAt(5));
//concat
console.log(myEmail.concat("example"));
//

const userName = "   user001    ";
console.log(userName.length);
console.log(userName.trim());
//trimstart trimend
console.log(userName.trimStart());
console.log(userName.trimEnd());


//extract portions of a string
//slice, substring, substr(takes in two parameters ,firts one is where you start and second one is the number of characters you want)
//slice(start, end(non-inclusive))
const surname = "Sandler";
console.log(surname,slice(1));
console.log(surname.substring(1, 6));
console.log(surname.substr(0, 5));

const author = "Ngozi Adichie";
const booktitle = "Americanah";
const yearPublished = "2016";

console.log(surname.substr(0, 5));
//template literals allows you to format variables into strings,which makes up for the shortcoming of string concat.
//ps:you must use (start with)something called backticks ``(which is beside 1 on the keyboard).in order to format variable into strings,you have to use the dollar sign and curly brackets,like this: ${} and then ypou can call your variables inside. for e.g
//when you want to add a quotation inside of your string, you can use backticks.
const quote = `Tinubu said and i quote "Let the poor breathe" `;
console.log(quote);


