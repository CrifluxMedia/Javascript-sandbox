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
