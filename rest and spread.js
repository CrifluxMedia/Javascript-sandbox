//rest and spread operator(written by three dots ...)
const countries = ["Cuba", "Algeria", "Mexico", "USA"];
const [one, ...others] = countries;
//rest operator
//optional chaining
const user = {
  name: "John Doe",
  age: 45,
  gender: "Male",
  previousJobs: {
    one: "Jumia",
    two: "Paystack",
    three: "Meta,"
  },
};
console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

//if (user.profilePic) {
   //display picture
  // <img src= {}
//}
// img src={user?.profilePic}
//nullish coalescence
//leftExpression (null || undefined) ?? defaultValue
user.profilePic;
user.post.title;
const { username, profilePic, dataOfAccount, password, followers } = user;
const {post: {title, description}} = user;
console.log(title, description);


const myMainUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser;
console.log(myMainUser);

// Array destructuring

const peoplesName = ["susan", "joy", "mercy", "ade"];
const [ones, , two] = peoplesName;
console.log(ones, two);