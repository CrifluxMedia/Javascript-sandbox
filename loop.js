//LOOPS-a way by which you can perform an action multiple times
//FOR LOOP

//for (initializer; condition; increment){line of code} as ;long as that condition is true then you are going to keep running a line of code when it gets to condition where the line becomes false then the loop stops
//infinite loop(u need to be careful when writing loops)

for (let i = 0; i < 10; i++) {
    console.log("loop");
}

//write a loop(another name for loop-iteration,recursion) that return the sum of natural numbers between 0 and 3 (0,+1+2+3)
let sum = 0;
//0
for (let i = 0; i <= 3; i++) {
    sum += i;
}
console.log(sum);

//while
//initializer
//while(condition)
//increment
//}

let y = 0;
while (y <= 5) {
    //perform action
    console.log("in the loop");
    
    y++;
}

let num = 1;
while (num <= 10) {
    console.log("current Value of Num is " + num);

    num++;
}

//Do while Loop-
//performs the action once at least whether condition is true or false

let x = 5;
do {
  console.log("I am in the loop");
  x++;
} while (x <= 2);