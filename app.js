// //DOM-document object model
// //the method is called get elements on your page with an ID
// //how to select elements on the page
// //class, id, tag, combination
// //get element by the ID
// //another way to select element is by class names 
// const text = document.getElementById("text");
// console.log(text);
// //get element by classname
// const message = document.getElementsByClassName("message");
// console.log(message);
// //querySelector, querySelectorAll- use css selectors . #, div . class
// const paragraph = document.querySelector("#text");
// console.log(paragraph);
// const paragraphs = document.querySelectorAll(".message");
// console.log(paragraphs);
// //nodelist- array methods can be performed
// //paragraphs.map(paragraph) => {
// //console.log(paragraph);
// //});
// const heading6 = document.querySelector("div h6");
// //textContent, innerText, innerHTML
// const heading = document.querySelector("h1");
// //console.log(heading.textContent);
// //heading.textContent += "JS IS FUN";
// console.log(heading.interText);
// heading.innerText += "js is good";

// const div = document.querySelector("div");
// console.log(div.innerHTML);
// div.innerHTML += "<p>okay</p>";
// const name = "john";
// div.innerHTML = `<h1>Welcome ${name}</h1>`;
// //inetract with css class names means you have styled your css then you just want to call on them in your java script
// const beginPara = document.querySelector(".begin");
// console.log(beginPara);
// beginPara.className = "okay";
// beginPara.id = "good";
// beginPara.style.color = "red";
// beginPara.style.backgroundColor = "green";
// //interact with css class names 
// const h1 = document.querySelector("h1");
// h1.className = "success";
// //classList - add or remove
// const msg = document.querySelector("h2.message");
// //console.log(msg.classlist);
// msg.classList.add("error");
// msg.classList.remove("example");
// console.log(msg.classList.contains("good"));

// console.log(msg);
// //classlist method-add or remove -conatins-ask if it contaims an element or classname (to check if an element has it or not)and returns true or false
// //how to create element in js using the create element method
// const section = document.createElement("section");
// section.innerHTML = "<h1>Created from JS</h1>";
// //append it
// const body = document.querySelector("body");
// body.appendChild(section);
// //remove element remove child
// //body.removeChild(section)

// //replace child 
// const link = document.createElement("a");

// link.innerText = "Visit Google";
// //link.href = "https://google.com";
// link.setAttribute("href", "https://google.com");

// body.replaceChild(link, section);
// //responding to users interactions
// //two things involved when responding to interactions
// //event click-what happens when a user clicks the button
// //event handler
// //add event listener-first listen for the event and then handle
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     console.log("btn clicked");
//     body.style.backgroundColor = "aqua";
// });
const form = document.querySelector("form");
//sobmit
form.addEventListener("submit", (event) => {
    //default of forms when submitted is to refresh the page
    event.preventDefault();
    //select those inputfields
    const username = document.querySelector(".username");
    const password = document.querySelector(".password");

    const usernameValue = username.value.trim();
    const passwordValue = password.value;
    const small = document.querySelector("small");
   // console.log(usernameValue, passwordValue);
   //validate the password mjust not include password
   if(!usernameValue || !passwordValue) {
    //display error message
    small.textContent = "Please fill all fields";
   } else if (usernameValue.length < 5) {
     small.textContent = "Minimum username length is 5";
   } else if (passwordValue.toLowerCase().includes("password")) {
    small.innerText = "password must not include password";
   } else {
    //submit form
    small.textContent = "Form submitted";
   }
})

