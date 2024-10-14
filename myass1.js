[10:29 pm, 13/10/2024] Hussaina Cd Cls: // 1. Write a function that prints out the title of each product in the cart array.

cart.forEach(item => {
  console.log(item.title);
})

// 2. Write a function that calculates the total number of items (quantity) in the cart.

let totalNumber = 0;
cart.forEach((item) => {
  totalNumber += item.quantity;
});
console.log(totalNumber);

// 3. Write a function that finds and prints the most expensive product in the cart.

let mostExpensiveProduct = cart [0]
cart.forEach((item) =>{
  if (item.price > mostExpensiveProduct.price){
  mostExpensiveProduct = item;
  }
})
console.log(The most expensive product is ${mostExpensiveProduct.price});


//4. Write a function that calculates the total value of the cart by multiplying the price and quantity for each product, and then summing up the results.

let totalValue = 0
cart.forEach((item) => {
  totalValue += item.price * item.quantity;
})

console.log(The total value of the cart is ${totalValue});

// 5. Write a function that filters and displays products that cost more 100

let product = 0
cart.filter((item) => {
  if(item.price > 100){
    product = item;
  }
})
console.log(This products cost more than ${product.price});

//6. Write a function that checks if a certain product is in the cart based on its title. e.g is Laptop in the cart

//7. Write a function that displays each product along with its total value (price * quantity).

//8. Write a function that concatenates all the product titles into a single string, separated by commas.

const allTitle = cart.map((item) => item.title).join(", ");
console.log(allTitle);
