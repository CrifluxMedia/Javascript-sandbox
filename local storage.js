//Local storage
//set

//localStorage.setItem("token", "hello");

//getting soemthing from the localstorage
//localStorage.getItem("token");

//remove values in the localstorage
//localStorage.removeItem("token");

//clear our local storage
//localStorage.clear();
//localstorage can only take in strings

//const user = {
 // id: 1,
//}

localStorage.setItem("user",JSON.stringify(user));
//
//JSON.Parse
//what if i want to put in other datatypes,we use "JSON.stringify"
//JSON- javascript object notation
//when you want to write a task that will take time it is better to use asynchronus code
localStorage.getItem("user");
JSON.parse(localStorage.getItem("user"));
